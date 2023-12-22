import { PlateElement, type PlateElementProps, type Value } from '@udecode/plate'
import { type TLinkElement, useLink } from '@udecode/plate-link'
import { type ElementRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const LinkElement = forwardRef<ElementRef<typeof PlateElement>, PlateElementProps<Value, TLinkElement>>(
  ({ className, children, ...props }, ref) => {
    const { props: linkProps } = useLink({ element: props.element })

    return (
      <PlateElement
        asChild
        ref={ref}
        className={cn(
          'font-medium text-slate-900 underline decoration-primary underline-offset-4 dark:text-slate-50',
          className,
        )}
        {...linkProps}
        {...(props as Record<string, unknown>)}
      >
        <a>{children}</a>
      </PlateElement>
    )
  },
)
LinkElement.displayName = 'LinkElement'

export { LinkElement }
