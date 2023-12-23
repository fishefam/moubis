import type {
  InsertNodesOptions,
  PlateEditor,
  Value} from '@udecode/plate-common'
import {
  getBlockAbove,
  getPluginOptions,
  getPluginType,
  getStartPoint,
  insertNodes,
  selectEditor,
  someNode,
  withoutNormalizing,
} from '@udecode/plate-common'

import { ELEMENT_TABLE } from '../createTablePlugin'
import type { TablePlugin, TTableElement } from '../types'
import type {
  GetEmptyTableNodeOptions} from '../utils/getEmptyTableNode'
import {
  getEmptyTableNode
} from '../utils/getEmptyTableNode'

/**
 * Insert table if selection not in table.
 * Select start of table.
 */
export const insertTable = <V extends Value>(
  editor: PlateEditor<V>,
  {
    rowCount = 2,
    colCount = 2,
    header,
    newCellChildren,
  }: GetEmptyTableNodeOptions = {},
  options: InsertNodesOptions<V> = {}
) => {
  const pluginOptions = getPluginOptions<TablePlugin, V>(editor, ELEMENT_TABLE)

  withoutNormalizing(editor, () => {
    if (
      !someNode(editor, {
        match: { type: getPluginType(editor, ELEMENT_TABLE) },
      })
    ) {
      insertNodes<TTableElement>(
        editor,
        getEmptyTableNode(editor, {
          colCount,
          header,
          newCellChildren: newCellChildren || pluginOptions?.newCellChildren,
          rowCount,
        }),
        {
          nextBlock: true,
          ...(options as any),
        }
      )

      if (editor.selection) {
        const tableEntry = getBlockAbove(editor, {
          match: { type: getPluginType(editor, ELEMENT_TABLE) },
        })
        if (!tableEntry) return

        selectEditor(editor, { at: getStartPoint(editor, tableEntry[1]) })
      }
    }
  })
}
