import { CommentsProvider } from '@udecode/plate-comments'
import { Plate } from '@udecode/plate-common'
import { CursorOverlay } from '@udecode/plate-cursor'
import { useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { cn, commentsUsers, MENTIONABLES, myUserId, plugins } from '@/lib'
import { plateDefaultValue as initialValue } from '@/lib/mock'

import {
  CommentsPopover,
  Editor,
  FixedToolbar,
  FixedToolbarButtons,
  FloatingToolbar,
  FloatingToolbarButtons,
  MentionCombobox,
  TooltipProvider,
} from './plate-ui'

export default function PlateEditor() {
  const containerRef = useRef(null)

  return (
    <TooltipProvider>
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={commentsUsers} myUserId={myUserId}>
          <Plate plugins={plugins} initialValue={initialValue}>
            <div
              ref={containerRef}
              className={cn(
                // Block selection
                '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4',
              )}
            >
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>

              <Editor className='px-[96px] py-16' autoFocus focusRing={false} variant='ghost' size='md' />

              <FloatingToolbar>
                <FloatingToolbarButtons />
              </FloatingToolbar>

              <MentionCombobox items={MENTIONABLES} />

              <CommentsPopover />

              <CursorOverlay containerRef={containerRef} />
            </div>
          </Plate>
        </CommentsProvider>
      </DndProvider>
    </TooltipProvider>
  )
}
