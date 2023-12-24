import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import { focusEditor, MARK_SUBSCRIPT, MARK_SUPERSCRIPT, toggleMark, useEditorState } from '@udecode/plate'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components'

import { Icons } from '../icons'
import { useOpenState } from './dropdown-menu'
import { ToolbarButton } from './toolbar'

export function MoreDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorState()
  const openState = useOpenState()

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={openState.open}
          tooltip='More'
          className='inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([data-icon])]:h-5 [&_svg:not([data-icon])]:w-5 bg-transparent hover:bg-slate-100 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-2 my-1 justify-between'
        >
          <Icons.more />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='start'
        className='z-50 overflow-hidden rounded-md border bg-white p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 flex max-h-[500px] min-w-[180px] flex-col gap-0.5 overflow-y-auto'
      >
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              clear: MARK_SUPERSCRIPT,
              key: MARK_SUBSCRIPT,
            })
            focusEditor(editor)
          }}
          className='hover:bg-slate-100 relative flex select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 h-9 cursor-pointer px-2 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground min-w-[180px]'
        >
          <Icons.subscript className='mr-2 h-5 w-5' />
          Subscript
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              clear: MARK_SUBSCRIPT,
              key: MARK_SUPERSCRIPT,
            })
            focusEditor(editor)
          }}
          className='hover:bg-slate-100 relative flex select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 h-9 cursor-pointer px-2 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground min-w-[180px]'
        >
          <Icons.superscript className='mr-2 h-5 w-5' />
          Superscript
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
