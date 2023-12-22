import {
  createNodeHOC,
  createNodesHOC,
  ELEMENT_H1,
  ELEMENT_PARAGRAPH,
  PlaceholderProps,
  usePlaceholderState,
} from '@udecode/plate'
import { Children, cloneElement } from 'react'

import { cn } from '@/lib/utils'

export const Placeholder = (props: PlaceholderProps) => {
  const { children, placeholder, nodeProps } = props

  const { enabled } = usePlaceholderState(props)

  return Children.map(children, (child) => {
    return cloneElement(child, {
      className: child.props.className,
      nodeProps: {
        ...nodeProps,
        className: cn(
          enabled && 'before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]',
        ),
        placeholder,
      },
    })
  })
}

export const withPlaceholder = createNodeHOC(Placeholder)
export const withPlaceholdersPrimitive = createNodesHOC(Placeholder)

export const withPlaceholders = (components: Record<string, unknown>) =>
  withPlaceholdersPrimitive(components, [
    {
      hideOnBlur: true,
      key: ELEMENT_PARAGRAPH,
      placeholder: 'Type a paragraph',
      query: {
        maxLevel: 1,
      },
    },
    {
      hideOnBlur: false,
      key: ELEMENT_H1,
      placeholder: 'Untitled',
    },
  ])