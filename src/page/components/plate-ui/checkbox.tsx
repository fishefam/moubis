import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-slate-900 bg-white ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900',
      className,
    )}
    {...props}
    style={{ minHeight: '20px', minWidth: '20px' }}
  >
    <CheckboxPrimitive.Indicator
      style={{
        alignItems: 'center',
        color: 'currentcolor',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Icons.check style={{ height: '1rem', width: '1rem' }} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
