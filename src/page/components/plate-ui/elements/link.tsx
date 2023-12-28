import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementLink({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      {...props}
      asChild
      data-key={props.element.id}
    >
      <a href={props.element.url}>{children}</a>
    </PlateElement>
  )
}
