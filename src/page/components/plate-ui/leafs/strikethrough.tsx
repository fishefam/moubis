import type { TLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafStrikethrough({ children, ...props }: TLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as='s'
    >
      {children}
    </PlateLeaf>
  )
}
