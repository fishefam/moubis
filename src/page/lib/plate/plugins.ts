import { ElementDivider } from '@/components/plate-ui/elements/divider'
import { ElementHeading } from '@/components/plate-ui/elements/heading'
import { ElementParagraph } from '@/components/plate-ui/elements/paragraph'
import { LeafBold } from '@/components/plate-ui/leafs/bold'
import { LeafHighlight } from '@/components/plate-ui/leafs/highlight'
import { LeafItalic } from '@/components/plate-ui/leafs/italic'
import { LeafStrikethrough } from '@/components/plate-ui/leafs/strikethrough'
import { LeafSubSuperscript } from '@/components/plate-ui/leafs/subscript'
import { LeafUnderline } from '@/components/plate-ui/leafs/underline'
import { nanoid } from '@/lib/util'
import { EElement, EMark } from '@/types/plate'
import {
  createBoldPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createItalicPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createPlugins,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createUnderlinePlugin,
} from '@udecode/plate'

export const plugins = createPlugins(
  [
    createBoldPlugin({ key: EMark.BOLD }),
    createItalicPlugin({ key: EMark.ITALIC }),
    createUnderlinePlugin({ key: EMark.UNDERLINE }),
    createStrikethroughPlugin({ key: EMark.STRIKETHROUGH }),
    createHighlightPlugin({ key: EMark.HIGHLIGHT }),
    createParagraphPlugin({ key: EElement.PARAGRAPH }),
    createHeadingPlugin(),
    createSubscriptPlugin({ key: EMark.SUBSCRIPT }),
    createSubscriptPlugin({ key: EMark.SUPERSCRIPT }),
    createHorizontalRulePlugin({ isVoid: true, key: EElement.DIVIDER }),
    createNodeIdPlugin({ options: { idCreator: nanoid } }),
  ],
  {
    components: {
      [EElement.DIVIDER]: ElementDivider,
      [EElement.H1]: ElementHeading,
      [EElement.H2]: ElementHeading,
      [EElement.H3]: ElementHeading,
      [EElement.H4]: ElementHeading,
      [EElement.H5]: ElementHeading,
      [EElement.H6]: ElementHeading,
      [EElement.PARAGRAPH]: ElementParagraph,
      [EMark.BOLD]: LeafBold,
      [EMark.HIGHLIGHT]: LeafHighlight,
      [EMark.ITALIC]: LeafItalic,
      [EMark.STRIKETHROUGH]: LeafStrikethrough,
      [EMark.SUBSCRIPT]: LeafSubSuperscript,
      [EMark.SUPERSCRIPT]: LeafSubSuperscript,
      [EMark.UNDERLINE]: LeafUnderline,
    },
  },
)
