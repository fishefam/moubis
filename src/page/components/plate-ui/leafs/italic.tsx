import type { TLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafItalic({ children, ...props }: TLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as='em'
    >
      {children}
    </PlateLeaf>
  )
}
