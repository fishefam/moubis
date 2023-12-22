import {
  type AutoformatRule,
  createPlateEditor as createPlEditor,
  type CreatePlateEditorOptions,
  createPluginFactory,
  createPlugins,
  createTEditor,
  type Decorate,
  type DecorateEntry,
  type DOMHandler,
  type EDescendant,
  type EElement,
  type EElementEntry,
  type EElementOrText,
  type ELEMENT_BLOCKQUOTE,
  type ELEMENT_CODE_BLOCK,
  type ELEMENT_CODE_LINE,
  type ELEMENT_H1,
  type ELEMENT_H2,
  type ELEMENT_H3,
  type ELEMENT_H4,
  type ELEMENT_H5,
  type ELEMENT_H6,
  type ELEMENT_HR,
  type ELEMENT_IMAGE,
  type ELEMENT_LI,
  type ELEMENT_LINK,
  type ELEMENT_MEDIA_EMBED,
  type ELEMENT_MENTION,
  type ELEMENT_MENTION_INPUT,
  type ELEMENT_OL,
  type ELEMENT_PARAGRAPH,
  type ELEMENT_TABLE,
  type ELEMENT_TD,
  type ELEMENT_TODO_LI,
  type ELEMENT_TR,
  type ELEMENT_UL,
  type EMarks,
  type ENode,
  type ENodeEntry,
  type EText,
  type ETextEntry,
  getTEditor,
  type InjectComponent,
  type InjectProps,
  type KeyboardHandler,
  type NoInfer,
  type OnChange,
  type OverrideByKey,
  type PlateEditor,
  type PlateId,
  type PlatePlugin,
  type PlatePluginComponent,
  type PlatePluginInsertData,
  type PlatePluginProps,
  type PlateProps,
  type PluginOptions,
  type SerializeHtml,
  type TCommentText,
  type TElement,
  type TImageElement,
  type TLinkElement,
  type TMediaEmbedElement,
  type TMentionElement,
  type TMentionInputElement,
  type TNodeEntry,
  type TReactEditor,
  type TTableElement,
  type TText,
  type TTodoListItemElement,
  useEditorRef,
  useEditorState,
  usePlateActions as useSlateActions,
  usePlateSelectors as useSlateSelectors,
  usePlateStates as useSlateStates,
  type WithOverride,
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
  backgroundColor?: React.CSSProperties['backgroundColor']
  bold?: boolean
  code?: boolean
  color?: React.CSSProperties['color']
  fontFamily?: React.CSSProperties['fontFamily']
  fontSize?: React.CSSProperties['fontSize']
  fontWeight?: React.CSSProperties['fontWeight']
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

export type TPlateLinkElement = {
  children: RichText[]
  type: typeof ELEMENT_LINK
} & TLinkElement

export type TPlateMentionInputElement = {
  children: [PlainText]
  type: typeof ELEMENT_MENTION_INPUT
} & TMentionInputElement

export type TPlateMentionElement = {
  children: [EmptyText]
  type: typeof ELEMENT_MENTION
} & TMentionElement

export type TPlateInlineElement = TPlateLinkElement | TPlateMentionElement | TPlateMentionInputElement
export type TPlateInlineDescendant = TPlateInlineElement | RichText
export type TPlateInlineChildren = TPlateInlineDescendant[]

/**
 * Block props
 */

export type TPlateIndentProps = {
  indent?: number
}

export type TPlateIndentListProps = {
  listRestart?: number
  listStart?: number
  listStyleType?: string
} & TPlateIndentProps

export type TPlateLineHeightProps = {
  lineHeight?: React.CSSProperties['lineHeight']
}

export type TPlateAlignProps = {
  align?: React.CSSProperties['textAlign']
}

export type TPlateBlockElement = {
  id?: PlateId
} & TElement &
  TPlateIndentListProps &
  TPlateLineHeightProps

/**
 * Blocks
 */

export type TPlateParagraphElement = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_PARAGRAPH
} & TPlateBlockElement

export type TPlateH1Element = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_H1
} & TPlateBlockElement

export type TPlateH2Element = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_H2
} & TPlateBlockElement

export type TPlateH3Element = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_H3
} & TPlateBlockElement

export type TPlateH4Element = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_H4
} & TPlateBlockElement

export type TPlateH5Element = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_H5
} & TPlateBlockElement

export type TPlateH6Element = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_H6
} & TPlateBlockElement

export type TPlateBlockquoteElement = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_BLOCKQUOTE
} & TPlateBlockElement

export type TPlateCodeBlockElement = {
  children: TPlateCodeLineElement[]
  type: typeof ELEMENT_CODE_BLOCK
} & TPlateBlockElement

export type TPlateCodeLineElement = {
  children: PlainText[]
  type: typeof ELEMENT_CODE_LINE
} & TElement

export type TPlateTableElement = {
  children: TPlateTableRowElement[]
  type: typeof ELEMENT_TABLE
} & TTableElement &
  TPlateBlockElement

export type TPlateTableRowElement = {
  children: TPlateTableCellElement[]
  type: typeof ELEMENT_TR
} & TElement

export type TPlateTableCellElement = {
  children: TPlateNestableBlock[]
  type: typeof ELEMENT_TD
} & TElement

export type TPlateBulletedListElement = {
  children: TPlateListItemElement[]
  type: typeof ELEMENT_UL
} & TElement &
  TPlateBlockElement

