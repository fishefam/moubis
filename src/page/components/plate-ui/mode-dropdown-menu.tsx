import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuProps,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { focusEditor, useEditorReadOnly, useEditorState, usePlateStore } from '@udecode/plate'
import { ReactNode } from 'react'

import { Icons } from '../icons'
import { useOpenState } from './dropdown-menu'
import { ToolbarButton } from './toolbar'

export function ModeDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorState()
  const setReadOnly = usePlateStore().set.readOnly()
  const readOnly = useEditorReadOnly()
  const openState = useOpenState()

  let value = 'editing'
  if (readOnly) value = 'viewing'

  const item: Record<string, unknown> = {
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
          pressed={openState.open}
          tooltip='Editing mode'
          isDropdown
          className='min-w-[auto] lg:min-w-[130px]'
        >
          {item[value]}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='min-w-[180px]'>
        <DropdownMenuRadioGroup
          className='flex flex-col gap-0.5'
          value={value}
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
        >
          <DropdownMenuRadioItem value='editing'>{item.editing as ReactNode}</DropdownMenuRadioItem>

          <DropdownMenuRadioItem value='viewing'>{item.viewing as ReactNode}</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
