import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementImage({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      data-node-id={props.element.id}
      {...props}
    >
      <img
        alt=''
        className='hover:ring-2 ring-offset-1 hover:cursor-pointer outline-none shadow-none transition-shadow duration-100 ease-in-out hover:shadow-lg'
        src={props.element.url}
        style={{ borderRadius: '0.5rem', width: props.element.width }}
      />
      {children}
    </PlateElement>
  )
}
