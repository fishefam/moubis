import type { TLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafUnderline({ children, ...props }: TLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as='u'
    >
      {children}
    </PlateLeaf>
  )
}
