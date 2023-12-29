import type { TElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementVideo({ children, ...props }: TElementProps) {
  return (
    <PlateElement
      {...props}
      data-key={props.element.id}
    >
      <iframe
        className='hover:ring-4 ring-offset-1 hover:cursor-pointer outline-none shadow-none transition-shadow duration-100 ease-in-out hover:shadow-lg'
        src={props.element.url}
        style={{ borderRadius: '0.5rem' }}
      />
      {children}
    </PlateElement>
  )
}
