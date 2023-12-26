import type { PlateElementProps } from '@udecode/plate-common'

import { PlateElement } from '@udecode/plate-common'
import React from 'react'

const BlockquoteElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateElementProps>(
  ({ children, className, style = { lineHeight: 1.5 }, ...props }, ref) => {
    return (
      <PlateElement
        asChild
        className={className}
        ref={ref}
        style={{ borderLeftWidth: '2px', fontSize: '12px', margin: '0.25rem 0', paddingLeft: '1.5rem', ...style }}
        {...props}
      >
        <blockquote>{children}</blockquote>
      </PlateElement>
    )
  },
)
BlockquoteElement.displayName = 'BlockquoteElement'

export { BlockquoteElement }
