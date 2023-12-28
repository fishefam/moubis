import type { TPlateElementProps } from '@/types/plate'
import type { CSSProperties } from 'react'

import { EElement } from '@/types/plate'
import { PlateElement } from '@udecode/plate'

export function ElementHeading({ children, ...props }: TPlateElementProps) {
  const Tag = getHeadingTag(props.element.type)
  const headingStyle = getHeadingStyle(Tag)

  return (
    <PlateElement
      data-node-id={props.element.id}
      {...props}
    >
      <Tag style={{ ...headingStyle, textAlign: props.element.align ?? 'left', width: '100%' }}>{children}</Tag>
    </PlateElement>
  )
}

function getHeadingTag(type: EElement) {
  if (type === EElement.HEADING_1) return 'h1'
  if (type === EElement.HEADING_2) return 'h2'
  if (type === EElement.HEADING_3) return 'h3'
  if (type === EElement.HEADING_4) return 'h4'
  if (type === EElement.HEADING_5) return 'h5'
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
