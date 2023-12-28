import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementLink({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      {...props}
      asChild
      data-key={props.element.id}
    >
      <a
        className='hover:no-underline'
        href={props.element.url}
        style={{ color: 'rgb(37 99 235)', textDecoration: 'underline' }}
      >
        {children}
      </a>
    </PlateElement>
  )
}
