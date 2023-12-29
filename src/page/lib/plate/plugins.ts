import { ElementBlockquote } from '@/components/plate-ui/elements/blockquote'
import { ElementHeading } from '@/components/plate-ui/elements/heading'
import { ElementLink } from '@/components/plate-ui/elements/link'
import { ElementParagraph } from '@/components/plate-ui/elements/paragraph'
import { ElementVideo } from '@/components/plate-ui/elements/video'
import { LeafBold } from '@/components/plate-ui/leafs/bold'
import { LeafHighlight } from '@/components/plate-ui/leafs/highlight'
import { LeafItalic } from '@/components/plate-ui/leafs/italic'
import { LeafStrikethrough } from '@/components/plate-ui/leafs/strikethrough'
import { LeafSubSuperscript } from '@/components/plate-ui/leafs/subscript'
import { LeafUnderline } from '@/components/plate-ui/leafs/underline'
import { ElementDivider } from '@/components/plate-ui/voids/divider'
import { ElementImage } from '@/components/plate-ui/voids/image'
import { EBlockElement, EInlineElement, EMarkTrue, EMarkValue, EVoidElement } from '@/types/plate'
import {
  createBlockquotePlugin,
  createBoldPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
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
} from '@udecode/plate'

import { nanoid } from '../util'
import { withLink } from './overrides/withLinks'

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
    createImagePlugin({ key: EVoidElement.BLOCK_IMAGE }),

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
      [EBlockElement.BLOCK_QUOTE]: ElementBlockquote,
      [EBlockElement.HEADING_1]: ElementHeading,
      [EBlockElement.HEADING_2]: ElementHeading,
      [EBlockElement.HEADING_3]: ElementHeading,
      [EBlockElement.HEADING_4]: ElementHeading,
      [EBlockElement.HEADING_5]: ElementHeading,
      [EBlockElement.HEADING_6]: ElementHeading,
      [EBlockElement.PARAGRAPH]: ElementParagraph,
      [EInlineElement.LINK]: ElementLink,
      [EMarkTrue.BOLD]: LeafBold,
      [EMarkTrue.ITALIC]: LeafItalic,
      [EMarkTrue.STRIKETHROUGH]: LeafStrikethrough,
      [EMarkTrue.SUBSCRIPT]: LeafSubSuperscript,
      [EMarkTrue.SUPERSCRIPT]: LeafSubSuperscript,
      [EMarkTrue.UNDERLINE]: LeafUnderline,
      [EMarkValue.HIGHLIGHT]: LeafHighlight,
      [EVoidElement.BLOCK_IMAGE]: ElementImage,
      [EVoidElement.DIVIDER]: ElementDivider,
      [EVoidElement.INLINE_IMAGE]: ElementImage,
      [EVoidElement.VIDEO]: ElementVideo,
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
