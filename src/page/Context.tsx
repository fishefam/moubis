import type { Value } from '@udecode/plate'
import type { ReactNode } from 'react'

import { createPlateEditor, deserializeHtml, Plate, type PlateEditor } from '@udecode/plate'
import { EditorView } from '@uiw/react-codemirror'
import { MathJaxContext } from 'better-react-mathjax'
import { createContext, useContext } from 'react'

import { plugins } from './lib/plate/plugins'
import { getExtensionBaseUrl, nanoid } from './lib/util'
import { EBlockElement, type TDocument, type TValue } from './types/plate'

type TContext = {
  codeValue: string
  codeView: EditorView
  plate: PlateEditor<TDocument>
  plateValue: TDocument
}
type TProps = { children: ReactNode }

const PLATE = createPlateEditor({ id: nanoid() }) as PlateEditor<TDocument>
const INITIAL_CODE_VALUE = ''
const INITIAL_PLATE_VALUE = !INITIAL_CODE_VALUE
  ? [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }]
  : (deserializeHtml(PLATE as unknown as PlateEditor<Value>, {
      element: INITIAL_CODE_VALUE,
    }) as TDocument)

const INITIAL_CONTEXT: TContext = {
  codeValue: INITIAL_CODE_VALUE,
  codeView: new EditorView(),
  plate: PLATE,
  plateValue: INITIAL_PLATE_VALUE,
}

export const RootContext = createContext<TContext>(INITIAL_CONTEXT)

export default function RootContextProvider({ children }: TProps) {
  return (
    <RootContext.Provider value={{ ...INITIAL_CONTEXT }}>
      <MathJaxContext
        config={{ startup: { typeset: false } }}
        hideUntilTypeset='every'
        src={`${getExtensionBaseUrl()}assets/tex-mml-chtml.js`}
      >
        <Plate
          editor={PLATE as unknown as PlateEditor<TValue>}
          plugins={plugins}
        >
          {children}
        </Plate>
      </MathJaxContext>
    </RootContext.Provider>
  )
}

export function useRootContext() {
  return useContext(RootContext)
}
