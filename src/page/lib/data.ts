import type {
  TCodeData,
  TCodeDataKey,
  TCodeRawData,
  TFinalCodeDataProps,
  TFinalTextDataProps,
  TInfoRawData,
  TNormalizedCodeData,
  TNormalizedTextData,
  TTextData,
  TTextDataKey,
  TTextRawData,
} from '@/types/data'

import { ELocalStorage } from '@/types/app'
import { createPlateEditor, deserializeHTML, type TDocument } from '@/types/plate'
import { type CreatePlateEditorOptions, type PlateEditor } from '@udecode/plate'
import { EditorState, type EditorStateConfig, EditorView, type EditorViewConfig } from '@uiw/react-codemirror'

import { extractHTML, nanoid, prettierSync } from './util'

export function getInfoRawData(): TInfoRawData {
  const {
    actionId = '',
    classId = '',
    customCss = '',
    name = '',
    uid = '',
  } = JSON.parse(localStorage.getItem(ELocalStorage.DATA)!) as TInfoRawData
  return { actionId, classId, customCss, name, uid }
}

export function getRawTextData(): TTextRawData {
  const {
    authorNotesEditor = '',
    commentEditor = '',
    editor = '',
  } = JSON.parse(localStorage.getItem(ELocalStorage.DATA)!) as TTextRawData
  return { authorNotesEditor, commentEditor, editor }
}

export function getRawCodeData(): TCodeRawData {
  const { algorithm = '' } = JSON.parse(localStorage.getItem(ELocalStorage.DATA)!) as TCodeRawData
  return { algorithm }
}

export function normalizeCodeData(data: TCodeRawData): TNormalizedCodeData {
  const keys = Object.keys(data) as TCodeDataKey[]
  const values = Object.values(data)
  const transforms = values.map((v) => ({ code: v }))
  const merge = keys.map((k, i) => [k, transforms[i]])
  return Object.fromEntries(merge)
}

export function normalizeTextData(data: TTextRawData): TNormalizedTextData {
  const keys = Object.keys(data) as TTextDataKey[]
  const values = Object.values(data)
  const transforms = values.map((v) => ({
    css: extractHTML(v, 'css'),
    html: extractHTML(v, 'html'),
    javascript: extractHTML(v, 'javascript'),
  }))
  const merge = keys.map((k, i) => [k, transforms[i]])
  return Object.fromEntries(merge)
}

export function prepareTextData(
  data: TNormalizedTextData,
  options?: {
    codeStateConfig?: EditorViewConfig
    codeViewConfig?: EditorStateConfig
    plateEditorConfig?: CreatePlateEditorOptions<TDocument, PlateEditor<TDocument>>
  },
): TTextData {
  const keys: (keyof TTextData)[] = ['authorNotes', 'feedback', 'question']
  const values = Object.values(data)
  const transforms = values.map<TFinalTextDataProps>((v) => ({
    code: {
      css: {
        state: EditorState.create(options?.codeStateConfig),
        value: prettierSync(v.css, 'css'),
        view: new EditorView(options?.codeViewConfig),
      },
      html: {
        state: EditorState.create(options?.codeStateConfig),
        value: prettierSync(v.html, 'html'),
        view: new EditorView(options?.codeViewConfig),
      },
      javascript: {
        state: EditorState.create(options?.codeStateConfig),
        value: prettierSync(v.javascript, 'javascript'),
        view: new EditorView(options?.codeViewConfig),
      },
    },
    plate: {
      state: createPlateEditor({ ...options?.plateEditorConfig, id: nanoid(9) }),
      value: deserializeHTML(v.html.length ? v.html : '<p></p>'),
    },
  }))
  const merge = keys.map((k, i) => [k, transforms[i]])
  return Object.fromEntries(merge)
}

export function prepareCodeData(
  data: TNormalizedCodeData,
  options?: {
    codeStateConfig?: EditorViewConfig
    codeViewConfig?: EditorStateConfig
    plateEditorConfig?: CreatePlateEditorOptions<TDocument, PlateEditor<TDocument>>
  },
): TCodeData {
  const keys: (keyof TCodeData)[] = ['algorithm']
  const values = Object.values(data)
  const transforms = values.map<TFinalCodeDataProps>((v) => ({
    code: {
      state: EditorState.create(options?.codeStateConfig),
      value: v.code,
      view: new EditorView(options?.codeViewConfig),
    },
  }))
  const merge = keys.map((k, i) => [k, transforms[i]])
  return Object.fromEntries(merge)
}

export function isTextData(preparedData: TCodeData | TTextData): preparedData is TTextData {
  const data = preparedData as TTextData
  return typeof data.authorNotes !== 'undefined'
}

export function isCodeData(preparedData: TCodeData | TTextData): preparedData is TCodeData {
  const data = preparedData as TCodeData
  return typeof data.algorithm !== 'undefined'
}
