import type { PlateLeafProps } from '@udecode/plate-common'

import { PlateLeaf } from '@udecode/plate-common'

export function CodeLeaf({ children, className, ...props }: PlateLeafProps) {
  return (
    <PlateLeaf
      asChild
      className={className}
      style={{
        backgroundColor: 'hsl(210 40% 96.1%)',
        borderRadius: 'calc(0.5rem - 2px)',
        fontFamily: 'monospace',
        padding: '0.2rem 0.3rem',
        whiteSpace: 'pre-wrap',
      }}
      {...props}
    >
      <span>{children}</span>
    </PlateLeaf>
  )
}
