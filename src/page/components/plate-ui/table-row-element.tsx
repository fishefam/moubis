import type { PlateElementProps } from '@udecode/plate-common'

import { cn } from '@/lib/utils'
import { PlateElement } from '@udecode/plate-common'
import React from 'react'

export type PlateTableRowElementProps = {
  hideBorder?: boolean
} & PlateElementProps

const TableRowElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateTableRowElementProps>(
  ({ children, hideBorder, ...props }, ref) => {
    return (
      <PlateElement asChild className={cn('h-full', hideBorder && 'border-none')} ref={ref} {...props}>
        <tr>{children}</tr>
      </PlateElement>
    )
  },
)
TableRowElement.displayName = 'TableRowElement'

export { TableRowElement }
