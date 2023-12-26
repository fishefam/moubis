import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { PopoverContentProps } from '@radix-ui/react-popover'
import type { PlateElementProps } from '@udecode/plate-common'
import type { TTableElement } from '@udecode/plate-table'

import { Icons, iconVariants } from '@/components/icons'
import { cn } from '@/lib/utils'
import { PopoverAnchor } from '@radix-ui/react-popover'
import { isCollapsed, PlateElement, useEditorState, useElement, useRemoveNodeButton } from '@udecode/plate-common'
import { useTableBordersDropdownMenuContentState, useTableElement, useTableElementState } from '@udecode/plate-table'
import React, { forwardRef } from 'react'
import { useReadOnly, useSelected } from 'slate-react'

import { Button } from './button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Popover, PopoverContent, popoverVariants } from './popover'
import { Separator } from './separator'

const TableBordersDropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>((props, ref) => {
  const {
    getOnSelectTableBorder,
    hasBottomBorder,
    hasLeftBorder,
    hasNoBorders,
    hasOuterBorders,
    hasRightBorder,
    hasTopBorder,
  } = useTableBordersDropdownMenuContentState()

  return (
    <DropdownMenuContent align='start' className={cn('min-w-[220px]')} ref={ref} side='right' sideOffset={0} {...props}>
      <DropdownMenuCheckboxItem checked={hasBottomBorder} onCheckedChange={getOnSelectTableBorder('bottom')}>
        <Icons.borderBottom className={iconVariants({ size: 'sm' })} />
        <div>Bottom Border</div>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked={hasTopBorder} onCheckedChange={getOnSelectTableBorder('top')}>
        <Icons.borderTop className={iconVariants({ size: 'sm' })} />
        <div>Top Border</div>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked={hasLeftBorder} onCheckedChange={getOnSelectTableBorder('left')}>
        <Icons.borderLeft className={iconVariants({ size: 'sm' })} />
        <div>Left Border</div>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked={hasRightBorder} onCheckedChange={getOnSelectTableBorder('right')}>
        <Icons.borderRight className={iconVariants({ size: 'sm' })} />
        <div>Right Border</div>
      </DropdownMenuCheckboxItem>

      <Separator />

      <DropdownMenuCheckboxItem checked={hasNoBorders} onCheckedChange={getOnSelectTableBorder('none')}>
        <Icons.borderNone className={iconVariants({ size: 'sm' })} />
        <div>No Border</div>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked={hasOuterBorders} onCheckedChange={getOnSelectTableBorder('outer')}>
        <Icons.borderAll className={iconVariants({ size: 'sm' })} />
        <div>Outside Borders</div>
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  )
})
TableBordersDropdownMenuContent.displayName = 'TableBordersDropdownMenuContent'

const TableFloatingToolbar = React.forwardRef<React.ElementRef<typeof PopoverContent>, PopoverContentProps>(
  ({ children, ...props }, ref) => {
    const element = useElement<TTableElement>()
    const { props: buttonProps } = useRemoveNodeButton({ element })

    const readOnly = useReadOnly()
    const selected = useSelected()
    const editor = useEditorState()
    const open = !readOnly && selected && isCollapsed(editor.selection)

    return (
      <Popover modal={false} open={open}>
        <PopoverAnchor asChild>{children}</PopoverAnchor>
        <PopoverContent
          className={cn(popoverVariants(), 'flex w-[220px] flex-col gap-1 p-1')}
          onOpenAutoFocus={(e) => e.preventDefault()}
          ref={ref}
          {...props}
        >
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button isMenu variant='ghost'>
                <Icons.borderAll className='mr-2 h-4 w-4' />
                Borders
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
              <TableBordersDropdownMenuContent />
            </DropdownMenuPortal>
          </DropdownMenu>

          <Button contentEditable={false} isMenu variant='ghost' {...buttonProps}>
            <Icons.delete className='mr-2 h-4 w-4' />
            Delete
          </Button>
        </PopoverContent>
      </Popover>
    )
  },
)
TableFloatingToolbar.displayName = 'TableFloatingToolbar'

const TableElement = React.forwardRef<React.ElementRef<typeof PlateElement>, PlateElementProps>(
  ({ children, className, ...props }, ref) => {
    const { colSizes, isSelectingCell, marginLeft, minColumnWidth } = useTableElementState()
    const { colGroupProps, props: tableProps } = useTableElement()

    return (
      <TableFloatingToolbar>
        <div style={{ paddingLeft: marginLeft }}>
          <PlateElement
            asChild
            className={cn(isSelectingCell && '[&_*::selection]:bg-none', className)}
            ref={ref}
            {...tableProps}
            {...props}
            style={{
              borderCollapse: 'collapse',
              display: 'table',
              margin: '1rem 0',
              tableLayout: 'fixed',
              width: '100%',
            }}
          >
            <table>
              <colgroup {...colGroupProps}>
                {colSizes.map((width, index) => (
                  <col
                    key={index}
                    style={{
                      minWidth: minColumnWidth,
                      width: width || undefined,
                    }}
                  />
                ))}
              </colgroup>

              <tbody style={{ minWidth: '100%' }}>{children}</tbody>
            </table>
          </PlateElement>
        </div>
      </TableFloatingToolbar>
    )
  },
)
TableElement.displayName = 'TableElement'

export { TableBordersDropdownMenuContent, TableElement, TableFloatingToolbar }
