import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import type { TElement } from '@udecode/plate'
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
  findNode,
  focusEditor,
  isCollapsed,
  toggleNodeType,
  useEditorState,
} from '@udecode/plate'
import type { BaseEditor, BaseElement } from 'slate'
import { isBlock } from 'slate'

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
  if (isCollapsed(editor?.selection)) {
    const entry = findNode<TElement>(editor!, {
      match: (n) => isBlock(editor as BaseEditor, n as BaseElement),
    })
    if (entry) {
      value = items.find((item) => item.value === entry[0].type)?.value ?? ELEMENT_PARAGRAPH
    }
  }

  const selectedItem = items.find((item) => item.value === value) ?? defaultItem
  const { icon: SelectedItemIcon, label: selectedItemLabel } = selectedItem

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={openState.open} tooltip='Turn into' isDropdown className='lg:min-w-[130px]'>
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
              className='relative flex select-none items-center rounded-sm text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 h-9 cursor-pointer px-2 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground min-w-[180px]'
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
