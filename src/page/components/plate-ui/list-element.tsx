import { ListStyleType } from '@udecode/plate'
import { PlateElement, type PlateElementProps } from '@udecode/plate'

export function ListElement({
  className,
  children,
  variant = 'ul',
  element: { listSymbol },
  ...props
}: PlateElementProps & { variant: 'ol' | 'ul' }) {
  const Element = variant!

  return (
    <PlateElement asChild className={className} {...props}>
      <Element
        style={{
          listStyleType: (listSymbol as ListStyleType) ?? ListStyleType.Disc,
          margin: '0',
          paddingInlineStart: '1.5rem',
        }}
      >
        {children}
      </Element>
    </PlateElement>
  )
}
