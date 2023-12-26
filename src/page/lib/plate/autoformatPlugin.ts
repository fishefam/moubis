import type { AutoformatPlugin, AutoformatRule, PlatePlugin } from '@udecode/plate'

import { autoformatRules } from './autoformatRules'

export const autoformatPlugin: Partial<PlatePlugin<AutoformatPlugin>> = {
  options: {
    enableUndoOnDelete: true,
    rules: autoformatRules as AutoformatRule[],
  },
}
