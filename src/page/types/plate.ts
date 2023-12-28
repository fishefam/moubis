import type { ListStyleType, PlateElementProps, PlateLeafProps } from '@udecode/plate'
import type { Attributes } from 'react'

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
  LIST_CONTENT = 'list-content',
  LIST_ITEM = 'list-item',
  ORDERED_LIST = 'ordered-list',
  PARAGRAPH = 'paragraph',
  TABBABLE = 'tabbable',
  TABLE = 'table',
  TABLE_CELL = 'table-cell',
  TABLE_HEADER = 'table-header',
  TABLE_ROW = 'table-row',
  TODO = 'todo',
  UNORDERED_LIST = 'unordered-list',
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

export enum EMarkBool {
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
export type TLeaf = (TEmptyText | TText) & {
  [key in EMarkBool | EMarkValue]?: number | string | true
}

export type TInlineElement = {
  children: (TInlineElement | TLeaf)[]
  type: EInlineElement
} & TOtherElementProps

export type TBlockElement = {
  children: (TInlineElement | TLeaf)[] | TBlockElement[] | TVoidElement[]
  type: EBlockElement
} & TOtherElementProps

export type TVoidElement = {
  children: TEmptyText[]
  type: EVoidElement
} & TOtherElementProps

export type TOtherElementProps = {
  align?: EAlign
  attributes?: Attributes
  checked?: true
  colSizes?: number[]
  data?: TExcalidrawData
  id: string
  indent?: number
  lang?: TCodeLang
  lineHeight?: number
  listItemType?: ListStyleType
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  url?: string
  value?: string
  width?: number | string
}

export type TElement = TBlockElement | TInlineElement | TVoidElement

export type TDocument = (TBlockElement | TVoidElement)[]
export type TPlateElementProps = PlateElementProps & {
  element: TElement
}
export type TPlateLeafProps = PlateLeafProps & { leaf: TLeaf }

export type TCodeLang = 'css' | 'html' | 'javascript' | 'latex'
export type TExcalidrawData = Record<string, unknown>
