import { buttonVariants } from '@/components/plate-ui/button'
import { inputVariants } from '@/components/plate-ui/input'
import { cn } from '@/lib/utils'
import { CommentEditActions, CommentEditTextarea, useCommentValue } from '@udecode/plate-comments'

export function CommentValue() {
  const { textareaRef } = useCommentValue()

  return (
    <div className='my-2 flex flex-col items-end gap-2'>
      <CommentEditTextarea className={cn(inputVariants(), 'min-h-[60px]')} ref={textareaRef} />

      <div className='flex space-x-2'>
        <CommentEditActions.CancelButton className={buttonVariants({ size: 'xs', variant: 'outline' })}>
          Cancel
        </CommentEditActions.CancelButton>

        <CommentEditActions.SaveButton className={buttonVariants({ size: 'xs', variant: 'default' })}>
          Save
        </CommentEditActions.SaveButton>
      </div>
    </div>
  )
}
