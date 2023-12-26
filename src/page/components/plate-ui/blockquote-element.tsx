import type { PlateElementProps } from '@udecode/plate-common'
import { PlateElement } from '@udecode/plate-common'
import React from 'react'

import { cn } from '@/lib/utils'

const BlockquoteElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateElementProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <PlateElement asChild ref={ref} className={cn('my-1 border-l-2 pl-6 italic', className)} {...props}>
        <blockquote>{children}</blockquote>
      </PlateElement>
    )
  },
)
BlockquoteElement.displayName = 'BlockquoteElement'

export { BlockquoteElement }
