import { CommentsProvider, Plate } from '@udecode/plate'
import { CursorOverlay } from '@udecode/plate-cursor'
import { useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { cn, commentsUsers, initialValue, MENTIONABLES, myUserId, plugins } from '@/lib'

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
        <CommentsProvider users={commentsUsers} myUserId={myUserId}>
          <Plate onChange={(v) => console.log(JSON.stringify(v))} plugins={plugins} initialValue={initialValue}>
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
