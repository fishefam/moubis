import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafItalic({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      as='em'
      {...props}
    >
      {children}
    </PlateLeaf>
  )
}
