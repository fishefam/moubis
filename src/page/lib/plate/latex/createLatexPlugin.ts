import { createPluginFactory, onKeyDownToggleMark } from '@udecode/plate-common'

export const ELEMENT_LATEX = 'latex'

export const createLatexPlugin = createPluginFactory({
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
})
