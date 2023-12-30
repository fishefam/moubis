import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafBold({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as='strong'
    >
      {children}
    </PlateLeaf>
  )
}
