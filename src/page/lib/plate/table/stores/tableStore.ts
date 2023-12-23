import type { TElement } from '@udecode/plate-common'
import { createAtomStore } from '@udecode/plate-common'
import { useCallback } from 'react'

export type TableStoreSizeOverrides = Map<number, number>;

export const { tableStore, useTableStore, TableProvider } = createAtomStore(
  {
    colSizeOverrides: new Map() as TableStoreSizeOverrides,
    hoveredColIndex: null as number | null,
    marginLeftOverride: null as number | null,
    rowSizeOverrides: new Map() as TableStoreSizeOverrides,
    selectedCells: null as TElement[] | null,
    selectedTable: null as TElement[] | null,
  },
  { name: 'table' as const }
)

const useOverrideSizeFactory = (
  setOverrides: (
    fn: (overrides: TableStoreSizeOverrides) => TableStoreSizeOverrides
  ) => void
) =>
  useCallback(
    (index: number, size: number | null) => {
      setOverrides((overrides) => {
        const newOverrides = new Map(overrides)

        if (size === null) {
          newOverrides.delete(index)
        } else {
          newOverrides.set(index, size)
        }

        return newOverrides
      })
    },
    [setOverrides]
  )

// jotai supports setting with functions, but createAtomStore doesn't know that
export const useOverrideColSize = () => {
  const setColSizeOverrides = useTableStore().set.colSizeOverrides()
  return useOverrideSizeFactory(setColSizeOverrides as unknown as any)
}

export const useOverrideRowSize = () => {
  const setRowSizeOverrides = useTableStore().set.rowSizeOverrides()
  return useOverrideSizeFactory(setRowSizeOverrides as unknown as any)
}

export const useOverrideMarginLeft = () =>
  useTableStore().set.marginLeftOverride()
