import type { EInlineElement, TInlineElement, TPlateElementProps } from '@/types/plate'

import { PlateElement, useElement, useLink } from '@udecode/plate'

export function Link({ children, ...props }: TPlateElementProps) {
  const element = useElement<TInlineElement<EInlineElement.LINK>>()
  const linkProps: object = useLink({ element }).props

  return (
    <PlateElement
      asChild
      data-key={props.element.id}
      {...linkProps}
      {...props}
    >
      <a
        className='hover:!no-underline'
        href={props.element.url ?? '#'}
        style={{ color: 'rgb(37 99 235)', textDecoration: 'underline' }}
      >
        {children}
      </a>
    </PlateElement>
  )
}
