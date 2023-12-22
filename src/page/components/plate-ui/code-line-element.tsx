import { PlateElement, type PlateElementProps } from '@udecode/plate'
import { forwardRef } from 'react'

const CodeLineElement = forwardRef<HTMLDivElement, PlateElementProps>((props, ref) => (
  <PlateElement ref={ref} {...props} />
))
CodeLineElement.displayName = 'CodeLineElement'

export { CodeLineElement }
