import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Caption as CaptionPrimitive, CaptionTextarea as CaptionTextareaPrimitive } from '@udecode/plate-caption'
import { cva } from 'class-variance-authority'
import React from 'react'

const captionVariants = cva('max-w-full', {
  defaultVariants: {
    align: 'center',
  },
  variants: {
    align: {
      center: 'mx-auto',
      left: 'mr-auto',
      right: 'ml-auto',
    },
  },
})

const Caption = React.forwardRef<
  React.ElementRef<typeof CaptionPrimitive>,
  ComponentProps<typeof CaptionPrimitive> & VariantProps<typeof captionVariants>
>(({ align, className, ...props }, ref) => (
  <CaptionPrimitive className={cn(captionVariants({ align }), className)} ref={ref} {...props} />
))
Caption.displayName = 'Caption'

const CaptionTextarea = React.forwardRef<
  React.ElementRef<typeof CaptionTextareaPrimitive>,
  ComponentProps<typeof CaptionTextareaPrimitive>
>(({ className, ...props }, ref) => (
  <CaptionTextareaPrimitive
    className={cn(
      'mt-2 w-full resize-none border-none bg-inherit p-0 font-[inherit] text-inherit',
      'focus:outline-none focus:[&::placeholder]:opacity-0',
      'text-center print:placeholder:text-transparent',
      className,
    )}
    ref={ref}
    {...props}
  />
))
CaptionTextarea.displayName = 'CaptionTextarea'

export { Caption, CaptionTextarea }
