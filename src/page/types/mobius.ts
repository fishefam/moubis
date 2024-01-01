import type { EditorState } from '@codemirror/state'
import type { EditorView } from '@uiw/react-codemirror'

import type { Plate, TDocument, TPlateEditor } from './plate'

export type TMobiusBaseData = {
  actionId: string
  algorithm: string
  authorNotesEditor: string
  classId: string
  commentEditor: string
  customCss: string
  editor: string
  name: string
  uid: string
}

export type TMobiusPreparedData = {
  [key in keyof TMobiusBaseData]: { css: string; html: string; script: string } | string
}

export type TDataKey = 'algorithm' | 'authorNotesEditor' | 'commentEditor' | 'editor'
export type TDataProps<T extends TDataKey> = {
  code: T extends 'algorithm'
    ? {
        plain: { state: EditorState; value: string; view: EditorView }
      }
    : {
        css: { state: EditorState; value: string; view: EditorView }
        html: { state: EditorState; value: string; view: EditorView }
        javascript: { state: EditorState; value: string; view: EditorView }
      }
} & (T extends 'algorithm'
  ? Record<string, never>
  : {
      plate: { state: TPlateEditor; value: TDocument; view: typeof Plate }
    })
export type TData = {
  algorithm: TDataProps<'algorithm'>
  authorNotes: TDataProps<'authorNotesEditor'>
  feedback: TDataProps<'commentEditor'>
  question: TDataProps<'editor'>
}
