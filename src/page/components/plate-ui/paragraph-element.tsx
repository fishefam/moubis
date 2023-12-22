import { PlateElement, type PlateElementProps } from '@udecode/plate'
import { type ElementRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const ParagraphElement = forwardRef<ElementRef<typeof PlateElement>, PlateElementProps>(
  ({ className, children, ...props }: PlateElementProps, ref) => {
    return (
      <PlateElement ref={ref} className={cn('m-0 px-0 py-1', className)} {...props}>
        {children}
      </PlateElement>
    )
  },
)
ParagraphElement.displayName = 'ParagraphElement'

export { ParagraphElement }
