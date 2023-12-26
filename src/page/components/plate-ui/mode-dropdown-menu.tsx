import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import type React from 'react'

import { Icons } from '@/components/icons'
import { focusEditor, useEditorReadOnly, useEditorState, usePlateStore } from '@udecode/plate-common'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  useOpenState,
} from './dropdown-menu'
import { ToolbarButton } from './toolbar'

export function ModeDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorState()
  const setReadOnly = usePlateStore().set.readOnly()
  const readOnly = useEditorReadOnly()
  const openState = useOpenState()

  let value: 'editing' | 'viewing' = 'editing'
  if (readOnly) value = 'viewing'

  const item: { [key in typeof value]: React.JSX.Element } = {
    editing: (
      <>
        <Icons.editing className='mr-2 h-5 w-5' />
        <span className='hidden lg:inline'>Editing</span>
      </>
    ),
    viewing: (
      <>
        <Icons.viewing className='mr-2 h-5 w-5' />
        <span className='hidden lg:inline'>Viewing</span>
      </>
    ),
  }

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          className='min-w-[auto] lg:min-w-[130px]'
          isDropdown
          pressed={openState.open}
          tooltip='Editing mode'
        >
          {item[value]}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='min-w-[180px]'>
        <DropdownMenuRadioGroup
          className='flex flex-col gap-0.5'
          onValueChange={(newValue) => {
            if (newValue !== 'viewing') {
              setReadOnly(false)
            }

            if (newValue === 'viewing') {
              setReadOnly(true)
              return
            }

            if (newValue === 'editing') {
              focusEditor(editor)
              return
            }
          }}
          value={value}
        >
          <DropdownMenuRadioItem value='editing'>{item.editing}</DropdownMenuRadioItem>

          <DropdownMenuRadioItem value='viewing'>{item.viewing}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
