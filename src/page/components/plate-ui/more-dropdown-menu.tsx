import type {
  DropdownMenuProps} from '@radix-ui/react-dropdown-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { focusEditor, MARK_SUBSCRIPT, MARK_SUPERSCRIPT, toggleMark, useEditorState } from '@udecode/plate'

import { Icons } from '../icons'
import { useOpenState } from './dropdown-menu'
import { ToolbarButton } from './toolbar'

export function MoreDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorState()
  const openState = useOpenState()

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={openState.open} tooltip='Insert'>
          <Icons.more />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='flex max-h-[500px] min-w-[180px] flex-col gap-0.5 overflow-y-auto'>
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              clear: MARK_SUPERSCRIPT,
              key: MARK_SUBSCRIPT,
            })
            focusEditor(editor)
          }}
        >
          <Icons.superscript className='mr-2 h-5 w-5' />
          Superscript
          {/* (⌘+,) */}
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => {
            toggleMark(editor, {
              clear: MARK_SUBSCRIPT,
              key: MARK_SUPERSCRIPT,
            })
            focusEditor(editor)
          }}
        >
          <Icons.subscript className='mr-2 h-5 w-5' />
          Subscript
          {/* (⌘+.) */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
