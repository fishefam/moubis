import { Resizable as ResizablePrimitive, ResizeHandle as ResizeHandlePrimitive } from '@udecode/plate-resizable'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import React from 'react'

import { cn } from '@/lib/utils'

export const mediaResizeHandleVariants = cva(
  cn(
    'top-0 flex w-6 select-none flex-col justify-center',
    "after:flex after:h-16 after:w-[3px] after:rounded-[6px] after:bg-ring after:opacity-0 after:content-['_'] group-hover:after:opacity-100",
  ),
  {
    variants: {
      direction: {
        left: '-left-3 -ml-3 pl-3',
        right: '-right-3 -mr-3 items-end pr-3',
      },
    },
  },
)

const resizeHandleVariants = cva(cn('absolute z-40'), {
  variants: {
    direction: {
      bottom: 'w-full cursor-row-resize',
      left: 'h-full cursor-col-resize',
      right: 'h-full cursor-col-resize',
      top: 'w-full cursor-row-resize',
    },
  },
})

const ResizeHandle = React.forwardRef<
  React.ElementRef<typeof ResizeHandlePrimitive>,
  ComponentProps<typeof ResizeHandlePrimitive> & Omit<VariantProps<typeof resizeHandleVariants>, 'direction'>
>(({ className, ...props }, ref) => (
  <ResizeHandlePrimitive
    ref={ref}
    className={cn(resizeHandleVariants({ direction: props.options?.direction }), className)}
    {...props}
  />
))
ResizeHandle.displayName = 'ResizeHandle'

const resizableVariants = cva('', {
  variants: {
    align: {
      center: 'mx-auto',
      left: 'mr-auto',
      right: 'ml-auto',
    },
  },
})

const Resizable = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive>,
  ComponentProps<typeof ResizablePrimitive> & VariantProps<typeof resizableVariants>
>(({ className, align, ...props }, ref) => (
  <ResizablePrimitive ref={ref} className={cn(resizableVariants({ align }), className)} {...props} />
))
Resizable.displayName = 'Resizable'

export { Resizable, ResizeHandle }
