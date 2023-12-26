import type { PlateLeafProps } from '@udecode/plate-common'

import { useCodeSyntaxLeaf } from '@udecode/plate-code-block'
import { PlateLeaf } from '@udecode/plate-common'

export function CodeSyntaxLeaf({ children, ...props }: PlateLeafProps) {
  const { leaf } = props

  const { tokenProps } = useCodeSyntaxLeaf({ leaf })

  return (
    <PlateLeaf {...props}>
      <span {...tokenProps}>{children}</span>
    </PlateLeaf>
  )
}
