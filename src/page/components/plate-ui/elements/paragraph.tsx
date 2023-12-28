import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementParagraph({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      asChild
      data-node-id={props.element.id}
      {...props}
    >
      <p>{children}</p>
    </PlateElement>
  )
}
