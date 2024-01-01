import type { TCodeData, TTextData } from '@/types/data'
import type { ReactNode } from 'react'

import { plugins } from '@/lib/plate/plugins'
import { getExtensionBaseUrl } from '@/lib/util'
import { createPlateEditor, EBlockElement, Plate } from '@/types/plate'
import { EditorState, EditorView } from '@uiw/react-codemirror'
import { MathJaxContext } from 'better-react-mathjax'
import { createContext, useContext } from 'react'

type TProps = { children: ReactNode; codeData: TCodeData; textData: TTextData }

const ROOT_PLATE_STATE = createPlateEditor({ id: 'root-plate-state' })
const INITIAL_TEXT_DATA: TTextData = {
  authorNotes: {
    code: {
      css: { state: EditorState.create(), value: '', view: new EditorView() },
      html: { state: EditorState.create(), value: '', view: new EditorView() },
      javascript: { state: EditorState.create(), value: '', view: new EditorView() },
    },
    plate: {
      state: createPlateEditor(),
      value: [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }],
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
    },
  },
}
const INITIAL_CODE_DATA: TCodeData = {
  algorithm: {
    code: { state: EditorState.create(), value: '', view: new EditorView() },
  },
}

export const EditorContext = createContext({ codeData: INITIAL_CODE_DATA, textData: INITIAL_TEXT_DATA })

export function EditorContextProvider({ children, codeData, textData }: TProps) {
  return (
    <EditorContext.Provider value={{ codeData, textData }}>
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
