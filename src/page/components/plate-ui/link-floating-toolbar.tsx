import type { UseVirtualFloatingOptions } from '@udecode/plate-floating'
import { flip, offset } from '@udecode/plate-floating'
import type { LinkFloatingToolbarState } from '@udecode/plate-link'
import {
  FloatingLinkUrlInput,
  LinkOpenButton,
  useFloatingLinkEdit,
  useFloatingLinkEditState,
  useFloatingLinkInsert,
  useFloatingLinkInsertState,
} from '@udecode/plate-link'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

import { buttonVariants } from './button'
import { inputVariants } from './input'
import { popoverVariants } from './popover'
import { Separator } from './separator'

const floatingOptions: UseVirtualFloatingOptions = {
  middleware: [
    offset(12),
    flip({
      fallbackPlacements: ['bottom-end', 'top-start', 'top-end'],
      padding: 12,
    }),
  ],
  placement: 'bottom-start',
}

export type LinkFloatingToolbarProps = {
  state?: LinkFloatingToolbarState
}

export function LinkFloatingToolbar({ state }: LinkFloatingToolbarProps) {
  const insertState = useFloatingLinkInsertState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions,
    },
  })
  const { props: insertProps, ref: insertRef, hidden, textInputProps } = useFloatingLinkInsert(insertState)

  const editState = useFloatingLinkEditState({
    ...state,
    floatingOptions: {
      ...floatingOptions,
      ...state?.floatingOptions,
    },
  })
  const { props: editProps, ref: editRef, editButtonProps, unlinkButtonProps } = useFloatingLinkEdit(editState)

  if (hidden) return null

  const input = (
    <div className='flex w-[330px] flex-col'>
      <div className='flex items-center'>
        <div className='flex items-center pl-3 text-muted-foreground'>
          <Icons.link className='h-4 w-4' />
        </div>

        <FloatingLinkUrlInput className={inputVariants({ h: 'sm', variant: 'ghost' })} placeholder='Paste link' />
      </div>

      <Separator />

      <div className='flex items-center'>
        <div className='flex items-center pl-3 text-muted-foreground'>
          <Icons.text className='h-4 w-4' />
        </div>
        <input
          className={inputVariants({ h: 'sm', variant: 'ghost' })}
          placeholder='Text to display'
          {...textInputProps}
        />
      </div>
    </div>
  )

  const editContent = editState.isEditing ? (
    input
  ) : (
    <div className='box-content flex h-9 items-center gap-1'>
      <button type='button' className={buttonVariants({ size: 'sm', variant: 'ghost' })} {...editButtonProps}>
        Edit link
      </button>

      <Separator orientation='vertical' />

      <LinkOpenButton
        className={buttonVariants({
          size: 'sms',
          variant: 'ghost',
        })}
      >
        <Icons.externalLink width={18} />
      </LinkOpenButton>

      <Separator orientation='vertical' />

      <button
        type='button'
        className={buttonVariants({
          size: 'sms',
          variant: 'ghost',
        })}
        {...unlinkButtonProps}
      >
        <Icons.unlink width={18} />
      </button>
    </div>
  )

  return (
    <>
      <div ref={insertRef} className={cn(popoverVariants(), 'w-auto p-1')} {...insertProps}>
        {input}
      </div>

      <div ref={editRef} className={cn(popoverVariants(), 'w-auto p-1')} {...editProps}>
        {editContent}
      </div>
    </>
  )
}
