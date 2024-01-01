import type { TData } from '@/types/data'
import type { ReactNode } from 'react'

import { plugins } from '@/lib/plate/plugins'
import { getExtensionBaseUrl } from '@/lib/util'
import { createPlateEditor, EBlockElement, Plate } from '@/types/plate'
import { EditorState, EditorView } from '@uiw/react-codemirror'
import { MathJaxContext } from 'better-react-mathjax'
import { createContext, useContext } from 'react'

type TProps = { children: ReactNode; data: TData }

const ROOT_PLATE_STATE = createPlateEditor({ id: 'root-plate-state' })
const INITIAL_CONTEXT: TData = {
  algorithm: { code: { state: EditorState.create(), value: '', view: new EditorView() } },
  authorNotes: {
    code: {
      css: { state: EditorState.create(), value: '', view: new EditorView() },
      html: { state: EditorState.create(), value: '', view: new EditorView() },
      javascript: { state: EditorState.create(), value: '', view: new EditorView() },
    },
    plate: {
      state: createPlateEditor(),
      value: [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }],
      view: Plate,
    },
  },
  feedback: {
    code: {
      css: { state: EditorState.create(), value: '', view: new EditorView() },
      html: { state: EditorState.create(), value: '', view: new EditorView() },
      javascript: { state: EditorState.create(), value: '', view: new EditorView() },
    },
    plate: {
      state: createPlateEditor(),
      value: [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }],
      view: Plate,
    },
  },
  question: {
    code: {
      css: { state: EditorState.create(), value: '', view: new EditorView() },
      html: { state: EditorState.create(), value: '', view: new EditorView() },
      javascript: { state: EditorState.create(), value: '', view: new EditorView() },
    },
    plate: {
      state: createPlateEditor(),
      value: [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }],
      view: Plate,
    },
  },
}

export const EditorContext = createContext(INITIAL_CONTEXT)

export function EditorContextProvider({ children, data }: TProps) {
  return (
    <EditorContext.Provider value={data}>
      <MathJaxContext
        config={{ startup: { typeset: false } }}
        hideUntilTypeset='every'
        src={`${getExtensionBaseUrl()}assets/tex-mml-chtml.js`}
      >
        <Plate
          editor={ROOT_PLATE_STATE}
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
