import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import type { ToolbarProps } from './toolbar'
import { Toolbar } from './toolbar'

const FixedToolbar = forwardRef<HTMLDivElement, ToolbarProps>(({ className, ...props }: ToolbarProps, ref) => {
  return (
    <Toolbar
      ref={ref}
      className={cn(
        'sticky left-0 top-0 z-50 w-full justify-between overflow-x-auto rounded-t-lg border shadow-sm bg-white',
        className,
      )}
      {...props}
    />
  )
})
FixedToolbar.displayName = 'FixedToolbar'

export { FixedToolbar }
