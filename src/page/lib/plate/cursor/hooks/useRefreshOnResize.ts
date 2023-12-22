import type { MutableRefObject } from 'react'
import { useCallback, useEffect } from 'react'
import type { Range } from 'slate'

import type { CursorOverlayProps } from '../components'
import type { SelectionRect } from '../types'
import { useRequestReRender } from './useRequestReRender'

export type UseRefreshOnResizeOptions = {
  selectionRectCache: MutableRefObject<WeakMap<Range, SelectionRect[]>>
} & Pick<CursorOverlayProps, 'refreshOnResize' | 'containerRef'>

export const useRefreshOnResize = ({
  containerRef,
  refreshOnResize,
  selectionRectCache,
}: UseRefreshOnResizeOptions) => {
  const requestReRender = useRequestReRender()

  // Reset the selection rect cache and request re-render.
  const refresh = useCallback(
    (sync = false) => {
      selectionRectCache.current = new WeakMap()
      requestReRender(sync)
    },
    [requestReRender, selectionRectCache],
  )

  // Refresh on container resize
  useEffect(() => {
    if (!refreshOnResize || !containerRef?.current) {
      return
    }

    const resizeObserver = new ResizeObserver(() => refresh())
    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [containerRef, refresh, refreshOnResize])

  return {
    refresh,
  }
}
