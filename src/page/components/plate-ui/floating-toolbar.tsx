import type { FloatingToolbarState } from '@udecode/plate-floating'

import { cn } from '@/lib/utils'
import { PortalBody, useComposedRef } from '@udecode/plate-common'
import { flip, offset, useFloatingToolbar, useFloatingToolbarState } from '@udecode/plate-floating'
import React from 'react'

import type { ToolbarProps } from './toolbar'

import { Toolbar } from './toolbar'

export type FloatingToolbarProps = {
  state?: FloatingToolbarState
} & ToolbarProps

const FloatingToolbar = React.forwardRef<React.ElementRef<typeof Toolbar>, FloatingToolbarProps>(
  ({ children, state, ...props }, componentRef) => {
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

    const { hidden, props: rootProps, ref: floatingRef } = useFloatingToolbar(floatingToolbarState)

    const ref = useComposedRef<HTMLDivElement>(componentRef, floatingRef)

    if (hidden) return null

    return (
      <PortalBody>
        <Toolbar
          className={cn('absolute z-50 whitespace-nowrap border bg-popover px-1 opacity-100 shadow-md print:hidden')}
          ref={ref}
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
