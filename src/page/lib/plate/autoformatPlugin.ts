import { type AutoformatPlugin, type PlatePlugin } from '@udecode/plate'

import { autoformatRules } from './autoformatRules'

export const autoformatPlugin: Partial<PlatePlugin<AutoformatPlugin>> = {
  options: {
    enableUndoOnDelete: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rules: autoformatRules as any,
  },
}
