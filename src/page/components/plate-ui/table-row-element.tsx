import type { PlateElementProps } from '@udecode/plate-common'
import { PlateElement } from '@udecode/plate-common'
import React from 'react'

import { cn } from '@/lib/utils'

export type PlateTableRowElementProps = {
  hideBorder?: boolean
} & PlateElementProps

const TableRowElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateTableRowElementProps>(
  ({ hideBorder, children, ...props }, ref) => {
    return (
      <PlateElement asChild ref={ref} className={cn('h-full', hideBorder && 'border-none')} {...props}>
        <tr>{children}</tr>
      </PlateElement>
    )
  },
)
TableRowElement.displayName = 'TableRowElement'

export { TableRowElement }
