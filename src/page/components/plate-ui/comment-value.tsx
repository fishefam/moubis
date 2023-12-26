import { CommentEditActions, CommentEditTextarea, useCommentValue } from '@udecode/plate-comments'

import { buttonVariants } from '@/components/plate-ui/button'
import { inputVariants } from '@/components/plate-ui/input'
import { cn } from '@/lib/utils'

export function CommentValue() {
  const { textareaRef } = useCommentValue()

  return (
    <div className='my-2 flex flex-col items-end gap-2'>
      <CommentEditTextarea ref={textareaRef} className={cn(inputVariants(), 'min-h-[60px]')} />

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
