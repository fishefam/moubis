import { Icons } from '@/components/icons'
import { useIndentButton } from '@udecode/plate-indent'

import { ToolbarButton } from './toolbar'

export function IndentToolbarButton() {
  const { props } = useIndentButton()

  return (
    <ToolbarButton tooltip='Indent' {...props}>
      <Icons.indent />
    </ToolbarButton>
  )
}
