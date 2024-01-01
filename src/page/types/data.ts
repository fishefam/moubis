import type { EditorState } from '@codemirror/state'
import type { EditorView } from '@uiw/react-codemirror'

import type { Plate, TDocument, TPlateEditor } from './plate'

export type TDataKey =
  | 'actionId'
  | 'algorithm'
  | 'authorNotesEditor'
  | 'classId'
  | 'commentEditor'
  | 'customCss'
  | 'editor'
  | 'name'
  | 'uid'
export type TEditableDataKey = 'algorithm' | 'authorNotesEditor' | 'commentEditor' | 'editor'
export type TBaseDataProps = { [key in TDataKey]: string }
export type TEditableData = Pick<TBaseDataProps, TEditableDataKey>
export type TEditableProps = { css: string; html: string; javascript: string }
export type TNormalizedDataPropValue =
  | { [key in 'authorNotesEditor' | 'commentEditor' | 'editor']: TEditableProps }
  | { [key: string]: string }
  | { algorithm: string }

export type TDataProps1 = {
  code: {
    css: { state: EditorState; value: string; view: EditorView }
    html: { state: EditorState; value: string; view: EditorView }
    javascript: { state: EditorState; value: string; view: EditorView }
  }
  plate: { state: TPlateEditor; value: TDocument; view: typeof Plate }
}
export type TDataProps2 = {
  code: { state: EditorState; value: string; view: EditorView }
}
export type TData = {
  algorithm: TDataProps2
  authorNotes: TDataProps1
  feedback: TDataProps1
  question: TDataProps1
}
