import type { PlateEditor, Value } from '@udecode/plate-common'
import { getPluginType } from '@udecode/plate-common'

import { ELEMENT_TD, ELEMENT_TH } from '../createTablePlugin'
import type { TablePlugin } from '../types'

export type GetEmptyCellNodeOptions = {
  /**
   * Header cell
   */
  header?: boolean;
} & Omit<TablePlugin, '_cellIndices'>

export const getEmptyCellNode = <V extends Value>(
  editor: PlateEditor<V>,
  { header, newCellChildren = [editor.blockFactory()] }: GetEmptyCellNodeOptions
) => {
  return {
    children: newCellChildren,
    type: header
      ? getPluginType(editor, ELEMENT_TH)
      : getPluginType(editor, ELEMENT_TD),
  }
}
