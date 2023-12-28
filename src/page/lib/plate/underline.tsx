import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafUnderline({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      as='u'
      {...props}
    >
      {children}
    </PlateLeaf>
  )
}
