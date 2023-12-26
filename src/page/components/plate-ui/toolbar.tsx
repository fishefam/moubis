import type { VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import type { ToggleProps } from './toggle'

import { Separator } from './separator'
import { toggleVariants } from './toggle'
import { Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from './tooltip'

const toolbarVariants = cva('relative flex select-none items-stretch gap-1 bg-background')

export const linkVariants = cva('font-medium underline underline-offset-4')

const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup

export type ToolbarProps = Record<string, unknown> & React.ComponentPropsWithoutRef<typeof Toolbar>

const Toolbar = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> & VariantProps<typeof toolbarVariants>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Root className={cn(toolbarVariants(), className)} ref={ref} {...props} />
))
Toolbar.displayName = ToolbarPrimitive.Root.displayName

const ToolbarLink = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> & VariantProps<typeof linkVariants>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Link className={cn(linkVariants(), className)} ref={ref} {...props} />
))
ToolbarLink.displayName = ToolbarPrimitive.Link.displayName

const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Separator className={cn('shrink-0 bg-border', 'my-1 w-[1px]', className)} ref={ref} {...props} />
))
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName

export type ToolbarButtonProps = {
  buttonType?: 'button' | 'toggle'
  isDropdown?: boolean
  pressed?: boolean
  tooltip?: ReactNode
} & React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button> &
  VariantProps<typeof toggleVariants> &
  Omit<ToggleProps, 'type'>

const ToolbarButton = React.forwardRef<React.ElementRef<typeof ToolbarPrimitive.Button>, ToolbarButtonProps>(
  ({ children, className, isDropdown, pressed, size = 'sm', tooltip, variant, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = React.useState(false)

    React.useEffect(() => {
      setIsLoaded(true)
    }, [])

    const content =
      typeof pressed === 'boolean' ? (
        <ToolbarToggleGroup type='single' value={pressed ? 'single' : undefined}>
          <ToolbarToggleItem
            className={cn(
              toggleVariants({
                size,
                variant,
              }),
              isDropdown && 'my-1 justify-between pr-1',
              className,
            )}
            ref={ref}
            {...props}
            value='single'
          >
            <div className='flex flex-1'>{children}</div>
            <div>{isDropdown && <Icons.arrowDown className='ml-0.5 h-4 w-4' data-icon />}</div>
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
      ) : (
        <ToolbarPrimitive.Button
          className={cn(
            toggleVariants({
              size,
              variant,
            }),
            isDropdown && 'pr-1',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </ToolbarPrimitive.Button>
      )

    return isLoaded && tooltip ? (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContent>{tooltip}</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    ) : (
      <>{content}</>
    )
  },
)
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName

const ToolbarToggleItem = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleItem>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem> & VariantProps<typeof toggleVariants>
>(({ className, size, variant, ...props }, ref) => (
  <ToolbarPrimitive.ToggleItem className={cn(toggleVariants({ size, variant }), className)} ref={ref} {...props} />
))
ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName

const ToolbarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { noSeparator?: boolean }>(
  ({ children, className, noSeparator }, ref) => {
    const childArr = React.Children.map(children, (c) => c)
    if (!childArr || childArr.length === 0) return null

    return (
      <div className={cn('flex', className)} ref={ref}>
        {!noSeparator && (
          <div className='h-full py-1'>
            <Separator orientation='vertical' />
          </div>
        )}

        <div className='mx-1 flex items-center gap-1'>{children}</div>
      </div>
    )
  },
)
ToolbarGroup.displayName = 'ToolbarGroup'

export { Toolbar, ToolbarButton, ToolbarGroup, ToolbarLink, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem }
