import { PlateLeaf, type PlateLeafProps } from '@udecode/plate'

import { cn } from '@/lib/utils'

export function HighlightLeaf({ className, children, ...props }: PlateLeafProps) {
  return (
    <PlateLeaf
      asChild
      className={cn('bg-slate-900/20 text-inherit dark:bg-slate-50/20 dark:dark:bg-slate-50/40', className)}
      {...props}
    >
      <mark>{children}</mark>
    </PlateLeaf>
  )
}
