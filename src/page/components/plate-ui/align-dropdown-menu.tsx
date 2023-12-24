import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import { useAlignDropdownMenu, useAlignDropdownMenuState } from '@udecode/plate'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components'
import { cn } from '@/lib'

import { Icons, iconVariants } from '../icons'
import { useOpenState } from './dropdown-menu'
import { ToolbarButton } from './toolbar'

const items = [
  {
    icon: Icons.alignLeft,
    value: 'left',
  },
  {
    icon: Icons.alignCenter,
    value: 'center',
  },
  {
    icon: Icons.alignRight,
    value: 'right',
  },
  {
    icon: Icons.alignJustify,
    value: 'justify',
  },
]

export type AlignDropdownMenuProps = object & DropdownMenuProps

export function AlignDropdownMenu({ ...props }: AlignDropdownMenuProps) {
  const state = useAlignDropdownMenuState()
  const { radioGroupProps } = useAlignDropdownMenu(state)

  const openState = useOpenState()
  const IconValue = items.find((item) => item.value === radioGroupProps.value)?.icon ?? Icons.alignLeft

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={openState.open} tooltip='Align' isDropdown>
          <IconValue />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='start' className='min-w-0'>
        <DropdownMenuRadioGroup className='flex flex-col gap-0.5' {...radioGroupProps}>
          {items.map(({ value: itemValue, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={itemValue}
              value={itemValue}
              className={cn(
                'hover:bg-slate-100 relative flex select-none items-center rounded-sm text-sm outline-none transition-colors duration-75 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 h-9 cursor-pointer px-2 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground w-16',
                itemValue === radioGroupProps.value ? 'bg-slate-100' : '',
              )}
            >
              <Icon className={iconVariants({ variant: 'toolbar' })} />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
