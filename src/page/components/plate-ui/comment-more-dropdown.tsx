import { Icons } from '@/components/icons'
import { Button } from '@/components/plate-ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/plate-ui/dropdown-menu'
import { cn } from '@/lib/utils'
import {
  useCommentDeleteButton,
  useCommentDeleteButtonState,
  useCommentEditButton,
  useCommentEditButtonState,
} from '@udecode/plate-comments'

export function CommentMoreDropdown() {
  const editButtonState = useCommentEditButtonState()
  const editProps = useCommentEditButton(editButtonState)
  const deleteButtonState = useCommentDeleteButtonState()
  const deleteProps = useCommentDeleteButton(deleteButtonState)

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className={cn('h-6 p-1 text-muted-foreground')} variant='ghost'>
          <Icons.more className='h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem {...editProps}>Edit comment</DropdownMenuItem>
        <DropdownMenuItem {...deleteProps}>Delete comment</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
