import type { PlateEditor, Value } from '@udecode/plate-common'
import { getPluginType } from '@udecode/plate-common'

import { ELEMENT_TABLE } from '../createTablePlugin'
import type { TTableElement } from '../types'
import type { GetEmptyRowNodeOptions } from './getEmptyRowNode'
import { getEmptyRowNode } from './getEmptyRowNode'

export type GetEmptyTableNodeOptions = {
  rowCount?: number;
} & GetEmptyRowNodeOptions

export const getEmptyTableNode = <V extends Value>(
  editor: PlateEditor<V>,
  {
    header,
    rowCount = 0,
    colCount,
    newCellChildren,
  }: GetEmptyTableNodeOptions = {}
): TTableElement => {
  const rows = Array.from({ length: rowCount })
    .fill(rowCount)
    .map(() => getEmptyRowNode(editor, { colCount, header, newCellChildren }))

  return {
    children: rows,
    type: getPluginType(editor, ELEMENT_TABLE),
  }
}
