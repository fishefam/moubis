import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementParagraph({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      {...props}
      data-key={props.element.id}
    >
      {children}
    </PlateElement>
  )
}
