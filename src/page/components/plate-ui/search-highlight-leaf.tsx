import type { PlateLeafProps } from '@udecode/plate-common'

import { cn } from '@/lib/utils'
import { PlateLeaf } from '@udecode/plate-common'

export function SearchHighlightLeaf({ className, ...props }: PlateLeafProps) {
  return <PlateLeaf className={cn('bg-yellow-100', className)} {...props} />
}
