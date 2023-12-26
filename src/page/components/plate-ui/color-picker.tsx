import { buttonVariants } from '@/components/plate-ui/button'
import { DropdownMenuItem } from '@/components/plate-ui/dropdown-menu'
import { Separator } from '@/components/plate-ui/separator'
import { cn } from '@/lib/utils'
import React from 'react'

import type { TColor } from './color-dropdown-menu'

import { ColorDropdownMenuItems } from './color-dropdown-menu-items'
import { ColorsCustom } from './colors-custom'

type ColorPickerProps = {
  clearColor: () => void
  color?: string
  colors: TColor[]
  customColors: TColor[]
  updateColor: (color: string) => void
  updateCustomColor: (color: string) => void
} & React.HTMLAttributes<HTMLDivElement>

export function ColorPickerContent({
  className,
  clearColor,
  color,
  colors,
  customColors,
  updateColor,
  updateCustomColor,
  ...props
}: ColorPickerProps) {
  return (
    <div className={cn('flex flex-col gap-4 p-4', className)} {...props}>
      <ColorsCustom
        color={color}
        colors={colors}
        customColors={customColors}
        updateColor={updateColor}
        updateCustomColor={updateCustomColor}
      />

      <Separator />

      <ColorDropdownMenuItems color={color} colors={colors} updateColor={updateColor} />
      {color && (
        <DropdownMenuItem
          className={buttonVariants({
            isMenu: true,
            variant: 'outline',
          })}
          onClick={clearColor}
        >
          Clear
        </DropdownMenuItem>
      )}
    </div>
  )
}

export const ColorPicker = React.memo(
  ColorPickerContent,
  (prev, next) => prev.color === next.color && prev.colors === next.colors && prev.customColors === next.customColors,
)
