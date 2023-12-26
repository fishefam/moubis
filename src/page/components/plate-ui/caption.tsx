import { Caption as CaptionPrimitive, CaptionTextarea as CaptionTextareaPrimitive } from '@udecode/plate-caption'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import React from 'react'

import { cn } from '@/lib/utils'

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
>(({ className, align, ...props }, ref) => (
  <CaptionPrimitive ref={ref} className={cn(captionVariants({ align }), className)} {...props} />
))
Caption.displayName = 'Caption'

const CaptionTextarea = React.forwardRef<
  React.ElementRef<typeof CaptionTextareaPrimitive>,
  ComponentProps<typeof CaptionTextareaPrimitive>
>(({ className, ...props }, ref) => (
  <CaptionTextareaPrimitive
    ref={ref}
    className={cn(
      'mt-2 w-full resize-none border-none bg-inherit p-0 font-[inherit] text-inherit',
      'focus:outline-none focus:[&::placeholder]:opacity-0',
      'text-center print:placeholder:text-transparent',
      className,
    )}
    {...props}
  />
))
CaptionTextarea.displayName = 'CaptionTextarea'

export { Caption, CaptionTextarea }
