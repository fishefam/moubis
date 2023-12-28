import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafItalic({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as='em'
    >
      {children}
    </PlateLeaf>
  )
}
