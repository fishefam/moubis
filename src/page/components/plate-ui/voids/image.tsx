import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementImage({ children, ...props }: TPlateElementProps) {
  const { attributes, element } = props
  const isInline = attributes['data-slate-inline']

  return (
    <PlateElement
      {...props}
      as={isInline ? 'span' : 'div'}
      contentEditable={false}
      data-key={element.id}
      style={{ margin: isInline ? '0 0.5rem' : '1rem 0' }}
    >
      {children}
      <img
        alt=''
        className='hover:ring-4 ring-offset-1 hover:cursor-pointer outline-none shadow-none transition-shadow duration-100 ease-in-out hover:shadow-lg'
        src={element.url}
        style={{
          borderRadius: '0.5rem',
          display: isInline ? 'inline' : 'block',
          width: element.width,
        }}
      />
    </PlateElement>
  )
}
