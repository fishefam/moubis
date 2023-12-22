import { Plate } from '@udecode/plate'

import { Editor } from '@/components/plate-ui'
import { plateDefaultValue } from '@/lib/mock'
import { plugins } from '@/lib/plate/plate-plugins'

export default function PlateEditor() {
  return (
    <Plate plugins={plugins} initialValue={plateDefaultValue}>
      <Editor className='p-5' />
    </Plate>
  )
}
