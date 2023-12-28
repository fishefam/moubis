import { ElementHeading } from '@/components/plate-ui/elements/heading'
import { ElementLink } from '@/components/plate-ui/elements/link'
import { ElementParagraph } from '@/components/plate-ui/elements/paragraph'
import { LeafBold } from '@/components/plate-ui/leafs/bold'
import { LeafHighlight } from '@/components/plate-ui/leafs/highlight'
import { LeafItalic } from '@/components/plate-ui/leafs/italic'
import { LeafStrikethrough } from '@/components/plate-ui/leafs/strikethrough'
import { LeafSubSuperscript } from '@/components/plate-ui/leafs/subscript'
import { ElementDivider } from '@/components/plate-ui/voids/divider'
import { ElementImage } from '@/components/plate-ui/voids/image'
import { EElement, EMark } from '@/types/plate'
import {
  createBoldPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createPlugins,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createUnderlinePlugin,
} from '@udecode/plate'

import { nanoid } from '../util'
import { LeafUnderline } from './underline'

export const plugins = createPlugins(
  [
    /* Elements */
    createHeadingPlugin(),
    createLinkPlugin({ isInline: true, key: EElement.LINK }),
    createParagraphPlugin({ key: EElement.PARAGRAPH }),

    /* Voids */
    createHorizontalRulePlugin({ isVoid: true, key: EElement.DIVIDER }),
    createImagePlugin({ key: EElement.BLOCK_IMAGE }),
    createImagePlugin({ isInline: true, key: EElement.INLINE_IMAGE }),

    /* Marks */
    createBoldPlugin({ key: EMark.BOLD }),
    createHighlightPlugin({ key: EMark.HIGHLIGHT }),
    createItalicPlugin({ key: EMark.ITALIC }),
    createStrikethroughPlugin({ key: EMark.STRIKETHROUGH }),
    createSubscriptPlugin({ key: EMark.SUBSCRIPT }),
    createSubscriptPlugin({ key: EMark.SUPERSCRIPT }),
    createUnderlinePlugin({ key: EMark.UNDERLINE }),

    /* Functionalities */
    createNodeIdPlugin({ options: { idCreator: nanoid, reuseId: true } }),
  ],
  {
    components: {
      [EElement.BLOCK_IMAGE]: ElementImage,
      [EElement.DIVIDER]: ElementDivider,
      [EElement.HEADING_1]: ElementHeading,
      [EElement.HEADING_2]: ElementHeading,
      [EElement.HEADING_3]: ElementHeading,
      [EElement.HEADING_4]: ElementHeading,
      [EElement.HEADING_5]: ElementHeading,
      [EElement.HEADING_6]: ElementHeading,
      [EElement.INLINE_IMAGE]: ElementImage,
      [EElement.LINK]: ElementLink,
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
