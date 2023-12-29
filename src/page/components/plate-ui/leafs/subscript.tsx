import type { TLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function LeafSubSuperscript({ children, ...props }: TLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as={props.leaf.subscript ? 'sub' : 'sup'}
    >
      {children}
    </PlateLeaf>
  )
}
