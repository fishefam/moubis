import { ElementDivider } from '@/components/plate-ui/elements/divider'
import { ElementHeading } from '@/components/plate-ui/elements/heading'
import { ElementImage } from '@/components/plate-ui/elements/image'
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
  createImagePlugin,
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
    /* Elements */
    createHeadingPlugin(),
    createHorizontalRulePlugin({ isVoid: true, key: EElement.DIVIDER }),
    createImagePlugin({ key: EElement.IMAGE }),
    createParagraphPlugin({ key: EElement.PARAGRAPH }),

    /* Marks */
    createBoldPlugin({ key: EMark.BOLD }),
    createHighlightPlugin({ key: EMark.HIGHLIGHT }),
    createItalicPlugin({ key: EMark.ITALIC }),
    createStrikethroughPlugin({ key: EMark.STRIKETHROUGH }),
    createSubscriptPlugin({ key: EMark.SUBSCRIPT }),
    createSubscriptPlugin({ key: EMark.SUPERSCRIPT }),
    createUnderlinePlugin({ key: EMark.UNDERLINE }),

    /* Functionalities */
    createNodeIdPlugin({ options: { idCreator: nanoid } }),
  ],
  {
    components: {
      [EElement.DIVIDER]: ElementDivider,
      [EElement.HEADING_1]: ElementHeading,
      [EElement.HEADING_2]: ElementHeading,
      [EElement.HEADING_3]: ElementHeading,
      [EElement.HEADING_4]: ElementHeading,
      [EElement.HEADING_5]: ElementHeading,
      [EElement.HEADING_6]: ElementHeading,
      [EElement.IMAGE]: ElementImage,
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