export type TPlateNumberedListElement = {
  children: TPlateListItemElement[]
  type: typeof ELEMENT_OL
} & TElement &
  TPlateBlockElement

export type TPlateListItemElement = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_LI
} & TElement &
  TPlateBlockElement

export type TPlateTodoListElement = {
  children: TPlateInlineChildren
  type: typeof ELEMENT_TODO_LI
} & TTodoListItemElement &
  TPlateBlockElement

export type TPlateImageElement = {
  children: [EmptyText]
  type: typeof ELEMENT_IMAGE
} & TImageElement &
  TPlateBlockElement

export type TPlateMediaEmbedElement = {
  children: [EmptyText]
  type: typeof ELEMENT_MEDIA_EMBED
} & TMediaEmbedElement &
  TPlateBlockElement

export type TPlateHrElement = {
  children: [EmptyText]
  type: typeof ELEMENT_HR
} & TPlateBlockElement

export type TPlateNestableBlock = TPlateParagraphElement

export type TPlateBlock = Exclude<TPlateElement, TPlateInlineElement>
export type TPlateBlockEntry = TNodeEntry<TPlateBlock>

export type TPlateRootBlock =
  | TPlateParagraphElement
  | TPlateH1Element
  | TPlateH2Element
  | TPlateH3Element
  | TPlateH4Element
  | TPlateH5Element
  | TPlateH6Element
  | TPlateBlockquoteElement
  | TPlateCodeBlockElement
  | TPlateTableElement
  | TPlateBulletedListElement
  | TPlateNumberedListElement
  | TPlateTodoListElement
  | TPlateImageElement
  | TPlateMediaEmbedElement
  | TPlateHrElement

export type TPlateValue = TPlateRootBlock[]

/**
 * Editor types
 */

export type TPlateEditor = PlateEditor<TPlateValue> & { isDragging?: boolean }
export type TPlateReactEditor = TReactEditor<TPlateValue>
export type TPlateNode = ENode<TPlateValue>
export type TPlateNodeEntry = ENodeEntry<TPlateValue>
export type TPlateElement = EElement<TPlateValue>
export type TPlateElementEntry = EElementEntry<TPlateValue>
export type TPlateText = EText<TPlateValue>
export type TPlateTextEntry = ETextEntry<TPlateValue>
export type TPlateElementOrText = EElementOrText<TPlateValue>
export type TPlateDescendant = EDescendant<TPlateValue>
export type TPlateMarks = EMarks<TPlateValue>
export type TPlateMark = keyof TPlateMarks

/**
 * Plate types
 */

export type TPlateDecorate<P = PluginOptions> = Decorate<P, TPlateValue, TPlateEditor>
export type TPlateDecorateEntry = DecorateEntry<TPlateValue>
export type TPlateDOMHandler<P = PluginOptions> = DOMHandler<P, TPlateValue, TPlateEditor>
export type TPlateInjectComponent = InjectComponent<TPlateValue>
export type TPlateInjectProps = InjectProps<TPlateValue>
export type TPlateKeyboardHandler<P = PluginOptions> = KeyboardHandler<P, TPlateValue, TPlateEditor>
export type TPlateOnChange<P = PluginOptions> = OnChange<P, TPlateValue, TPlateEditor>
export type TPlateOverrideByKey = OverrideByKey<TPlateValue, TPlateEditor>
export type TPlatePlatePlugin<P = PluginOptions> = PlatePlugin<P, TPlateValue, TPlateEditor>
export type TPlatePlatePluginInsertData = PlatePluginInsertData<TPlateValue>
export type TPlatePlatePluginProps = PlatePluginProps<TPlateValue>
export type TPlatePlateProps = PlateProps<TPlateValue, TPlateEditor>
export type TPlateSerializeHtml = SerializeHtml<TPlateValue>
export type TPlateWithOverride<P = PluginOptions> = WithOverride<P, TPlateValue, TPlateEditor>

/**
 * Plate store, Slate context
 */

export const getTPlateEditor = (editor: TPlateEditor) => getTEditor<TPlateValue, TPlateEditor>(editor)
export const usePlateEditorRef = () => useEditorRef<TPlateValue, TPlateEditor>()
export const usePlateEditorState = () => useEditorState<TPlateValue, TPlateEditor>()
export const usePlateSelectors = (id?: PlateId) => useSlateSelectors<TPlateValue, TPlateEditor>(id)
export const usePlateActions = (id?: PlateId) => useSlateActions<TPlateValue, TPlateEditor>(id)
export const usePlateStates = (id?: PlateId) => useSlateStates<TPlateValue, TPlateEditor>(id)

/**
 * Utils
 */

export const createPlateEditor = () => createTEditor() as TPlateEditor
export const createPlatePlateEditor = (options: CreatePlateEditorOptions<TPlateValue, TPlateEditor> = {}) =>
  createPlEditor<TPlateValue, TPlateEditor>(options)
export const createPlatePluginFactory = <P = PluginOptions>(
  defaultPlugin: PlatePlugin<NoInfer<P>, TPlateValue, TPlateEditor>,
) => createPluginFactory(defaultPlugin)
export const createPlatePlugins = (
  plugins: PlatePlugin[],
  options?: {
    components?: Record<string, PlatePluginComponent>
    overrideByKey?: OverrideByKey
  },
) => createPlugins<TPlateValue, TPlateEditor>(plugins, options)

export type TPlateAutoformatRule = AutoformatRule<TPlateValue, TPlateEditor>
