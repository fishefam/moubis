import type { PlateElementProps } from '@udecode/plate-common'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Resizable as ResizablePrimitive, ResizeHandle as ResizeHandlePrimitive } from '@udecode/plate-resizable'
import { cva } from 'class-variance-authority'
import React, { useEffect, useRef } from 'react'

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
    className={cn(resizeHandleVariants({ direction: props.options?.direction }), className)}
    ref={ref}
    {...props}
  />
))
ResizeHandle.displayName = 'ResizeHandle'

const Resizable = ({
  align,
  className,
  options,
  ...props
}: Partial<PlateElementProps> & { align: 'center' | 'left' | 'right'; options: Record<string, unknown> }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const div = ref.current
    if (div && align === 'center') {
      div.style.marginLeft = 'auto'
      div.style.marginRight = 'auto'
    }
    if (div && align === 'left') div.style.marginLeft = 'auto'
    if (div && align === 'right') div.style.marginRight = 'auto'
  }, [align, ref])

  return <ResizablePrimitive className={className} options={options} ref={ref} {...props} />
}

export { Resizable, ResizeHandle }
