import { Plate } from '@udecode/plate'
import { useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Editor } from '@/components/plate-ui'
import { plateDefaultValue } from '@/lib/mock'
import { plugins } from '@/lib/plate/plate-plugins'

import { CursorOverlay } from './plate-ui/cursor-overlay'
import { FloatingToolbar } from './plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from './plate-ui/floating-toolbar-buttons'

export default function PlateEditor() {
  const containerRef = useRef(null)
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate plugins={plugins} initialValue={plateDefaultValue}>
        <div ref={containerRef}>
          {/* <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar> */}
          <Editor className='px-16 py-10 h-[45rem] overflow-y-scroll' />
          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
          <CursorOverlay containerRef={containerRef} />
        </div>
      </Plate>
    </DndProvider>
  )
}
