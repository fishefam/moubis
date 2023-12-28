import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementLink({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      {...props}
      as='span'
      data-node-id={props.element.id}
    >
      <a
        href={props.element.url}
        style={{ whiteSpace: 'nowrap' }}
      >
        {children}
      </a>
    </PlateElement>
  )
}
