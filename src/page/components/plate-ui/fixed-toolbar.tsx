import { cn } from '@/lib/utils'
import React from 'react'

import type { ToolbarProps } from './toolbar'

import { Toolbar } from './toolbar'

const FixedToolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(({ className, ...props }: ToolbarProps, ref) => {
  return (
    <Toolbar
      className={cn(
        'supports-backdrop-blur:bg-background/60 sticky left-0 top-[57px] z-50 w-full justify-between overflow-x-auto rounded-t-lg border-b border-b-border bg-background/95 backdrop-blur',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
FixedToolbar.displayName = 'FixedToolbar'

export { FixedToolbar }
