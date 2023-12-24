import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import { focusEditor, useEditorReadOnly, useEditorState, usePlateStore } from '@udecode/plate'
import type { ReactNode } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components'
import { cn } from '@/lib'

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
          tooltip={readOnly ? 'Viewing Mode' : 'Editing Mode'}
          isDropdown
          className='inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([data-icon])]:h-5 [&_svg:not([data-icon])]:w-5 bg-transparent hover:bg-slate-100 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-2 my-1 justify-between pr-1 min-w-[auto] lg:min-w-[130px]'
        >
          {item[value] as ReactNode}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='start'
        className='z-50 overflow-hidden rounded-md border bg-white p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 flex max-h-[500px] flex-col gap-0.5 overflow-y-auto min-w-[auto]'
      >
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
          <DropdownMenuRadioItem
            value='editing'
            className={cn(
              'justify-between hover:bg-slate-100 relative flex select-none items-center rounded-sm text-sm outline-none transition-colors duration-75 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 h-9 cursor-pointer px-2 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground min-w-[auto] lg:min-w-[140px]',
              !readOnly ? 'bg-slate-100' : '',
            )}
          >
            <div className='flex items-center'>{item.editing as ReactNode}</div>
            {!readOnly && <Icons.check className='h-4 w-4' />}
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value='viewing'
            className={cn(
              'justify-between hover:bg-slate-100 relative flex select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 h-9 cursor-pointer px-2 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground min-w-[auto] lg:min-w-[140px]',
              readOnly ? 'bg-slate-100' : '',
            )}
          >
            <div className='flex items-center'>{item.viewing as ReactNode}</div>
            {readOnly && <Icons.check className='h-4 w-4' />}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
