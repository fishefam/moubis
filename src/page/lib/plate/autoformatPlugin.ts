import type { AutoformatPlugin } from '@udecode/plate-autoformat'
import type { PlatePlugin } from '@udecode/plate-common'

import { autoformatRules } from '@/lib/plate/autoformatRules'

export const autoformatPlugin: Partial<PlatePlugin<AutoformatPlugin>> = {
  options: {
    enableUndoOnDelete: true,
    rules: autoformatRules as any,
  },
}
