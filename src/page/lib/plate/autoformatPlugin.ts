import { type AutoformatPlugin, type PlatePlugin } from '@udecode/plate'

import { autoformatRules } from './autoformatRules'

export const autoformatPlugin: Partial<PlatePlugin<AutoformatPlugin>> = {
  options: {
    enableUndoOnDelete: true,
    rules: autoformatRules as any,
  },
}
