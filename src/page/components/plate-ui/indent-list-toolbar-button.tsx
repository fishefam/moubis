import { ListStyleType, useIndentListToolbarButton, useIndentListToolbarButtonState } from '@udecode/plate'

import { Icons } from '@/components/icons'

import type { ToolbarButtonProps } from './toolbar'
import { ToolbarButton } from './toolbar'

export function IndentListToolbarButton({
  nodeType = ListStyleType.Disc,
}: ToolbarButtonProps & { nodeType?: ListStyleType }) {
  const state = useIndentListToolbarButtonState({ nodeType })
  const { props } = useIndentListToolbarButton(state)

  return (
    <ToolbarButton tooltip={nodeType === ListStyleType.Disc ? 'Bulleted List' : 'Numbered List'} {...props}>
      {nodeType === ListStyleType.Disc ? <Icons.ul className='h-5 w-5' /> : <Icons.ol className='h-5 w-5' />}
    </ToolbarButton>
  )
}
