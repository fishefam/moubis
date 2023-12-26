import { Avatar, AvatarFallback, AvatarImage } from '@/components/plate-ui/avatar'
import { useUserById } from '@udecode/plate-comments'

export function CommentAvatar({ userId }: { userId: null | string }) {
  const user = useUserById(userId)
  if (!user) return null

  return (
    <Avatar className='h-5 w-5'>
      <AvatarImage alt={user.name} src={user.avatarUrl} />
      <AvatarFallback>{user.name?.[0]}</AvatarFallback>
    </Avatar>
  )
}
