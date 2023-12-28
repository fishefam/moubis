import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementParagraph({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      data-node-id={props.element.id}
      style={{ width: '100%' }}
      {...props}
    >
      {children}
    </PlateElement>
  )
}
