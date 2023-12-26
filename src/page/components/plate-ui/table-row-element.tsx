import type { PlateElementProps } from '@udecode/plate-common'

import { PlateElement } from '@udecode/plate-common'
import React from 'react'

export type PlateTableRowElementProps = {
  hideBorder?: boolean
} & PlateElementProps

const TableRowElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateTableRowElementProps>(
  ({ children, hideBorder, ...props }, ref) => {
    return (
      <PlateElement asChild className={hideBorder ? 'border-none' : ''} ref={ref} style={{ height: '100%' }} {...props}>
        <tr>{children}</tr>
      </PlateElement>
    )
  },
)
TableRowElement.displayName = 'TableRowElement'

export { TableRowElement }
