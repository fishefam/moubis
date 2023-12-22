import { PlateLeaf, type PlateLeafProps } from '@udecode/plate'
import { useCodeSyntaxLeaf } from '@udecode/plate-code-block'

export function CodeSyntaxLeaf({ children, ...props }: PlateLeafProps) {
  const { leaf } = props

  const { tokenProps } = useCodeSyntaxLeaf({ leaf })

  return (
    <PlateLeaf {...props}>
      <span {...tokenProps}>{children}</span>
    </PlateLeaf>
  )
}
