import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function Italic({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as='em'
    >
      {children}
    </PlateLeaf>
  )
}
