import type { PlateContentProps } from '@udecode/plate-common'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { PlateContent } from '@udecode/plate-common'
import { cva } from 'class-variance-authority'
import React from 'react'

const editorVariants = cva(
  cn(
    'relative overflow-x-auto whitespace-pre-wrap break-words',
    'min-h-[80px] w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none',
    '[&_[data-slate-placeholder]]:text-muted-foreground [&_[data-slate-placeholder]]:!opacity-100',
    '[&_[data-slate-placeholder]]:top-[auto_!important]',
    '[&_strong]:font-bold',
  ),
  {
    defaultVariants: {
      focusRing: true,
      size: 'sm',
      variant: 'outline',
    },
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
      },
      focused: {
        true: 'ring-2 ring-ring ring-offset-2',
      },
      focusRing: {
        false: '',
        true: 'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      },
      size: {
        md: 'text-base',
        sm: 'text-sm',
      },
      variant: {
        ghost: '',
        outline: 'border border-input',
      },
    },
  },
)

export type EditorProps = PlateContentProps & VariantProps<typeof editorVariants>

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ className, disabled, focused, focusRing, readOnly, size, variant, ...props }, ref) => {
    return (
      <div ref={ref}>
        <PlateContent
          aria-disabled={disabled}
          className={cn(
            editorVariants({
              disabled,
              focused,
              focusRing,
              size,
              variant,
            }),
            className,
          )}
          disableDefaultStyles
          readOnly={disabled ?? readOnly}
          style={{
            color: '#737373',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '12px',
            lineHeight: '17.15px',
            position: 'relative',
            width: '100%',
          }}
          {...props}
        />
      </div>
    )
  },
)
Editor.displayName = 'Editor'

export { Editor }
