import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafStrikethrough({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as='s'
    >
      {children}
    </PlateLeaf>
  )
}
