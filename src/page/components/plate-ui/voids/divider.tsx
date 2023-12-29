import type { TElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementDivider({ children, ...props }: TElementProps) {
  return (
    <PlateElement
      {...props}
      className='hover:ring-4 hover:ring-offset-1 transition duration-100 h-4'
      contentEditable={false}
      data-key={props.element.id}
      style={{
        alignItems: 'center',
        borderRadius: '30px',
        cursor: 'pointer',
        display: 'flex',
        margin: '1rem 0',
        outline: '2px solid transparent',
        outlineOffset: '2px',
        width: '100%',
      }}
    >
      {children}
      <hr
        style={{
          backgroundColor: 'rgb(245 245 245)',
          border: 'none',
          height: '0.25rem',
          margin: 'auto',
          width: '100%',
        }}
      />
    </PlateElement>
  )
}
