import { cn, commentsUsers, initialValue, MENTIONABLES, myUserId, plugins } from '@/lib'
import { CommentsProvider, Plate } from '@udecode/plate'
import { CursorOverlay } from '@udecode/plate-cursor'
import { useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { CommentsPopover } from './plate-ui/comments-popover'
import { Editor } from './plate-ui/editor'
import { FixedToolbar } from './plate-ui/fixed-toolbar'
import { FixedToolbarButtons } from './plate-ui/fixed-toolbar-buttons'
import { FloatingToolbar } from './plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from './plate-ui/floating-toolbar-buttons'
import { MentionCombobox } from './plate-ui/mention-combobox'
import { TooltipProvider } from './plate-ui/tooltip'

export function PlateEditor() {
  const containerRef = useRef(null)

  return (
    <TooltipProvider>
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider myUserId={myUserId} users={commentsUsers}>
          <Plate initialValue={initialValue} plugins={plugins}>
            <div
              className={cn(
                // Block selection
                '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4',
              )}
              ref={containerRef}
            >
              <FixedToolbar>
                <FixedToolbarButtons />
              </FixedToolbar>

              <Editor autoFocus className='px-[96px] py-16' focusRing={false} size='md' variant='ghost' />

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
