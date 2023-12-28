import { ElementHeading } from '@/components/plate-ui/elements/heading'
import { ElementLink } from '@/components/plate-ui/elements/link'
import { ElementParagraph } from '@/components/plate-ui/elements/paragraph'
import { LeafBold } from '@/components/plate-ui/leafs/bold'
import { LeafHighlight } from '@/components/plate-ui/leafs/highlight'
import { LeafItalic } from '@/components/plate-ui/leafs/italic'
import { LeafStrikethrough } from '@/components/plate-ui/leafs/strikethrough'
import { LeafSubSuperscript } from '@/components/plate-ui/leafs/subscript'
import { LeafUnderline } from '@/components/plate-ui/leafs/underline'
import { ElementDivider } from '@/components/plate-ui/voids/divider'
import { ElementImage } from '@/components/plate-ui/voids/image'
import { EBlockElement, EInlineElement, EMarkBool, EMarkValue, EVoidElement } from '@/types/plate'
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
import { withLink } from './overrides/withLinks'

export const plugins = createPlugins(
  [
    /* Elements */
    createHeadingPlugin(),
    createLinkPlugin({ key: EInlineElement.LINK, withOverrides: withLink }),
    createParagraphPlugin({ key: EBlockElement.PARAGRAPH }),

    /* Voids */
    createHorizontalRulePlugin({ key: EVoidElement.DIVIDER }),
    createImagePlugin({ key: EVoidElement.BLOCK_IMAGE }),
    // createImagePlugin({ isInline: true, key: EVoidElement.INLINE_IMAGE }),

    /* Marks */
    createBoldPlugin({ key: EMarkBool.BOLD }),
    createHighlightPlugin({ key: EMarkValue.HIGHLIGHT }),
    createItalicPlugin({ key: EMarkBool.ITALIC }),
    createStrikethroughPlugin({ key: EMarkBool.STRIKETHROUGH }),
    createSubscriptPlugin({ key: EMarkBool.SUBSCRIPT }),
    createSubscriptPlugin({ key: EMarkBool.SUPERSCRIPT }),
    createUnderlinePlugin({ key: EMarkBool.UNDERLINE }),

    /* Functionalities */
    createNodeIdPlugin({ options: { idCreator: nanoid, reuseId: true } }),
  ],
  {
    components: {
      [EBlockElement.HEADING_1]: ElementHeading,
      [EBlockElement.HEADING_2]: ElementHeading,
      [EBlockElement.HEADING_3]: ElementHeading,
      [EBlockElement.HEADING_4]: ElementHeading,
      [EBlockElement.HEADING_5]: ElementHeading,
      [EBlockElement.HEADING_6]: ElementHeading,
      [EBlockElement.PARAGRAPH]: ElementParagraph,
      [EInlineElement.LINK]: ElementLink,
      [EMarkBool.BOLD]: LeafBold,
      [EMarkBool.ITALIC]: LeafItalic,
      [EMarkBool.STRIKETHROUGH]: LeafStrikethrough,
      [EMarkBool.SUBSCRIPT]: LeafSubSuperscript,
      [EMarkBool.SUPERSCRIPT]: LeafSubSuperscript,
      [EMarkBool.UNDERLINE]: LeafUnderline,
      [EMarkValue.HIGHLIGHT]: LeafHighlight,
      [EVoidElement.BLOCK_IMAGE]: ElementImage,
      [EVoidElement.DIVIDER]: ElementDivider,
      [EVoidElement.INLINE_IMAGE]: ElementImage,
    },
  },
)
