import { ElementParagraph } from '@/components/plate-ui/elements/paragraph'
import { nanoid } from '@/lib/utils'
import { ECommonElement } from '@/types/plate'
import { createNodeIdPlugin, createParagraphPlugin, createPlugins } from '@udecode/plate'

export const plugins = createPlugins(
  [createParagraphPlugin({ key: ECommonElement.PARAGRAPH }), createNodeIdPlugin({ options: { idCreator: nanoid } })],
  {
    components: {
      [ECommonElement.PARAGRAPH]: ElementParagraph,
    },
  },
)
