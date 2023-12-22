import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuProps,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { useAlignDropdownMenu, useAlignDropdownMenuState } from '@udecode/plate'

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

export interface AlignDropdownMenuProps extends DropdownMenuProps {}

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
            <DropdownMenuRadioItem key={itemValue} value={itemValue}>
              <Icon className={iconVariants({ variant: 'toolbar' })} />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}