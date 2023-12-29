import type { TLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafHighlight({ children, ...props }: TLeafProps) {
  return (
    <PlateLeaf
      {...props}
      style={{ backgroundColor: props.leaf.highlight + '', color: 'white' }}
    >
      {children}
    </PlateLeaf>
  )
}
