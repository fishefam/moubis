import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import {
  collapseSelection,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_PARAGRAPH,
  focusEditor,
  isCollapsed,
  toggleNodeType,
  useEditorState,
} from '@udecode/plate'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components'
import { cn } from '@/lib'
import type { TPlateBlockElement } from '@/types'

import { Icons } from '../icons'
import { useOpenState } from './dropdown-menu'
import { ToolbarButton } from './toolbar'

const items = [
  {
    description: 'Paragraph',
    icon: Icons.paragraph,
    label: 'Paragraph',
    value: ELEMENT_PARAGRAPH,
  },
  {
    description: 'Heading 1',
    icon: Icons.h1,
    label: 'Heading 1',
    value: ELEMENT_H1,
  },
  {
    description: 'Heading 2',
    icon: Icons.h2,
    label: 'Heading 2',
    value: ELEMENT_H2,
  },
  {
    description: 'Heading 3',
    icon: Icons.h3,
    label: 'Heading 3',
    value: ELEMENT_H3,
  },
  {
    description: 'Heading 4',
    icon: Icons.h4,
    label: 'Heading 4',
    value: ELEMENT_H4,
  },
  {
    description: 'Heading 5',
    icon: Icons.h5,
    label: 'Heading 5',
    value: ELEMENT_H5,
  },
  {
    description: 'Heading 6',
    icon: Icons.h6,
    label: 'Heading 6',
    value: ELEMENT_H6,
  },
  {
    description: 'Quote (⌘+⇧+.)',
    icon: Icons.blockquote,
    label: 'Quote',
    value: ELEMENT_BLOCKQUOTE,
  },
]

const defaultItem = items.find((item) => item.value === ELEMENT_PARAGRAPH)!

export function TurnIntoDropdownMenu(props: DropdownMenuProps) {
  const editor = useEditorState()
  const openState = useOpenState()

  let value: string = ELEMENT_PARAGRAPH
  if (editor && editor.selection && isCollapsed(editor.selection)) {
    const entry = editor.above<TPlateBlockElement>({ at: editor.selection.focus })
    if (entry) value = items.find((item) => item.value === entry[0].type)?.value ?? 'other'
    if (!entry) value = 'other'
  }

  const selectedItem = items.find((item) => item.value === value) ?? defaultItem
  const { icon: SelectedItemIcon, label: selectedItemLabel } = selectedItem

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={openState.open}
          tooltip='Turn into'
          isDropdown
          className='inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([data-icon])]:h-5 [&_svg:not([data-icon])]:w-5 bg-transparent justify-between hover:bg-slate-100 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-2 my-1 justify-between pr-1 min-w-[auto] lg:min-w-[130px]'
        >
          <SelectedItemIcon className='h-5 w-5 lg:hidden' />
          <span className='max-lg:hidden'>{selectedItemLabel}</span>
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='start'
        className='z-50 overflow-hidden rounded-md border bg-white p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 min-w-0'
      >
        <DropdownMenuLabel className='select-none px-2 py-1.5 text-sm font-semibold'>Turn into</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          className='flex flex-col gap-0.5'
          value={value}
          onValueChange={(type) => {
            toggleNodeType(editor, { activeType: type })
            collapseSelection(editor)
            focusEditor(editor)
          }}
        >
          {items.map(({ value: itemValue, label, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={itemValue}
              value={itemValue}
              className={cn(
                'hover:bg-slate-100 relative flex select-none items-center rounded-sm text-sm outline-none transition-colors duration-75 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 h-9 cursor-pointer px-2 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground min-w-[180px]',
                itemValue === value ? 'bg-slate-100' : '',
              )}
            >
              <Icon className='mr-2 h-5 w-5' />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
