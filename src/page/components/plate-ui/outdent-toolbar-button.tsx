import { useOutdentButton } from '@udecode/plate'

import { Icons } from '@/components/icons'

import { ToolbarButton } from './toolbar'

export function OutdentToolbarButton() {
  const { props } = useOutdentButton()

  return (
    <ToolbarButton tooltip='Outdent' {...props}>
      <Icons.outdent className='h-5 w-5' />
    </ToolbarButton>
  )
}
