import type { TPlateElementProps } from '@/types/plate'

import { PlateElement } from '@udecode/plate'

export function ElementDivider({ children, ...props }: TPlateElementProps) {
  return (
    <PlateElement
      data-node-id={props.element.id}
      {...props}
    >
      <hr
        style={{
          backgroundColor: 'rgb(245 245 245)',
          border: 'none',
          height: '0.125rem',
          margin: '1rem 0',
          width: '100%',
        }}
      />
      {children}
    </PlateElement>
  )
}
