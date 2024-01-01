import type {
  TBaseDataProps,
  TData,
  TDataProps1,
  TDataProps2,
  TEditableData,
  TEditableDataKey,
  TEditableProps,
  TNormalizedDataPropValue,
} from '@/types/data'

import { ELocalStorage } from '@/types/app'
import { createPlateEditor, deserializeHTML, Plate, type TDocument } from '@/types/plate'
import { type CreatePlateEditorOptions, type PlateEditor } from '@udecode/plate'
import { EditorState, type EditorStateConfig, EditorView, type EditorViewConfig } from '@uiw/react-codemirror'

import { extractHTML, nanoid } from './util'

export function getData(): TEditableData {
  const {
    algorithm = '',
    authorNotesEditor = '',
    commentEditor = '',
    editor = '',
  } = JSON.parse(localStorage.getItem(ELocalStorage.DATA)!) as TBaseDataProps
  return { algorithm, authorNotesEditor, commentEditor, editor }
}

export function normalizeData(data: TEditableData): TNormalizedDataPropValue {
  const keys = Object.keys(data) as TEditableDataKey[]
  const values = Object.values(data)
  const transforms = keys.map((k, i) =>
    k === 'algorithm'
      ? values[i]
      : {
          css: extractHTML(values[i], 'css'),
          html: extractHTML(values[i], 'html'),
          javascript: extractHTML(values[i], 'javascript'),
        },
  )
  const merge = keys.map((k, i) => [k, transforms[i]])
  return Object.fromEntries(merge)
}

export function prepareData(
  data: TNormalizedDataPropValue,
  options?: {
    codeStateConfig?: EditorViewConfig
    codeViewConfig?: EditorStateConfig
    plateEditorConfig?: CreatePlateEditorOptions<TDocument, PlateEditor<TDocument>>
  },
): TData {
  const keys = Object.keys(data) as (keyof typeof data)[]
  const values = Object.values(data) as (string | TEditableProps)[]
  const transformedValues = keys.map((k, i) => {
    if (k === 'algorithm')
      return { code: { state: EditorState.create(options?.codeStateConfig), value: values[i], view: new EditorView() } }
    const html = (values[i] as TEditableProps).html
    return {
      code: {
        css: { state: EditorState.create(options?.codeStateConfig), value: values[i], view: new EditorView() },
        html: { state: EditorState.create(options?.codeStateConfig), value: values[i], view: new EditorView() },
        javascript: { state: EditorState.create(options?.codeStateConfig), value: values[i], view: new EditorView() },
      },
      plate: {
        state: createPlateEditor({ ...options?.plateEditorConfig, id: nanoid() }),
        value: deserializeHTML(html.length ? html : '<p></p>'),
        view: Plate,
      },
    }
  }) as (TDataProps1 | TDataProps2)[]
  const merge = keys.map((k, i) => [k, transformedValues[i]])
  return Object.fromEntries(merge)
}
