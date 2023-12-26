import type {
  AutoformatRule,
  CreatePlateEditorOptions,
  Decorate,
  DecorateEntry,
  DOMHandler,
  EDescendant,
  EElement,
  EElementEntry,
  EElementOrText,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_HR,
  ELEMENT_IMAGE,
  ELEMENT_LI,
  ELEMENT_LINK,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TODO_LI,
  ELEMENT_TR,
  ELEMENT_UL,
  EMarks,
  ENode,
  ENodeEntry,
  EText,
  ETextEntry,
  InjectComponent,
  InjectProps,
  KeyboardHandler,
  NoInfer,
  OnChange,
  OverrideByKey,
  PlateEditor,
  PlateId,
  PlatePlugin,
  PlatePluginComponent,
  PlatePluginInsertData,
  PlatePluginProps,
  PlateProps,
  PluginOptions,
  SerializeHtml,
  TCommentText,
  TElement,
  TImageElement,
  TLinkElement,
  TMediaEmbedElement,
  TMentionElement,
  TMentionInputElement,
  TNodeEntry,
  TReactEditor,
  TTableElement,
  TText,
  TTodoListItemElement,
  WithOverride,
} from '@udecode/plate'
import type { ELEMENT_EXCALIDRAW, TExcalidrawElement } from '@udecode/plate-excalidraw'
import type { CSSProperties } from 'react'

import {
  createPlateEditor,
  createPluginFactory,
  createPlugins,
  createTEditor,
  getTEditor,
  useEditorRef,
  useEditorState,
  usePlateActions,
  usePlateSelectors,
  usePlateStates,
} from '@udecode/plate'

/**
 * Text
 */
export type EmptyText = {
  text: ''
}

export type PlainText = {
  text: string
}

export type RichText = {
  backgroundColor?: CSSProperties['backgroundColor']
  bold?: boolean
  code?: boolean
  color?: CSSProperties['color']
  fontFamily?: CSSProperties['fontFamily']
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
  italic?: boolean
  kbd?: boolean
  strikethrough?: boolean
  subscript?: boolean
  underline?: boolean
} & TText &
  TCommentText

/**
 * Inline Elements
 */

export type MyLinkElement = {
  children: RichText[]
  type: typeof ELEMENT_LINK
} & TLinkElement

export type MyMentionInputElement = {
  children: [PlainText]
  type: typeof ELEMENT_MENTION_INPUT
} & TMentionInputElement

export type MyMentionElement = {
  children: [EmptyText]
  type: typeof ELEMENT_MENTION
} & TMentionElement

export type MyInlineElement = MyLinkElement | MyMentionElement | MyMentionInputElement
export type MyInlineDescendant = MyInlineElement | RichText
export type MyInlineChildren = MyInlineDescendant[]

/**
 * Block props
 */

export type MyIndentProps = {
  indent?: number
}

export type MyIndentListProps = {
  listRestart?: number
  listStart?: number
  listStyleType?: string
} & MyIndentProps

export type MyLineHeightProps = {
  lineHeight?: CSSProperties['lineHeight']
}

export type MyAlignProps = {
  align?: CSSProperties['textAlign']
}

export type MyBlockElement = {
  id?: PlateId
} & TElement &
  MyIndentListProps &
  MyLineHeightProps

/**
 * Blocks
 */

export type MyParagraphElement = {
  children: MyInlineChildren
  type: typeof ELEMENT_PARAGRAPH
} & MyBlockElement

export type MyH1Element = {
  children: MyInlineChildren
  type: typeof ELEMENT_H1
} & MyBlockElement

export type MyH2Element = {
  children: MyInlineChildren
  type: typeof ELEMENT_H2
} & MyBlockElement

export type MyH3Element = {
  children: MyInlineChildren
  type: typeof ELEMENT_H3
} & MyBlockElement

export type MyH4Element = {
  children: MyInlineChildren
  type: typeof ELEMENT_H4
} & MyBlockElement

export type MyH5Element = {
  children: MyInlineChildren
  type: typeof ELEMENT_H5
} & MyBlockElement

export type MyH6Element = {
  children: MyInlineChildren
  type: typeof ELEMENT_H6
} & MyBlockElement

export type MyBlockquoteElement = {
  children: MyInlineChildren
  type: typeof ELEMENT_BLOCKQUOTE
} & MyBlockElement

export type MyCodeBlockElement = {
  children: MyCodeLineElement[]
  type: typeof ELEMENT_CODE_BLOCK
} & MyBlockElement

export type MyCodeLineElement = {
  children: PlainText[]
  type: typeof ELEMENT_CODE_LINE
} & TElement

export type MyTableElement = {
  children: MyTableRowElement[]
  type: typeof ELEMENT_TABLE
} & TTableElement &
  MyBlockElement

export type MyTableRowElement = {
  children: MyTableCellElement[]
  type: typeof ELEMENT_TR
} & TElement

export type MyTableCellElement = {
  children: MyNestableBlock[]
  type: typeof ELEMENT_TD
} & TElement

export type MyBulletedListElement = {
  children: MyListItemElement[]
  type: typeof ELEMENT_UL
} & TElement &
  MyBlockElement

