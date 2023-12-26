import type { PlateElementProps } from '@udecode/plate-common'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { PlateElement } from '@udecode/plate-common'
import { cva } from 'class-variance-authority'

const listVariants = cva('m-0 ps-6', {
  variants: {
    variant: {
      ol: 'list-decimal',
      ul: 'list-disc [&_ul]:list-[circle] [&_ul_ul]:list-[square]',
    },
  },
})

export function ListElement({
  children,
  className,
  variant = 'ul',
  ...props
}: PlateElementProps & VariantProps<typeof listVariants>) {
  const Element = variant!

  return (
    <PlateElement asChild className={cn(listVariants({ variant }), className)} {...props}>
      <Element>{children}</Element>
    </PlateElement>
  )
}
