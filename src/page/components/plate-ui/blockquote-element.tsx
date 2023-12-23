import { PlateElement, type PlateElementProps } from '@udecode/plate'
import { type ElementRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const BlockquoteElement = forwardRef<ElementRef<typeof PlateElement>, PlateElementProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <PlateElement asChild ref={ref} className={cn(className)} {...props}>
        <blockquote style={{ borderLeftWidth: '2px', fontStyle: 'italic', margin: '0.25rem 0', paddingLeft: '1.5rem' }}>
          {children}
        </blockquote>
      </PlateElement>
    )
  },
)
BlockquoteElement.displayName = 'BlockquoteElement'

export { BlockquoteElement }
