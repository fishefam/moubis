import type { ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED } from '@udecode/plate-media'

import { Icons } from '@/components/icons'
import { useMediaToolbarButton } from '@udecode/plate-media'

import { ToolbarButton } from './toolbar'

export function MediaToolbarButton({ nodeType }: { nodeType?: typeof ELEMENT_IMAGE | typeof ELEMENT_MEDIA_EMBED }) {
  const { props } = useMediaToolbarButton({ nodeType })

  return (
    <ToolbarButton {...props}>
      <Icons.image />
    </ToolbarButton>
  )
}
