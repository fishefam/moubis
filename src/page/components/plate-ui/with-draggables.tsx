import { createNodesWithHOC, ELEMENT_BLOCKQUOTE, ELEMENT_PARAGRAPH } from '@udecode/plate'
import { ELEMENT_CODE_BLOCK } from '@udecode/plate-code-block'
import { withDraggable as withDraggablePrimitive, WithDraggableOptions } from '@udecode/plate-dnd'
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6 } from '@udecode/plate-heading'
import { ELEMENT_OL, ELEMENT_UL } from '@udecode/plate-list'
import { FC } from 'react'

import { Draggable, DraggableProps } from './draggable'

export const withDraggable = (
  Component: FC,
  options?: WithDraggableOptions<Partial<Omit<DraggableProps, 'editor' | 'element' | 'children'>>>,
) => withDraggablePrimitive<DraggableProps>(Draggable, Component, options as Record<string, unknown>)

export const withDraggablesPrimitive = createNodesWithHOC(withDraggable)

export const withDraggables = (components: Record<string, unknown>) => {
  return withDraggablesPrimitive(components, [
    {
      keys: [ELEMENT_PARAGRAPH, ELEMENT_UL, ELEMENT_OL],
      level: 0,
    },
    {
      draggableProps: {
        // classNames: {
        //   blockToolbarWrapper: 'h-[1.3em]',
        //   gutterLeft: 'px-0 pb-1 text-[1.875em]',
        // },
      },
      key: ELEMENT_H1,
    },
    {
      draggableProps: {
        // classNames: {
        //   blockToolbarWrapper: 'h-[1.3em]',
        //   gutterLeft: 'px-0 pb-1 text-[1.5em]',
        // },
      },
      key: ELEMENT_H2,
    },
    {
      draggableProps: {
        // classNames: {
        //   blockToolbarWrapper: 'h-[1.3em]',
        //   gutterLeft: 'pt-[2px] px-0 pb-1 text-[1.25em]',
        // },
      },
      key: ELEMENT_H3,
    },
    {
      draggableProps: {
        // classNames: {
        //   blockToolbarWrapper: 'h-[1.3em]',
        //   gutterLeft: 'pt-[3px] px-0 pb-0 text-[1.1em]',
        // },
      },
      keys: [ELEMENT_H4, ELEMENT_H5],
    },
    {
      draggableProps: {
        // classNames: {
        //   gutterLeft: 'pt-[3px] px-0 pb-0',
        // },
      },
      keys: [ELEMENT_PARAGRAPH],
    },
    {
      draggableProps: {
        // classNames: {
        //   gutterLeft: 'px-0 pb-0',
        // },
      },
      keys: [ELEMENT_H6, ELEMENT_UL, ELEMENT_OL],
    },
    {
      draggableProps: {
        // classNames: {
        //   gutterLeft: 'px-0 pb-0',
        // },
      },
      key: ELEMENT_BLOCKQUOTE,
    },
    {
      draggableProps: {
        // classNames: {
        //   gutterLeft: 'pt-8 px-0 pb-0',
        // },
      },
      key: ELEMENT_CODE_BLOCK,
    },
  ])
}