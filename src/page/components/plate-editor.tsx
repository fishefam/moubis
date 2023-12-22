import { Plate } from '@udecode/plate'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Editor } from '@/components/plate-ui'
import { plateDefaultValue } from '@/lib/mock'
import { plugins } from '@/lib/plate/plate-plugins'

import { FixedToolbar } from './plate-ui/fixed-toolbar'
import { FixedToolbarButtons } from './plate-ui/fixed-toolbar-buttons'
import { FloatingToolbar } from './plate-ui/floating-toolbar'
import { FloatingToolbarButtons } from './plate-ui/floating-toolbar-buttons'

export default function PlateEditor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Plate plugins={plugins} initialValue={plateDefaultValue}>
        <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar>
        <Editor className='p-5' />
        <FloatingToolbar>
          <FloatingToolbarButtons />
        </FloatingToolbar>
      </Plate>
    </DndProvider>
  )
}
