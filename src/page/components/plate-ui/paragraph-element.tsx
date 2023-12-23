import { PlateElement, type PlateElementProps } from '@udecode/plate'
import { type ElementRef, forwardRef } from 'react'

import { nanoid } from '@/lib/utils'
import { cn } from '@/lib/utils'

const ParagraphElement = forwardRef<ElementRef<typeof PlateElement>, PlateElementProps>(
  ({ className, children, element, ...props }: PlateElementProps, ref) => {
    return (
      <PlateElement
        data-node-id={element.id ?? nanoid()}
        ref={ref}
        className={cn('m-0 px-0 py-1', className)}
        {...props}
      >
        {children}
      </PlateElement>
    )
  },
)
ParagraphElement.displayName = 'ParagraphElement'

export { ParagraphElement }
