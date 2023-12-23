import { PlateElement, type PlateElementProps, type Value } from '@udecode/plate'
import {
  type TTableCellElement,
  useTableCellElement,
  useTableCellElementResizable,
  useTableCellElementResizableState,
  useTableCellElementState,
} from '@udecode/plate-table'
import { type CSSProperties, type ElementRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { ResizeHandle } from './resizable'

export type TableCellElementProps = {
  hideBorder?: boolean
  isHeader?: boolean
} & PlateElementProps<Value, TTableCellElement>

const TableCellElement = forwardRef<ElementRef<typeof PlateElement>, TableCellElementProps>(
  ({ children, style, isHeader, ...props }, ref) => {
    const { element } = props

    const { colIndex, rowIndex, readOnly, hovered, hoveredLeft, rowSize, borders, isSelectingCell, colSpan } =
      useTableCellElementState()
    const { props: cellProps } = useTableCellElement({ element: props.element })
    const resizableState = useTableCellElementResizableState({
      colIndex,
      colSpan,
      rowIndex,
    })

    const { rightProps, bottomProps, leftProps, hiddenLeft } = useTableCellElementResizable(resizableState)

    const Cell = isHeader ? 'th' : 'td'

    return (
      <PlateElement
        asChild
        ref={ref}
        {...cellProps}
        {...props}
        style={
          {
            '--cellBackground': element.background,
            ...style,
          } as CSSProperties
        }
      >
        <Cell
          style={{
            border: 'solid',
            borderBottomWidth: borders.bottom?.size ?? 0,
            borderLeftWidth: borders.left?.size ?? 0,
            borderRightWidth: borders.right?.size ?? 0,
            borderTopWidth: borders.top?.size ?? 0,
            textAlign: 'start',
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              height: '100%',
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
              className='group absolute top-0 h-full w-full select-none'
              contentEditable={false}
              suppressContentEditableWarning={true}
              style={{ display: 'none' }}
            >
              {!readOnly && (
                <>
                  <ResizeHandle {...rightProps} className='-top-3 right-[-5px] w-[10px]' />
                  <ResizeHandle {...bottomProps} className='bottom-[-5px] h-[10px]' />
                  {!hiddenLeft && <ResizeHandle {...leftProps} className='-top-3 left-[-5px] w-[10px]' />}

                  {hovered && (
                    <div
                      className={cn(
                        'absolute -top-3 z-30 h-[calc(100%_+_12px)] w-1 bg-slate-950 dark:bg-slate-300',
                        'right-[-1.5px]',
                      )}
                    />
                  )}
                  {hoveredLeft && (
                    <div
                      className={cn(
                        'absolute -top-3 z-30 h-[calc(100%_+_12px)] w-1 bg-slate-950 dark:bg-slate-300',
                        'left-[-1.5px]',
                      )}
                    />
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

const TableCellHeaderElement = forwardRef<ElementRef<typeof TableCellElement>, TableCellElementProps>((props, ref) => {
  return <TableCellElement ref={ref} {...props} isHeader />
})
TableCellHeaderElement.displayName = 'TableCellHeaderElement'

export { TableCellElement, TableCellHeaderElement }
