import type { TBlockElement, TPlateElementProps } from '@/types/plate'

import { EBlockElement } from '@/types/plate'
import { PlateElement } from '@udecode/plate'

export function ElementList({ children, ...props }: TPlateElementProps<TBlockElement>) {
  const { type } = props.element
  const Tag = getTag(type)
  return (
    <PlateElement
      {...props}
      data-key={props.element.id}
    >
      <Tag>{children}</Tag>
    </PlateElement>
  )
}

function getTag(type: EBlockElement) {
  if (type === EBlockElement.ORDERED_LIST) return 'ol'
  return 'ul'
}
