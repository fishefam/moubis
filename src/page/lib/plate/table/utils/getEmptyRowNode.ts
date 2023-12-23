import type { PlateEditor, Value } from '@udecode/plate-common'
import { getPluginType } from '@udecode/plate-common'

import { ELEMENT_TR } from '../createTablePlugin'
import type { GetEmptyCellNodeOptions } from './getEmptyCellNode'
import { getEmptyCellNode } from './getEmptyCellNode'

export type GetEmptyRowNodeOptions = {
  colCount?: number;
} & Omit<GetEmptyCellNodeOptions, '_cellIndices'>

export const getEmptyRowNode = <V extends Value>(
  editor: PlateEditor<V>,
  { colCount = 1, ...options }: GetEmptyRowNodeOptions = {}
) => {
  return {
    children: Array.from({ length: colCount })
      .fill(colCount)
      .map(() => getEmptyCellNode(editor, options)),
    type: getPluginType(editor, ELEMENT_TR),
  }
}
