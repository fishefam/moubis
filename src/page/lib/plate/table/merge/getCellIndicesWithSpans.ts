import { getColSpan } from '../queries/getColSpan'
import { getRowSpan } from '../queries/getRowSpan'
import type { TTableCellElement } from '../types'

export const getCellIndicesWithSpans = (
  { col, row }: { col: number; row: number },
  endCell: TTableCellElement
) => {
  return {
    col: col + getColSpan(endCell) - 1,
    row: row + getRowSpan(endCell) - 1,
  }
}
