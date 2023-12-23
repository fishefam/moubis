import { PlateElement, type PlateElementProps } from '@udecode/plate'

import { nanoid } from '@/lib/utils'

const headingVariants = {
  h1: {
    fontSize: '2.25rem',
    fontWeight: '700',
    lineHeight: '2.5rem',
  },
  h2: {
    fontSize: '1.875rem',
    fontWeight: '650',
    letterSpacing: '-0.025em',
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: '600',
    letterSpacing: '-0.025em',
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: '550',
    letterSpacing: '-0.025em',
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: '500',
    letterSpacing: '-0.025em',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: '450',
    letterSpacing: '-0.025em',
  },
} as const

export function HeadingElement({
  variant = 'h1',
  children,
  element,
  ...props
}: PlateElementProps & { variant: keyof typeof headingVariants }) {
  const Element = variant!

  return (
    <PlateElement data-node-id={element.id ?? nanoid()} asChild {...props}>
      <Element style={{ ...headingVariants[variant], margin: '1rem 0' }}>{children}</Element>
    </PlateElement>
  )
}
