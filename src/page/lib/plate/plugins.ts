import { Blockquote } from '@/components/plate/elements/Blockquote'
import { Heading } from '@/components/plate/elements/Heading'
import { Link } from '@/components/plate/elements/Link'
import { Paragraph } from '@/components/plate/elements/Paragraph'
import { Video } from '@/components/plate/elements/Video'
import { Bold } from '@/components/plate/leafs/Bold'
import { Highlight } from '@/components/plate/leafs/Highlight'
import { Italic } from '@/components/plate/leafs/Italic'
import { Strikethrough } from '@/components/plate/leafs/Strikethrough'
import { SubSuperscript } from '@/components/plate/leafs/SubSuperscript'
import { Underline } from '@/components/plate/leafs/Underline'
import { Divider } from '@/components/plate/voids/Divider'
import { nanoid } from '@/lib/util'
import { EBlockElement, EInlineElement, EMarkTrue, EMarkValue, EVoidElement } from '@/types/plate'
import {
  createBlockquotePlugin,
  createBoldPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createIndentListPlugin,
  createIndentPlugin,
  createItalicPlugin,
  createLinkPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createPlugins,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createUnderlinePlugin,
  withLink,
} from '@udecode/plate'

export const plugins = createPlugins(
  [
    /* Elements */
    createHeadingPlugin(),
    createLinkPlugin({ key: EInlineElement.LINK, withOverrides: withLink }),
    createBlockquotePlugin({ key: EBlockElement.BLOCK_QUOTE }),
    createParagraphPlugin({ key: EBlockElement.PARAGRAPH }),
    createMediaEmbedPlugin({ key: EVoidElement.VIDEO }),

    /* Voids */
    createHorizontalRulePlugin({ key: EVoidElement.DIVIDER }),
    // createImagePlugin({ key: EVoidElement.BLOCK_IMAGE }),

    /* Marks */
    createBoldPlugin({ key: EMarkTrue.BOLD }),
    createHighlightPlugin({ key: EMarkValue.HIGHLIGHT }),
    createItalicPlugin({ key: EMarkTrue.ITALIC }),
    createStrikethroughPlugin({ key: EMarkTrue.STRIKETHROUGH }),
    createSubscriptPlugin({ key: EMarkTrue.SUBSCRIPT }),
    createSubscriptPlugin({ key: EMarkTrue.SUPERSCRIPT }),
    createUnderlinePlugin({ key: EMarkTrue.UNDERLINE }),

    /* Functionalities */
    createNodeIdPlugin({ options: { idCreator: nanoid, reuseId: true } }),

    /* Block Style */
    createIndentPlugin({ inject: { props: { validTypes: getIndentTypes() } } }),
    createIndentListPlugin({ inject: { props: { validTypes: getIndentTypes() } } }),
  ],
  {
    components: {
      [EBlockElement.BLOCK_QUOTE]: Blockquote,
      [EBlockElement.HEADING_1]: Heading,
      [EBlockElement.HEADING_2]: Heading,
      [EBlockElement.HEADING_3]: Heading,
      [EBlockElement.HEADING_4]: Heading,
      [EBlockElement.HEADING_5]: Heading,
      [EBlockElement.HEADING_6]: Heading,
      [EBlockElement.PARAGRAPH]: Paragraph,
      [EInlineElement.LINK]: Link,
      [EMarkTrue.BOLD]: Bold,
      [EMarkTrue.ITALIC]: Italic,
      [EMarkTrue.STRIKETHROUGH]: Strikethrough,
      [EMarkTrue.SUBSCRIPT]: SubSuperscript,
      [EMarkTrue.SUPERSCRIPT]: SubSuperscript,
      [EMarkTrue.UNDERLINE]: Underline,
      [EMarkValue.HIGHLIGHT]: Highlight,
      [EVoidElement.DIVIDER]: Divider,
      [EVoidElement.VIDEO]: Video,
    },
  },
)

function getIndentTypes() {
  return [
    EBlockElement.PARAGRAPH,
    EBlockElement.BLOCK_QUOTE,
    EBlockElement.HEADING_1,
    EBlockElement.HEADING_2,
    EBlockElement.HEADING_3,
    EBlockElement.HEADING_4,
    EBlockElement.HEADING_5,
    EBlockElement.HEADING_6,
  ]
}
