import type { PlateElementProps, Value } from '@udecode/plate-common'
import { getHandler, PlateElement } from '@udecode/plate-common'
import type { TMentionElement } from '@udecode/plate-mention'
import React from 'react'
import { useFocused, useSelected } from 'slate-react'

import { cn } from '@/lib/utils'

export type MentionInputElementProps = {
  onClick?: (mentionNode: () => unknown) => void
} & PlateElementProps<Value, TMentionElement>

const MentionInputElement = React.forwardRef<React.ElementRef<typeof PlateElement>, MentionInputElementProps>(
  ({ className, onClick, ...props }, ref) => {
    const { children, element } = props

    const selected = useSelected()
    const focused = useFocused()

    return (
      <PlateElement
        asChild
        ref={ref}
        data-slate-value={element.value}
        className={cn(
          'inline-block rounded-md bg-muted px-1.5 py-0.5 align-baseline text-sm',
          selected && focused && 'ring-2 ring-ring',
          className,
        )}
        onClick={getHandler(onClick, element as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>)}
        {...props}
      >
        <span>{children}</span>
      </PlateElement>
    )
  },
)
MentionInputElement.displayName = 'MentionInputElement'

export { MentionInputElement }
