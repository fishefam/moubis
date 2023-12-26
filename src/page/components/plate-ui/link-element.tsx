import { PlateElement } from '@udecode/plate'
import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TLinkElement } from '@udecode/plate-link'
import { useLink } from '@udecode/plate-link'
import React from 'react'

import { cn } from '@/lib/utils'

const LinkElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateElementProps<Value, TLinkElement>>(
  ({ className, children, ...props }, ref) => {
    const { props: linkProps } = useLink({ element: props.element })

    return (
      <PlateElement
        asChild
        ref={ref}
        className={cn('font-medium text-primary underline decoration-primary underline-offset-4', className)}
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
