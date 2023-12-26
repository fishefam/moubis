import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TTableCellElement } from '@udecode/plate-table'

import { cn } from '@/lib/utils'
import { PlateElement } from '@udecode/plate-common'
import {
  useTableCellElement,
  useTableCellElementResizable,
  useTableCellElementResizableState,
  useTableCellElementState,
} from '@udecode/plate-table'
import React from 'react'

import { ResizeHandle } from './resizable'

export type TableCellElementProps = {
  hideBorder?: boolean
  isHeader?: boolean
} & PlateElementProps<Value, TTableCellElement>

const TableCellElement = React.forwardRef<React.ElementRef<typeof PlateElement>, TableCellElementProps>(
  ({ children, className, hideBorder, isHeader, style, ...props }, ref) => {
    const { element } = props

    const { borders, colIndex, hovered, hoveredLeft, isSelectingCell, readOnly, rowIndex, rowSize, selected } =
      useTableCellElementState()
    const { props: cellProps } = useTableCellElement({ element: props.element })
    const resizableState = useTableCellElementResizableState({
      colIndex,
      rowIndex,
    })
    const { bottomProps, hiddenLeft, leftProps, rightProps } = useTableCellElementResizable(resizableState)

    const Cell = isHeader ? 'th' : 'td'

    return (
      <PlateElement
        asChild
        className={className}
        ref={ref}
        {...cellProps}
        {...props}
        style={
          {
            ...(isHeader ? { textAlign: 'left' } : {}),
            '--cellBackground': element.background,
            'border': 'none',
            'overflow': 'visible',
            'padding': 0,
            'position': 'relative',
            ...style,
          } as React.CSSProperties
        }
      >
        <Cell>
          <div
            style={{
              ...{
                borderBottomWidth: borders.bottom?.size ?? 0,
                borderLeftWidth: borders.left?.size ?? 0,
                borderRightWidth: borders.right?.size ?? 0,
                borderTopWidth: borders.top?.size ?? 0,
              },
              borderColor: 'gray',
              borderStyle: 'solid',
              boxSizing: 'border-box',
              minHeight: rowSize,
              padding: '0.5rem 0.75rem',
              position: 'relative',
              zIndex: 20,
            }}
          >
            {children}
          </div>

          {!isSelectingCell && (
            <div
              className='group absolute top-0 h-full w-full select-none !block'
              contentEditable={false}
              style={{ display: 'none' }}
              suppressContentEditableWarning={true}
            >
              {!readOnly && (
                <>
                  <ResizeHandle {...rightProps} className='-top-3 right-[-5px] w-[10px]' />
                  <ResizeHandle {...bottomProps} className='bottom-[-5px] h-[10px]' />
                  {!hiddenLeft && <ResizeHandle {...leftProps} className='-top-3 left-[-5px] w-[10px]' />}

                  {hovered && (
                    <div className={cn('absolute -top-3 z-30 h-[calc(100%_+_12px)] w-1 bg-ring', 'right-[-1.5px]')} />
                  )}
                  {hoveredLeft && (
                    <div className={cn('absolute -top-3 z-30 h-[calc(100%_+_12px)] w-1 bg-ring', 'left-[-1.5px]')} />
                  )}
                </>
              )}
            </div>
          )}
        </Cell>
      </PlateElement>
    )
  },
)
TableCellElement.displayName = 'TableCellElement'

const TableCellHeaderElement = React.forwardRef<React.ElementRef<typeof TableCellElement>, TableCellElementProps>(
  (props, ref) => {
    return <TableCellElement ref={ref} {...props} isHeader />
  },
)
TableCellHeaderElement.displayName = 'TableCellHeaderElement'

export { TableCellElement, TableCellHeaderElement }
