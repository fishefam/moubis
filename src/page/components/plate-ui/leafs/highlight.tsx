import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafHighlight({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      style={{ backgroundColor: props.leaf.highlight + '', color: 'white' }}
      {...props}
    >
      {children}
    </PlateLeaf>
  )
}
