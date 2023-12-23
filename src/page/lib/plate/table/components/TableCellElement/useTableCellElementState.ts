import {
  getPluginOptions,
  useEditorRef,
  useElement,
} from '@udecode/plate-common'
import { useEffect } from 'react'
import { useReadOnly } from 'slate-react'

import { ELEMENT_TABLE, ELEMENT_TR } from '../../createTablePlugin'
import { computeCellIndices } from '../../merge/computeCellIndices'
import { getCellIndices } from '../../merge/getCellIndices'
import { getColSpan } from '../../queries/getColSpan'
import { getRowSpan } from '../../queries/getRowSpan'
import { getTableColumnIndex, getTableRowIndex } from '../../queries/index'
import { useTableStore } from '../../stores/tableStore'
import type {
  TablePlugin,
  TTableCellElement,
  TTableElement,
  TTableRowElement,
} from '../../types'
import type {
  BorderStylesDefault} from './getTableCellBorders'
import {
  getTableCellBorders,
} from './getTableCellBorders'
import { useIsCellSelected } from './useIsCellSelected'

export type TableCellElementState = {
  colIndex: number;
  rowIndex: number;
  readOnly: boolean;
  hovered: boolean;
  hoveredLeft: boolean;
  selected: boolean;
  rowSize: number | undefined;
  borders: BorderStylesDefault;
  isSelectingCell: boolean;
  colSpan: number;
};

export const useTableCellElementState = ({
  ignoreReadOnly,
}: {
  /**
   * Ignores editable readOnly mode
   */
  ignoreReadOnly?: boolean;
} = {}): TableCellElementState => {
  const editor = useEditorRef()
  const cellElement = useElement<TTableCellElement>()

  const colSpan = getColSpan(cellElement)
  const rowSpan = getRowSpan(cellElement)

  const readOnly = useReadOnly()

  const isCellSelected = useIsCellSelected(cellElement)
  const hoveredColIndex = useTableStore().get.hoveredColIndex()
  const selectedCells = useTableStore().get.selectedCells()

  const tableElement = useElement<TTableElement>(ELEMENT_TABLE)
  const rowElement = useElement<TTableRowElement>(ELEMENT_TR)
  const rowSizeOverrides = useTableStore().get.rowSizeOverrides()

  const { enableMerging, _cellIndices } = getPluginOptions<TablePlugin>(
    editor as any,
    ELEMENT_TABLE
  )
  if (!enableMerging) {
    const colIndex = getTableColumnIndex(editor, cellElement)
    const rowIndex = getTableRowIndex(editor, cellElement)

    const rowSize =
      rowSizeOverrides.get(rowIndex) ?? rowElement?.size ?? undefined

    const isFirstCell = colIndex === 0
    const isFirstRow = tableElement.children?.[0] === rowElement

    const borders = getTableCellBorders(cellElement, {
      isFirstCell,
      isFirstRow,
    })

    return {
      borders,
      colIndex,
      colSpan,
      hovered: hoveredColIndex === colIndex,
      hoveredLeft: isFirstCell && hoveredColIndex === -1,
      isSelectingCell: !!selectedCells,
      readOnly: !ignoreReadOnly && readOnly,
      rowIndex,
      rowSize,
      selected: isCellSelected,
    }
  }

  let result: { col: number; row: number }

  const calculated =
    getCellIndices(_cellIndices!, cellElement) ||
    computeCellIndices(editor, tableElement, cellElement)

  if (calculated) {
    result = calculated
  } else {
    const defaultColIndex = getTableColumnIndex(editor, cellElement)
    const defaultRowIndex = getTableRowIndex(editor, cellElement)
    result = { col: defaultColIndex, row: defaultRowIndex }
  }
  const colIndex = result.col
  const rowIndex = result.row

  const endingRowIndex = rowIndex + rowSpan - 1
  const endingColIndex = colIndex + colSpan - 1

  const rowSize =
    rowSizeOverrides.get(endingRowIndex) ?? rowElement?.size ?? undefined

  const isFirstCell = colIndex === 0
  const isFirstRow = tableElement.children?.[0] === rowElement

  const borders = getTableCellBorders(cellElement, {
    isFirstCell,
    isFirstRow,
  })

  return {
    borders,
    colIndex: endingColIndex,
    colSpan,
    hovered: hoveredColIndex === endingColIndex,
    hoveredLeft: isFirstCell && hoveredColIndex === -1,
    isSelectingCell: !!selectedCells,
    readOnly: !ignoreReadOnly && readOnly,
    rowIndex: endingRowIndex,
    rowSize,
    selected: isCellSelected,
  }
}

export const useTableCellElement = ({
  element,
}: {
  element: TTableCellElement;
}) => {
  const setHoveredColIndex = useTableStore().set.hoveredColIndex()

  useEffect(() => {
    setHoveredColIndex(null)
  }, [element, setHoveredColIndex])

  return {
    props: {
      colSpan: element.colSpan,
      rowSpan: element.rowSpan,
    },
  }
}
