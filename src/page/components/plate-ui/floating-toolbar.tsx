import type { ToolbarProps } from '@radix-ui/react-toolbar'
import { Toolbar } from '@radix-ui/react-toolbar'
import { PortalBody, useComposedRef } from '@udecode/plate'
import type {
  FloatingToolbarState} from '@udecode/plate-floating'
import {
  flip,
  offset,
  useFloatingToolbar,
  useFloatingToolbarState,
} from '@udecode/plate-floating'
import type { ElementRef} from 'react'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export type FloatingToolbarProps = {
  state?: FloatingToolbarState
} & ToolbarProps

const FloatingToolbar = forwardRef<ElementRef<typeof Toolbar>, FloatingToolbarProps>(
  ({ state, children, ...props }, componentRef) => {
    const floatingToolbarState = useFloatingToolbarState({
      ...state,
      floatingOptions: {
        middleware: [
          offset(12),
          flip({
            fallbackPlacements: ['top-start', 'top-end', 'bottom-start', 'bottom-end'],
            padding: 12,
          }),
        ],
        placement: 'top',
        ...state?.floatingOptions,
      },
    })

    const { ref: floatingRef, props: rootProps, hidden } = useFloatingToolbar(floatingToolbarState)

    const ref = useComposedRef<HTMLDivElement>(componentRef, floatingRef)

    if (hidden) return null

    return (
      <PortalBody>
        <Toolbar
          ref={ref}
          className={cn('absolute z-50 whitespace-nowrap border bg-popover px-1 opacity-100 shadow-md print:hidden')}
          {...rootProps}
          {...props}
        >
          {children}
        </Toolbar>
      </PortalBody>
    )
  },
)
FloatingToolbar.displayName = 'FloatingToolbar'

export { FloatingToolbar }
