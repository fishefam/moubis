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
  ({ children, className, style, hideBorder, isHeader, ...props }, ref) => {
    const { element } = props

    const { colIndex, rowIndex, readOnly, selected, hovered, hoveredLeft, rowSize, borders, isSelectingCell, colSpan } =
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
        className={cn(
          'relative h-full overflow-visible border-none bg-white p-0 dark:bg-slate-950',
          hideBorder && 'before:border-none',
          element.background ? 'bg-[--cellBackground]' : 'bg-white dark:bg-slate-950',
          !hideBorder &&
            cn(
              isHeader && 'text-left [&_>_*]:m-0',
              'before:h-full before:w-full',
              selected && 'before:z-10 before:bg-slate-100 dark:before:bg-slate-800',
              'before:absolute before:box-border before:select-none before:content-[]',
              borders &&
                cn(
                  borders.bottom?.size && 'before:border-b before:border-b-border',
                  borders.right?.size && 'before:border-r before:border-r-border',
                  borders.left?.size && 'before:border-l before:border-l-border',
                  borders.top?.size && 'before:border-t before:border-t-border',
                ),
            ),
          className,
        )}
        {...cellProps}
        {...props}
        style={
          {
            '--cellBackground': element.background,
            ...style,
          } as CSSProperties
        }
      >
        <Cell>
          <div
            className='relative z-20 box-border h-full px-3 py-2'
            style={{
              minHeight: rowSize,
            }}
          >
            {children}
          </div>

          {!isSelectingCell && (
            <div
              className='group absolute top-0 h-full w-full select-none'
              contentEditable={false}
              suppressContentEditableWarning={true}
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
