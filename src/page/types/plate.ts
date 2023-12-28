import type { ListStyleType, PlateElementProps, PlateLeafProps } from '@udecode/plate'
import type { Attributes } from 'react'

export enum EElement {
  BLOCK_IMAGE = 'blockImage',
  BLOCK_QUOTE = 'blockquote',
  CODE_BLOCK = 'codeBlock',
  CODE_LINE = 'codeLine',
  DIVIDER = 'divider',
  EXCALIDRAW = 'excalidraw',
  HEADING_1 = 'h1',
  HEADING_2 = 'h2',
  HEADING_3 = 'h3',
  HEADING_4 = 'h4',
  HEADING_5 = 'h5',
  HEADING_6 = 'h6',
  INLINE_IMAGE = 'inlineImage',
  LATEX = 'latex',
  LINK = 'link',
  LIST_CONTENT = 'listContent',
  LIST_ITEM = 'listItem',
  MENTION = 'mention',
  ORDERED_LIST = 'orderedList',
  PARAGRAPH = 'paragraph',
  TABBABLE = 'tabbable',
  TABLE = 'table',
  TABLE_CELL = 'tableCell',
  TABLE_HEADER = 'tableHeader',
  TABLE_ROW = 'tableRow',
  TODO = 'todo',
  UNORDERED_LIST = 'unorderedList',
  VIDEO = 'video',
}

export enum EAlign {
  CENTER = 'center',
  JUSTIFY = 'justify',
  LEFT = 'left',
  RIGHT = 'right',
}

export enum EMark {
  ALIGN = 'align',
  BOLD = 'bold',
  CODE = 'code',
  COLOR = 'color',
  FONT_FAMILY = 'fontFamily',
  FONT_SIZE = 'fontSize',
  HIGHLIGHT = 'highlight',
  ITALIC = 'italic',
  STRIKETHROUGH = 'strikethrough',
  SUBSCRIPT = 'subscript',
  SUPERSCRIPT = 'superscript',
  UNDERLINE = 'underline',
}

export type TElementType = EElement
export type TEmptyText = { text: '' }
export type TText = { text: string }
export type TLeaf = (TEmptyText | TText) & { [key in EMark]?: number | string | true }

export type TElement = {
  align?: EAlign
  attributes?: Attributes
  checked?: true
  children: (TElement | TLeaf)[]
  codeLang?: TProgrammingLang
  colSizes?: number[]
  excalidrawData?: TExcalidrawData
  id?: string
  indent?: number
  lineHeight?: number
  listItemType?: ListStyleType
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  type: TElementType
  url?: string
  value?: string
  width?: number | string
}

export type TDocument = TElement[]
export type TPlateElementProps = PlateElementProps & { element: TElement }
export type TPlateLeafProps = PlateLeafProps & { leaf: TLeaf }

export type TProgrammingLang = 'css' | 'html' | 'javascript' | 'latex'
export type TExcalidrawData = Record<string, unknown>
