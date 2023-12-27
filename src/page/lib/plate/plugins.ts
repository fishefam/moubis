import { nanoid } from '@/lib/utils'
import { createNodeIdPlugin, createPlugins } from '@udecode/plate'

export const plugins = createPlugins([createNodeIdPlugin({ options: { idCreator: nanoid } })], {
  components: {},
})
