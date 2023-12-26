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
import type { ELEMENT_EXCALIDRAW, TExcalidrawElement } from '@udecode/plate-excalidraw'
import type { CSSProperties } from 'react'

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
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  code?: boolean
  kbd?: boolean
  subscript?: boolean
  backgroundColor?: CSSProperties['backgroundColor']
  fontFamily?: CSSProperties['fontFamily']
  color?: CSSProperties['color']
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
} & TText &
  TCommentText

/**
 * Inline Elements
 */

export type MyLinkElement = {
  type: typeof ELEMENT_LINK
  children: RichText[]
} & TLinkElement

export type MyMentionInputElement = {
  type: typeof ELEMENT_MENTION_INPUT
  children: [PlainText]
} & TMentionInputElement

export type MyMentionElement = {
  type: typeof ELEMENT_MENTION
  children: [EmptyText]
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
  listStart?: number
  listRestart?: number
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
  type: typeof ELEMENT_PARAGRAPH
  children: MyInlineChildren
} & MyBlockElement

export type MyH1Element = {
  type: typeof ELEMENT_H1
  children: MyInlineChildren
} & MyBlockElement

export type MyH2Element = {
  type: typeof ELEMENT_H2
  children: MyInlineChildren
} & MyBlockElement

export type MyH3Element = {
  type: typeof ELEMENT_H3
  children: MyInlineChildren
} & MyBlockElement

export type MyH4Element = {
  type: typeof ELEMENT_H4
  children: MyInlineChildren
} & MyBlockElement

export type MyH5Element = {
  type: typeof ELEMENT_H5
  children: MyInlineChildren
} & MyBlockElement

export type MyH6Element = {
  type: typeof ELEMENT_H6
  children: MyInlineChildren
} & MyBlockElement

export type MyBlockquoteElement = {
  type: typeof ELEMENT_BLOCKQUOTE
  children: MyInlineChildren
} & MyBlockElement

export type MyCodeBlockElement = {
  type: typeof ELEMENT_CODE_BLOCK
  children: MyCodeLineElement[]
} & MyBlockElement

export type MyCodeLineElement = {
  type: typeof ELEMENT_CODE_LINE
  children: PlainText[]
} & TElement

export type MyTableElement = {
  type: typeof ELEMENT_TABLE
  children: MyTableRowElement[]
} & TTableElement &
  MyBlockElement

export type MyTableRowElement = {
  type: typeof ELEMENT_TR
  children: MyTableCellElement[]
} & TElement

export type MyTableCellElement = {
  type: typeof ELEMENT_TD
  children: MyNestableBlock[]
} & TElement

export type MyBulletedListElement = {
  type: typeof ELEMENT_UL
  children: MyListItemElement[]
} & TElement &
  MyBlockElement

export type MyNumberedListElement = {
  type: typeof ELEMENT_OL
  children: MyListItemElement[]
} & TElement &
  MyBlockElement

export type MyListItemElement = {
  type: typeof ELEMENT_LI
  children: MyInlineChildren
} & TElement &
  MyBlockElement

export type MyTodoListElement = {
  type: typeof ELEMENT_TODO_LI
  children: MyInlineChildren
} & TTodoListItemElement &
  MyBlockElement

export type MyImageElement = {
  type: typeof ELEMENT_IMAGE
  children: [EmptyText]
} & TImageElement &
  MyBlockElement

export type MyMediaEmbedElement = {
  type: typeof ELEMENT_MEDIA_EMBED
  children: [EmptyText]
} & TMediaEmbedElement &
  MyBlockElement

export type MyHrElement = {
  type: typeof ELEMENT_HR
  children: [EmptyText]
} & MyBlockElement

export type MyExcalidrawElement = {
  type: typeof ELEMENT_EXCALIDRAW
  children: [EmptyText]
} & TExcalidrawElement &
  MyBlockElement

export type MyNestableBlock = MyParagraphElement

export type MyBlock = Exclude<MyElement, MyInlineElement>
export type MyBlockEntry = TNodeEntry<MyBlock>

export type MyRootBlock =
  | MyParagraphElement
  | MyH1Element
  | MyH2Element
  | MyH3Element
  | MyH4Element
  | MyH5Element
  | MyH6Element
  | MyBlockquoteElement
  | MyCodeBlockElement
  | MyTableElement
  | MyBulletedListElement
  | MyNumberedListElement
  | MyTodoListElement
  | MyImageElement
  | MyMediaEmbedElement
  | MyHrElement
  | MyExcalidrawElement

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
