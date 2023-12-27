import type { PlatePlugin } from '@udecode/plate-common'

import { onKeyDownToggleMark } from '@udecode/plate-common'

export const ELEMENT_LATEX = 'latex'

export const latexPlugin: PlatePlugin = {
  handlers: {
    onKeyDown: onKeyDownToggleMark,
  },
  isLeaf: true,
  isMarkableVoid: true,
  isVoid: true,
  key: ELEMENT_LATEX,
  options: {
    hotkey: 'mod+alt+l',
  },
}
