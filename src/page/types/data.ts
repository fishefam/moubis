import type { EditorState } from '@codemirror/state'
import type { EditorView } from '@uiw/react-codemirror'

import type { TDocument, TPlateEditor } from './plate'

// prettier-ignore
export type TInfoDataKey = 'actionId'  | 'classId'  | 'customCss'  | 'name' | 'uid'
export type TCodeDataKey = 'algorithm'
export type TTextDataKey = 'authorNotesEditor' | 'commentEditor' | 'editor'

export type TInfoRawData = { [key in TInfoDataKey]?: string }
export type TCodeRawData = { [key in TCodeDataKey]?: string }
export type TTextRawData = { [key in TTextDataKey]?: string }

export type TNormalizedCodeDataProps = { code: string }
export type TNormalizedTextDataProps = { css: string; html: string; javascript: string }

export type TNormalizedCodeData = { [key in TCodeDataKey]: TNormalizedCodeDataProps }
export type TNormalizedTextData = { [key in TTextDataKey]: TNormalizedTextDataProps }

export type TFinalTextDataProps = {
  code: {
    css: { state: EditorState; value: string; view: EditorView }
    html: { state: EditorState; value: string; view: EditorView }
    javascript: { state: EditorState; value: string; view: EditorView }
  }
  plate: { state: TPlateEditor; value: TDocument }
}
export type TFinalCodeDataProps = {
  code: { state: EditorState; value: string; view: EditorView }
}

export type TInfoData = TInfoRawData
export type TCodeData = {
  algorithm: TFinalCodeDataProps
}
export type TTextData = {
  authorNotes: TFinalTextDataProps
  feedback: TFinalTextDataProps
  question: TFinalTextDataProps
}
