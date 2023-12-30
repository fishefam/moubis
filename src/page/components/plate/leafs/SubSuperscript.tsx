import type { TPlateLeafProps } from '@/types/plate'

import { PlateLeaf } from '@udecode/plate'

export function SubSuperscript({ children, ...props }: TPlateLeafProps) {
  return (
    <PlateLeaf
      {...props}
      as={props.leaf.subscript ? 'sub' : 'sup'}
    >
      {children}
    </PlateLeaf>
  )
}
