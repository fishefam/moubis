import {
  type AutoformatRule,
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_TODO_LI,
  ELEMENT_UL,
  isBlock,
  setNodes,
  type TTodoListItemElement,
} from '@udecode/plate'

import { formatList, preFormat } from '@/lib/plate/autoformatUtils'

export const autoformatLists: AutoformatRule[] = [
  {
    format: (editor) => formatList(editor, ELEMENT_UL),
    match: ['* ', '- '],
    mode: 'block',
    preFormat,
    type: ELEMENT_LI,
  },
  {
    format: (editor) => formatList(editor, ELEMENT_OL),
    match: ['1. ', '1) '],
    mode: 'block',
    preFormat,
    type: ELEMENT_LI,
  },
  {
    match: '[] ',
    mode: 'block',
    type: ELEMENT_TODO_LI,
  },
  {
    format: (editor) =>
      setNodes<TTodoListItemElement>(
        editor,
        { checked: true, type: ELEMENT_TODO_LI },
        {
          match: (n) => isBlock(editor, n),
        },
      ),
    match: '[x] ',
    mode: 'block',
    type: ELEMENT_TODO_LI,
  },
]
