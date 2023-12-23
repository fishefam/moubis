import { Plate } from '@udecode/plate'
import { CursorOverlay } from '@udecode/plate-cursor'
import { useRef } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { plateDefaultValue, plugins } from '@/lib'

import { Editor, FixedToolbar, FixedToolbarButtons, FloatingToolbar, FloatingToolbarButtons } from './plate-ui'

export default function PlateEditor() {
  const containerRef = useRef(null)
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        plugins={plugins}
        initialValue={plateDefaultValue}
        onChange={(val) => {
          console.log(val)
        }}
      >
        <div ref={containerRef}>
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
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
