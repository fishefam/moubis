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

const CaptionTextarea = ({
  className,
  ...props
}: unknown & { className?: string; placeholder: string; readOnly: boolean }) => {
  return (
    <CaptionTextareaPrimitive
      className={cn(className, '!pointer-events-auto')}
      style={{
        backgroundColor: 'inherit',
        border: 'none',
        color: 'inherit',
        fontFamily: 'inherit',
        marginTop: '0.5rem',
        outline: 'none',
        padding: 0,
        pointerEvents: 'none',
        resize: 'none',
        textAlign: 'center',
        width: '100%',
      }}
      {...props}
    />
  )
}

export { Caption, CaptionTextarea }
