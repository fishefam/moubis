import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementImage({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      {...props}
      contentEditable={false}
      data-node-id={props.element.id}
      style={{ margin: '1rem 0', width: '100%' }}
    >
      {children}
      <img
        alt=''
        className='hover:ring-4 ring-offset-1 hover:cursor-pointer outline-none shadow-none transition-shadow duration-100 ease-in-out hover:shadow-lg'
        src={props.element.url}
        style={{ borderRadius: '0.5rem', width: props.element.width }}
      />
    </PlateElement>
  )
}
