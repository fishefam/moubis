import type { TPlateElementProps } from '@/types/plate'
import type { CSSProperties } from 'react'

import { EElement } from '@/types/plate'
import { PlateElement } from '@udecode/plate'

export function ElementHeading({ children, ...props }: TPlateElementProps) {
  const tag = getHeadingTag(props.element.type)
  const headingStyle = getHeadingStyle(tag)

  return (
    <PlateElement
      as={tag}
      className='text-lg font-bold'
      data-node-id={props.element.id}
      style={{ ...headingStyle, textAlign: props.element.align ?? 'left', width: '100%' }}
      {...props}
    >
      {children}
    </PlateElement>
  )
}

function getHeadingTag(type: EElement) {
  if (type === EElement.H1) return 'h1'
  if (type === EElement.H2) return 'h2'
  if (type === EElement.H3) return 'h3'
  if (type === EElement.H4) return 'h4'
  if (type === EElement.H5) return 'h5'
  return 'h6'
}

function getHeadingStyle(tag: ReturnType<typeof getHeadingTag>): CSSProperties {
  return {
    h1: { fontSize: '1.5rem', fontWeight: 750, margin: '1.25rem 0' },
    h2: { fontSize: '1.5rem', fontWeight: 700, margin: '1.25rem 0' },
    h3: { fontSize: '1.25rem', fontWeight: 650, margin: '1.125rem 0' },
    h4: { fontSize: '1.25rem', fontWeight: 600, margin: '1.125rem 0' },
    h5: { fontSize: '1.125rem', fontWeight: 550, margin: '1rem 0' },
    h6: { fontSize: '1.125rem', fontWeight: 500, margin: '1rem 0' },
  }[tag]
}
