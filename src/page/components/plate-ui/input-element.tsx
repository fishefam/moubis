import type { PlateElementProps } from '@udecode/plate-common'
import type { ClassAttributes } from 'react'

import { PlateElement } from '@udecode/plate-common'

const defaultStyles = {
  common: {
    backgroundColor: '#F9FAFB',
    border: '1px solid #D1D5DB',
    borderRadius: '0.5rem',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.5)',
    color: '#4B5563',
    display: 'block',
    fontSize: '0.875rem',
    outline: 'none',
    padding: '0 4px',
  },
  range: {
    appearance: 'none',
    backgroundColor: '#E5E7EB',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    height: '2px',
  },
}

export const InputElement = ({ children, element, ...props }: PlateElementProps) => {
  const { attributes } = element
  return (
    <PlateElement element={element} {...props} as='span'>
      <input
        style={attributes.type === 'range' ? defaultStyles.range : defaultStyles.common}
        {...(attributes as ClassAttributes<HTMLInputElement>)}
      />
      {children}
    </PlateElement>
  )
}
