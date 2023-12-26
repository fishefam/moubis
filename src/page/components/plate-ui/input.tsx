import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import * as React from 'react'

export const inputVariants = cva(
  'flex w-full rounded-md bg-transparent text-sm file:border-0 file:bg-background file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    defaultVariants: {
      h: 'md',
      variant: 'default',
    },
    variants: {
      h: {
        md: 'h-10 px-3 py-2',
        sm: 'h-9 px-3 py-2',
      },
      variant: {
        default:
          'border border-input ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        ghost: 'border-none focus-visible:ring-transparent',
      },
    },
  },
)

export type InputProps = Record<string, unknown> &
  React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, variant, ...props }, ref) => {
  return <input className={cn(inputVariants({ variant }), className)} ref={ref} type={type} {...props} />
})
Input.displayName = 'Input'

export { Input }
