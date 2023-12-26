import type { PlateElementProps } from '@udecode/plate-common'

import { PlateElement } from '@udecode/plate-common'
import React from 'react'

const ParagraphElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateElementProps>(
  ({ children, className, style = { lineHeight: 1.5 }, ...props }: PlateElementProps, ref) => {
    return (
      <PlateElement className={className} ref={ref} style={{ margin: 0, padding: '0.25rem 0', ...style }} {...props}>
        {children}
      </PlateElement>
    )
  },
)
ParagraphElement.displayName = 'ParagraphElement'

export { ParagraphElement }
