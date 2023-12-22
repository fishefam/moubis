import * as reactDropdownMenu from '@radix-ui/react-dropdown-menu'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type HTMLAttributes,
  useCallback,
  useState,
} from 'react'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

const DropdownMenu = reactDropdownMenu.Root

const DropdownMenuTrigger = reactDropdownMenu.Trigger

const DropdownMenuGroup = reactDropdownMenu.Group

const DropdownMenuPortal = reactDropdownMenu.Portal

const DropdownMenuSub = reactDropdownMenu.Sub

const DropdownMenuRadioGroup = reactDropdownMenu.RadioGroup

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof reactDropdownMenu.SubTrigger>,
  ComponentPropsWithoutRef<typeof reactDropdownMenu.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <reactDropdownMenu.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <Icons.chevronRight className='ml-auto h-4 w-4' />
  </reactDropdownMenu.SubTrigger>
))
DropdownMenuSubTrigger.displayName = reactDropdownMenu.SubTrigger.displayName

const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof reactDropdownMenu.SubContent>,
  ComponentPropsWithoutRef<typeof reactDropdownMenu.SubContent>
>(({ className, ...props }, ref) => (
  <reactDropdownMenu.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
      className,
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = reactDropdownMenu.SubContent.displayName

const DropdownMenuContent = forwardRef<
  ElementRef<typeof reactDropdownMenu.Content>,
  ComponentPropsWithoutRef<typeof reactDropdownMenu.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <reactDropdownMenu.Portal>
    <reactDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
        className,
      )}
      {...props}
    />
  </reactDropdownMenu.Portal>
))
DropdownMenuContent.displayName = reactDropdownMenu.Content.displayName

export const menuItemVariants = cva(
  cn(
    'relative flex h-9 cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
    'focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
  ),
  {
    variants: {
      inset: {
        true: 'pl-8',
      },
    },
  },
)

const DropdownMenuItem = forwardRef<
  ElementRef<typeof reactDropdownMenu.Item>,
  ComponentPropsWithoutRef<typeof reactDropdownMenu.Item> & VariantProps<typeof menuItemVariants>
>(({ className, inset, ...props }, ref) => (
  <reactDropdownMenu.Item ref={ref} className={cn(menuItemVariants({ inset }), className)} {...props} />
))
DropdownMenuItem.displayName = reactDropdownMenu.Item.displayName

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof reactDropdownMenu.CheckboxItem>,
  ComponentPropsWithoutRef<typeof reactDropdownMenu.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <reactDropdownMenu.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
      'cursor-pointer',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <reactDropdownMenu.ItemIndicator>
        <Icons.check className='h-4 w-4' />
      </reactDropdownMenu.ItemIndicator>
    </span>
    {children}
  </reactDropdownMenu.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = reactDropdownMenu.CheckboxItem.displayName

type DropdownMenuRadioItemProps = {
  hideIcon?: boolean
} & ComponentPropsWithoutRef<typeof reactDropdownMenu.RadioItem>

const DropdownMenuRadioItem = forwardRef<ElementRef<typeof reactDropdownMenu.RadioItem>, DropdownMenuRadioItemProps>(
  ({ className, children, hideIcon, ...props }, ref) => (
    <reactDropdownMenu.RadioItem
      ref={ref}
      className={cn(
        'relative flex select-none items-center rounded-sm pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        'h-9 cursor-pointer px-2 data-[state=checked]:bg-slate-100 data-[state=checked]:text-slate-900 dark:data-[state=checked]:bg-slate-800 dark:data-[state=checked]:text-slate-50',
        className,
      )}
      {...props}
    >
      {!hideIcon && (
        <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center'>
          <reactDropdownMenu.ItemIndicator>
            <Icons.check className='h-4 w-4' />
          </reactDropdownMenu.ItemIndicator>
        </span>
      )}
      {children}
    </reactDropdownMenu.RadioItem>
  ),
)
DropdownMenuRadioItem.displayName = reactDropdownMenu.RadioItem.displayName

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof reactDropdownMenu.Label>,
  ComponentPropsWithoutRef<typeof reactDropdownMenu.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <reactDropdownMenu.Label
    ref={ref}
    className={cn('select-none px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = reactDropdownMenu.Label.displayName

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof reactDropdownMenu.Separator>,
  ComponentPropsWithoutRef<typeof reactDropdownMenu.Separator>
>(({ className, ...props }, ref) => (
  <reactDropdownMenu.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = reactDropdownMenu.Separator.displayName

function DropdownMenuShortcut({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}

export const useOpenState = () => {
  const [open, setOpen] = useState(false)

  const onOpenChange = useCallback(
    (_value = !open) => {
      setOpen(_value)
    },
    [open],
  )

  return {
    onOpenChange,
    open,
  }
}
