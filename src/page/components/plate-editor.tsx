import { Plate } from '@udecode/plate'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Editor } from '@/components/plate-ui'
import { plateDefaultValue } from '@/lib/mock'
import { plugins } from '@/lib/plate/plate-plugins'

export default function PlateEditor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate plugins={plugins} initialValue={plateDefaultValue}>
        {/* <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar> */}
        <Editor className='p-10 h-[45rem] overflow-y-scroll' />
        {/* <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar> */}
      </Plate>
    </DndProvider>
  )
}
