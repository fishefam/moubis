import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { useColorDropdownMenu, useColorDropdownMenuState } from '@udecode/plate'

import { DEFAULT_COLORS, DEFAULT_CUSTOM_COLORS } from './color-constants'
import { ColorPicker } from './color-picker'
import { ToolbarButton } from './toolbar'

export type TColor = {
  name: string
  value: string
  isBrightColor: boolean
}

type ColorDropdownMenuProps = {
  nodeType: string
  tooltip?: string
} & DropdownMenuProps

export function ColorDropdownMenu({ nodeType, tooltip, children }: ColorDropdownMenuProps) {
  const state = useColorDropdownMenuState({
    closeOnSelect: true,
    colors: DEFAULT_COLORS,
    customColors: DEFAULT_CUSTOM_COLORS,
    nodeType,
  })

  const { menuProps, buttonProps } = useColorDropdownMenu(state)

  return (
    <DropdownMenu modal={false} {...menuProps}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton tooltip={tooltip} {...buttonProps}>
          {children}
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='start'
        className='z-50 overflow-hidden rounded-md border bg-white p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 min-w-0'
      >
        <ColorPicker
          color={state.selectedColor || state.color}
          colors={state.colors}
          customColors={state.customColors}
          updateColor={state.updateColorAndClose}
          updateCustomColor={state.updateColor}
          clearColor={state.clearColor}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
