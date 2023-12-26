import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TLinkElement } from '@udecode/plate-link'

import { cn } from '@/lib/utils'
import { PlateElement } from '@udecode/plate'
import { useLink } from '@udecode/plate-link'
import React from 'react'

const LinkElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateElementProps<Value, TLinkElement>>(
  ({ children, className, ...props }, ref) => {
    const { props: linkProps } = useLink({ element: props.element })

    return (
      <PlateElement
        asChild
        className={cn('font-medium text-primary underline decoration-primary underline-offset-4', className)}
        ref={ref}
        {...linkProps}
        {...props}
      >
        <a>{children}</a>
      </PlateElement>
    )
  },
)
LinkElement.displayName = 'LinkElement'

export { LinkElement }
