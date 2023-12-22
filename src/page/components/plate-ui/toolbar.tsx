import { Separator } from '@radix-ui/react-dropdown-menu'
import { ToggleProps } from '@radix-ui/react-toggle'
import * as ToolbarPrimitive from '@radix-ui/react-toolbar'
import { Tooltip, TooltipContent, TooltipPortal, TooltipTrigger } from '@radix-ui/react-tooltip'
import { cva, VariantProps } from 'class-variance-authority'
import {
  Children,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react'

import { cn } from '@/lib/utils'

import { Icons } from '../icons'
import { toggleVariants } from './toggle'
import { TooltipProvider } from './tooltip'

const toolbarVariants = cva('relative flex select-none items-stretch gap-1 bg-background')

export const linkVariants = cva('font-medium underline underline-offset-4')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup as any

export interface ToolbarProps extends ComponentPropsWithoutRef<typeof Toolbar> {}

const Toolbar = forwardRef<
  ElementRef<typeof ToolbarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> & VariantProps<typeof toolbarVariants>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Root ref={ref} className={cn(toolbarVariants(), className)} {...props} />
))
Toolbar.displayName = ToolbarPrimitive.Root.displayName

const ToolbarLink = forwardRef<
  ElementRef<typeof ToolbarPrimitive.Link>,
  ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> & VariantProps<typeof linkVariants>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Link ref={ref} className={cn(linkVariants(), className)} {...props} />
))
ToolbarLink.displayName = ToolbarPrimitive.Link.displayName

const ToolbarSeparator = forwardRef<
  ElementRef<typeof ToolbarPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.Separator ref={ref} className={cn('shrink-0 bg-border', 'my-1 w-[1px]', className)} {...props} />
))
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName

export interface ToolbarButtonProps
  extends ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button>,
    VariantProps<typeof toggleVariants>,
    Omit<ToggleProps, 'type'> {
  buttonType?: 'button' | 'toggle'
  pressed?: boolean
  tooltip?: ReactNode
  isDropdown?: boolean
}

const ToolbarButton = forwardRef<ElementRef<typeof ToolbarPrimitive.Button>, ToolbarButtonProps>(
  ({ className, variant, size = 'sm', isDropdown, children, pressed, tooltip, ...props }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
      setIsLoaded(true)
    }, [])

    const content =
      typeof pressed === 'boolean' ? (
        <ToolbarToggleGroup type='single' value={pressed ? 'single' : undefined}>
          <ToolbarToggleItem
            ref={ref}
            className={cn(
              toggleVariants({
                size,
                variant,
              }),
              isDropdown && 'my-1 justify-between pr-1',
              className,
            )}
            value='single'
            {...props}
          >
            <div className='flex flex-1'>{children}</div>
            <div>{isDropdown && <Icons.arrowDown className='ml-0.5 h-4 w-4' data-icon />}</div>
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
      ) : (
        <ToolbarPrimitive.Button
          ref={ref}
          className={cn(
            toggleVariants({
              size,
              variant,
            }),
            isDropdown && 'pr-1',
            className,
          )}
          {...props}
        >
          {children}
        </ToolbarPrimitive.Button>
      )

    return isLoaded && tooltip ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{content}</TooltipTrigger>

          <TooltipPortal>
            <TooltipContent>{tooltip}</TooltipContent>
          </TooltipPortal>
        </Tooltip>
      </TooltipProvider>
    ) : (
      <>{content}</>
    )
  },
)
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName

const ToolbarToggleItem = forwardRef<
  ElementRef<typeof ToolbarPrimitive.ToggleItem>,
  ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <ToolbarPrimitive.ToggleItem ref={ref} className={cn(toggleVariants({ size, variant }), className)} {...props} />
))
ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName

const ToolbarGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { noSeparator?: boolean }>(
  ({ noSeparator, className, children }, ref) => {
    const childArr = Children.map(children, (c) => c)
    if (!childArr || childArr.length === 0) return null

    return (
      <div ref={ref} className={cn('flex', className)}>
        {!noSeparator && (
          <div className='h-full py-1'>
            <Separator />
          </div>
        )}

        <div className='mx-1 flex items-center gap-1'>{children}</div>
      </div>
    )
  },
)
ToolbarGroup.displayName = 'ToolbarGroup'

export { Toolbar, ToolbarButton, ToolbarGroup, ToolbarLink, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem }
