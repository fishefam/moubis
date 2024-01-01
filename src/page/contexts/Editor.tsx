import type { TDocument, TPlateEditor } from '@/types/plate'
import type { ReactNode } from 'react'

import { plugins } from '@/lib/plate/plugins'
import { getExtensionBaseUrl, nanoid } from '@/lib/util'
import { createPlateEditor, deserializeHTML, Plate } from '@/types/plate'
import { EditorView } from '@uiw/react-codemirror'
import { MathJaxContext } from 'better-react-mathjax'
import { createContext, useContext } from 'react'

type TBaseInfo<T extends EditorView | TPlateEditor> = { editor: T; value: T extends EditorView ? string : TDocument }
export type TContextData = {
  code: { css: TBaseInfo<EditorView>; html: TBaseInfo<EditorView>; js: TBaseInfo<EditorView> }
  plate: TBaseInfo<TPlateEditor>
}
type TProps = { children: ReactNode; data: TContextData }

const PLATE = createPlateEditor({ id: nanoid() })
export const INITIAL_CONTEXT: TContextData = {
  code: {
    css: { editor: new EditorView(), value: '' },
    html: { editor: new EditorView(), value: '' },
    js: { editor: new EditorView(), value: '' },
  },
  plate: { editor: createPlateEditor(), value: deserializeHTML('<p></p>') },
}

export const EditorContext = createContext<TContextData>(INITIAL_CONTEXT)

export default function EditorContextProvider({ children, data }: TProps) {
  return (
    <EditorContext.Provider value={data}>
      <MathJaxContext
        config={{ startup: { typeset: false } }}
        hideUntilTypeset='every'
        src={`${getExtensionBaseUrl()}assets/tex-mml-chtml.js`}
      >
        <Plate
          editor={PLATE}
          plugins={plugins}
        >
          {children}
        </Plate>
      </MathJaxContext>
    </EditorContext.Provider>
  )
}

export function useEditorContext() {
  return useContext(EditorContext)
}
