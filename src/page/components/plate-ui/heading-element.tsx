import type { PlateElementProps } from '@udecode/plate-common'

import { PlateElement } from '@udecode/plate-common'

const headingVariants = {
  h1: {
    fontSize: '2rem',
    fontWeight: '700',
  },
  h2: {
    fontSize: '1.75rem',
    fontWeight: '650',
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: '600',
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: '550',
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: '500',
  },
  h6: {
    fontSize: '1rem',
    fontWeight: '450',
  },
}

export function HeadingElement({
  children,
  className,
  style = { lineHeight: 1.5 },
  variant = 'h1',
  ...props
}: PlateElementProps & { variant: keyof typeof headingVariants }) {
  const Element = variant!

  return (
    <PlateElement
      asChild
      className={className}
      style={{ ...headingVariants[variant], ...style, letterSpacing: '-0.025rem' }}
      {...props}
    >
      <Element>{children}</Element>
    </PlateElement>
  )
}
