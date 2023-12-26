import type { PlateLeafProps } from '@udecode/plate-common'

import { cn } from '@/lib/utils'
import { PlateLeaf } from '@udecode/plate-common'

export function HighlightLeaf({ children, className, ...props }: PlateLeafProps) {
  return (
    <PlateLeaf asChild className={cn('bg-primary/20 text-inherit dark:bg-primary/40', className)} {...props}>
      <mark>{children}</mark>
    </PlateLeaf>
  )
}
