import type { TElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementParagraph({ children, ...props }: TElementProps) {
  return (
    <PlateElement
      {...props}
      data-key={props.element.id}
    >
      {children}
    </PlateElement>
  )
}
