import type { CreatePlateEditorOptions, PlateEditor, PlateProps } from '@udecode/plate'

import { plugins } from '@/lib/plate/plugins'
import {
  createPlateEditor as _createPlateEditor,
  deserializeHtml as _deserializeHtml,
  Plate as _Plate,
  type ListStyleType,
  type PlateElementProps,
  type PlateLeafProps,
  type Value,
} from '@udecode/plate'

export enum EBlockElement {
  BLOCK_QUOTE = 'blockquote',
  CODE_BLOCK = 'code-block',
  CODE_LINE = 'code-line',
  HEADING_1 = 'h1',
  HEADING_2 = 'h2',
  HEADING_3 = 'h3',
  HEADING_4 = 'h4',
  HEADING_5 = 'h5',
  HEADING_6 = 'h6',
  PARAGRAPH = 'paragraph',
  TABBABLE = 'tabbable',
  TABLE = 'table',
  TABLE_CELL = 'table-cell',
  TABLE_HEADER = 'table-header',
  TABLE_ROW = 'table-row',
  TODO = 'todo',
}

export enum EVoidElement {
  BLOCK_IMAGE = 'block-image',
  DIVIDER = 'divider',
  EXCALIDRAW = 'excalidraw',
  INLINE_IMAGE = 'inline-image',
  VIDEO = 'video',
}

export enum EInlineElement {
  CODE_SYNTAX = 'code-syntax',
  LATEX = 'latex',
  LINK = 'link',
  MENTION = 'mention',
}

export enum EAlign {
  CENTER = 'center',
  JUSTIFY = 'justify',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum EMarkTrue {
  BOLD = 'bold',
  CODE = 'code',
  ITALIC = 'italic',
  KEYBOARD_INPUT = 'kbd',
  STRIKETHROUGH = 'strikethrough',
  SUBSCRIPT = 'subscript',
  SUPERSCRIPT = 'superscript',
  UNDERLINE = 'underline',
}

export enum EMarkValue {
  ALIGN = 'align',
  BACKGROUND_COLOR = 'backgroundColor',
  COLOR = 'color',
  FONT_FAMILY = 'fontFamily',
  FONT_SIZE = 'fontSize',
  HIGHLIGHT = 'highlight',
}

export type EElement = EBlockElement | EInlineElement | EVoidElement

export type TEmptyText = { text: '' }
export type TText = { text: string }
export type TLeaf = (TEmptyText | TText) &
  (
    | {
        [key in EMarkValue]?: number | string
      }
    | { [key in EMarkTrue]: true }
  )

export type TInlineElement<T = EInlineElement.LINK> = {
  children: (TInlineElement | TLeaf)[]
  type: EInlineElement
} & (T extends EInlineElement.LINK ? Pick<TExtraElementProps, 'url'> : Partial<TExtraElementProps>)

export type TBlockElement = {
  children: (TBlockElement | TVoidElement)[] | (TInlineElement | TLeaf)[]
  type: EBlockElement
} & Partial<TExtraElementProps>

export type TVoidElement = {
  children: TEmptyText[]
  type: EVoidElement
} & Partial<TExtraElementProps>

export type TIndentListProps = {
  listStyleType: ListStyleType
}

export type TExtraElementProps = TIndentListProps & {
  align: EAlign
  checked: true
  colSizes: number[]
  data: TExcalidrawData
  id: string
  indent: number
  lang: TCodeLang
  lineHeight: number
  listStart: number
  marginBottom: number
  marginLeft: number
  marginRight: number
  marginTop: number
  url: string
  value: string
  width: number | string
}

export type TElement = TBlockElement | TInlineElement | TVoidElement

export type TPlateElementProps<T extends TElement = TElement> = PlateElementProps & {
  element: T
}
export type TPlateLeafProps = PlateLeafProps & { leaf: TLeaf }

export type TCodeLang = 'css' | 'html' | 'javascript' | 'latex'
export type TExcalidrawData = Record<string, unknown>

export type TValue = Value

export type TDocument = (TBlockElement | TVoidElement)[] & Value
export type TPlateEditor = PlateEditor<TDocument>

/* Typed wrapper functions */
export const createPlateEditor = (options?: CreatePlateEditorOptions<TDocument, PlateEditor<TDocument>>) =>
  _createPlateEditor(options) as unknown as PlateEditor<TDocument>
export const deserializeHTML = (
  element: HTMLElement | string,
  editor = createPlateEditor({ plugins }),
  options?: {
    collapseWhiteSpace?: boolean | undefined
  },
) => _deserializeHtml(editor as unknown as PlateEditor<Value>, { ...options, element }) as TDocument

/* Typed wrapper components */
export const Plate = _Plate as (props: PlateProps<TDocument, PlateEditor<TDocument>>) => JSX.Element
