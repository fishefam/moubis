import { isCollapsed, useEditorState, useElement, useRemoveNodeButton } from '@udecode/plate'
import {
  FloatingMedia as FloatingMediaPrimitive,
  floatingMediaActions,
  useFloatingMediaSelectors,
} from '@udecode/plate-media'
import { useEffect } from 'react'
import { useReadOnly, useSelected } from 'slate-react'

import { Icons } from '@/components/icons'

import { Button, buttonVariants } from './button'
import { inputVariants } from './input'
import { Popover, PopoverAnchor, PopoverContent } from './popover'
import { Separator } from './separator'

export type MediaPopoverProps = {
  children: React.ReactNode
  pluginKey?: string
}

export function MediaPopover({ pluginKey, children }: MediaPopoverProps) {
  const readOnly = useReadOnly()
  const selected = useSelected()
  const editor = useEditorState()

  const isOpen = !readOnly && selected && isCollapsed(editor.selection)
  const isEditing = useFloatingMediaSelectors().isEditing()

  useEffect(() => {
    if (!isOpen && isEditing) {
      floatingMediaActions.isEditing(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const element = useElement()
  const { props: buttonProps } = useRemoveNodeButton({ element })

  if (readOnly) return <>{children}</>

  return (
    <Popover open={isOpen} modal={false}>
      <PopoverAnchor>{children}</PopoverAnchor>

      <PopoverContent className='w-auto p-1' onOpenAutoFocus={(e) => e.preventDefault()}>
        {isEditing ? (
          <div className='flex w-[330px] flex-col'>
            <div className='flex items-center'>
              <div className='flex items-center pl-3 text-slate-500 dark:text-slate-400'>
                <Icons.link className='h-4 w-4' />
              </div>

              <FloatingMediaPrimitive.UrlInput
                className={inputVariants({ h: 'sm', variant: 'ghost' })}
                placeholder='Paste the embed link...'
                options={{
                  pluginKey,
                }}
              />
            </div>
          </div>
        ) : (
          <div className='box-content flex h-9 items-center gap-1'>
            <FloatingMediaPrimitive.EditButton className={buttonVariants({ size: 'sm', variant: 'ghost' })}>
              Edit link
            </FloatingMediaPrimitive.EditButton>

            <Separator orientation='vertical' className='my-1' />

            <Button variant='ghost' size='sms' {...buttonProps}>
              <Icons.delete className='h-4 w-4' />
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}