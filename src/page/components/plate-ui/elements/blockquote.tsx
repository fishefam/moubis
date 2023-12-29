import type { TElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementBlockquote({ children, ...props }: TElementProps) {
  return (
    <PlateElement
      {...props}
      data-key={props.element.id}
    >
      <blockquote style={{ borderLeftWidth: '2px', margin: '0.25rem 0', paddingLeft: '1.5rem' }}>{children}</blockquote>
    </PlateElement>
  )
}
