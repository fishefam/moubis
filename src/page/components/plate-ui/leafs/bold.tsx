import type { TLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafBold({ children, ...props }: TLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as='strong'
    >
      {children}
    </PlateLeaf>
  )
}