export type MyNumberedListElement = {
  children: MyListItemElement[]
  type: typeof ELEMENT_OL
} & TElement &
  MyBlockElement

export type MyListItemElement = {
  children: MyInlineChildren
  type: typeof ELEMENT_LI
} & TElement &
  MyBlockElement

export type MyTodoListElement = {
  children: MyInlineChildren
  type: typeof ELEMENT_TODO_LI
} & TTodoListItemElement &
  MyBlockElement

export type MyImageElement = {
  children: [EmptyText]
  type: typeof ELEMENT_IMAGE
} & TImageElement &
  MyBlockElement

export type MyMediaEmbedElement = {
  children: [EmptyText]
  type: typeof ELEMENT_MEDIA_EMBED
} & TMediaEmbedElement &
  MyBlockElement

export type MyHrElement = {
  children: [EmptyText]
  type: typeof ELEMENT_HR
} & MyBlockElement

export type MyExcalidrawElement = {
  children: [EmptyText]
  type: typeof ELEMENT_EXCALIDRAW
} & TExcalidrawElement &
  MyBlockElement

export type MyNestableBlock = MyParagraphElement

export type MyBlock = Exclude<MyElement, MyInlineElement>
export type MyBlockEntry = TNodeEntry<MyBlock>

export type MyRootBlock =
  | MyBlockquoteElement
  | MyBulletedListElement
  | MyCodeBlockElement
  | MyExcalidrawElement
  | MyH1Element
  | MyH2Element
  | MyH3Element
  | MyH4Element
  | MyH5Element
  | MyH6Element
  | MyHrElement
  | MyImageElement
  | MyMediaEmbedElement
  | MyNumberedListElement
  | MyParagraphElement
  | MyTableElement
  | MyTodoListElement

export type MyValue = MyRootBlock[]

/**
 * Editor types
 */

export type MyEditor = PlateEditor<MyValue> & { isDragging?: boolean }
export type MyReactEditor = TReactEditor<MyValue>
export type MyNode = ENode<MyValue>
export type MyNodeEntry = ENodeEntry<MyValue>
export type MyElement = EElement<MyValue>
export type MyElementEntry = EElementEntry<MyValue>
export type MyText = EText<MyValue>
export type MyTextEntry = ETextEntry<MyValue>
export type MyElementOrText = EElementOrText<MyValue>
export type MyDescendant = EDescendant<MyValue>
export type MyMarks = EMarks<MyValue>
export type MyMark = keyof MyMarks

/**
 * Plate types
 */

export type MyDecorate<P = PluginOptions> = Decorate<P, MyValue, MyEditor>
export type MyDecorateEntry = DecorateEntry<MyValue>
export type MyDOMHandler<P = PluginOptions> = DOMHandler<P, MyValue, MyEditor>
export type MyInjectComponent = InjectComponent<MyValue>
export type MyInjectProps = InjectProps<MyValue>
export type MyKeyboardHandler<P = PluginOptions> = KeyboardHandler<P, MyValue, MyEditor>
export type MyOnChange<P = PluginOptions> = OnChange<P, MyValue, MyEditor>
export type MyOverrideByKey = OverrideByKey<MyValue, MyEditor>
export type MyPlatePlugin<P = PluginOptions> = PlatePlugin<P, MyValue, MyEditor>
export type MyPlatePluginInsertData = PlatePluginInsertData<MyValue>
export type MyPlatePluginProps = PlatePluginProps<MyValue>
export type MyPlateProps = PlateProps<MyValue, MyEditor>
export type MySerializeHtml = SerializeHtml<MyValue>
export type MyWithOverride<P = PluginOptions> = WithOverride<P, MyValue, MyEditor>

/**
 * Plate store, Slate context
 */

export const getMyEditor = (editor: MyEditor) => getTEditor<MyValue, MyEditor>(editor)
export const useMyEditorRef = () => useEditorRef<MyValue, MyEditor>()
export const useMyEditorState = () => useEditorState<MyValue, MyEditor>()
export const useMyPlateSelectors = (id?: PlateId) => usePlateSelectors<MyValue, MyEditor>(id)
export const useMyPlateActions = (id?: PlateId) => usePlateActions<MyValue, MyEditor>(id)
export const useMyPlateStates = (id?: PlateId) => usePlateStates<MyValue, MyEditor>(id)

/**
 * Utils
 */
export const createMyEditor = () => createTEditor() as MyEditor
export const createMyPlateEditor = (options: CreatePlateEditorOptions<MyValue, MyEditor> = {}) =>
  createPlateEditor<MyValue, MyEditor>(options)
export const createMyPluginFactory = <P = PluginOptions>(defaultPlugin: PlatePlugin<NoInfer<P>, MyValue, MyEditor>) =>
  createPluginFactory(defaultPlugin)
export const createMyPlugins = (
  plugins: PlatePlugin[],
  options?: {
    components?: Record<string, PlatePluginComponent>
    overrideByKey?: OverrideByKey
  },
) => createPlugins<MyValue, MyEditor>(plugins, options)

export type MyAutoformatRule = AutoformatRule<MyValue, MyEditor>
