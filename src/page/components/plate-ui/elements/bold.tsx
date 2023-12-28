import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafBold({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      as='strong'
      {...props}
    >
      {children}
    </PlateLeaf>
  )
}
