import type { EElement, TElementProps } from '@/types/plate'
import type { CSSProperties } from 'react'

import { EBlockElement } from '@/types/plate'
import { PlateElement } from '@udecode/plate'

export function ElementHeading({ children, ...props }: TElementProps) {
  const Tag = getHeadingTag(props.element.type)
  const headingStyle = getHeadingStyle(Tag)

  return (
    <PlateElement
      {...props}
      data-key={props.element.id}
    >
      <Tag style={{ ...headingStyle, textAlign: props.element.align ?? 'left', width: '100%' }}>{children}</Tag>
    </PlateElement>
  )
}

function getHeadingTag(type: EElement) {
  if (type === EBlockElement.HEADING_1) return 'h1'
  if (type === EBlockElement.HEADING_2) return 'h2'
  if (type === EBlockElement.HEADING_3) return 'h3'
  if (type === EBlockElement.HEADING_4) return 'h4'
  if (type === EBlockElement.HEADING_5) return 'h5'
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
