import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TMentionElement } from '@udecode/plate-mention'
import type React from 'react'

import { cn } from '@/lib/utils'
import { getHandler, PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'
import { useFocused, useSelected } from 'slate-react'

export type MentionElementProps = {
  onClick?: (mentionNode: unknown) => void
  /**
   * Prefix rendered before mention
   */
  prefix?: string
  renderLabel?: (mentionable: TMentionElement) => string
} & PlateElementProps<Value, TMentionElement>

const MentionElement = forwardRef<React.ElementRef<typeof PlateElement>, MentionElementProps>(
  ({ className, onClick, prefix, renderLabel, ...props }, ref) => {
    const { children, element } = props

    const selected = useSelected()
    const focused = useFocused()

    return (
      <PlateElement
        className={cn(
          selected && focused && 'ring-2 ring-ring',
          element.children[0].bold === true && 'font-bold',
          element.children[0].italic === true && 'italic',
          element.children[0].underline === true && 'underline',
          className,
        )}
        contentEditable={false}
        data-slate-value={element.value}
        onClick={getHandler(onClick, element as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>)}
        ref={ref}
        style={{
          backgroundColor: 'rgb(241, 245, 249)',
          borderRadius: 'calc(0.5rem - 2px)',
          cursor: 'pointer',
          display: 'inline-block',
          fontWeight: 500,
          padding: '0.125rem 0.375rem',
          verticalAlign: 'baseline',
        }}
        {...props}
      >
        {prefix}
        {renderLabel ? renderLabel(element) : element.value}
        {children}
      </PlateElement>
    )
  },
)

MentionElement.displayName = 'MentionElement'

export { MentionElement }
