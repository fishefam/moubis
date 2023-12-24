import { useIndentButton } from '@udecode/plate'

import { Icons } from '@/components/icons'

import { ToolbarButton } from './toolbar'

export function IndentToolbarButton() {
  const { props } = useIndentButton()

  return (
    <ToolbarButton tooltip='Indent' {...props}>
      <Icons.indent className='h-5 w-5' />
    </ToolbarButton>
  )
}
