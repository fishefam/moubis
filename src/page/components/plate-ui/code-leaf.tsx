import { PlateLeaf, type PlateLeafProps } from '@udecode/plate'

import { cn } from '@/lib/utils'

export function CodeLeaf({ className, children, ...props }: PlateLeafProps) {
  return (
    <PlateLeaf
      asChild
      className={cn(
        'whitespace-pre-wrap',
        'rounded-md bg-slate-100 px-[0.3em] py-[0.2em] font-mono text-sm dark:bg-slate-800',
        className,
      )}
      {...props}
    >
      <code>{children}</code>
    </PlateLeaf>
  )
}
