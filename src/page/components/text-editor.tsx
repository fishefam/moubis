import type { TDocument } from '@/types/plate'
import type { PlateEditor } from '@udecode/plate'

import { AppContext } from '@/App'
import { initialValue as mockValue } from '@/lib/mock'
import { plugins } from '@/lib/plate/plugins'
import { populatePlateElementId } from '@/lib/utils'
import { ECommonElement } from '@/types/plate'
import { Plate, PlateContent } from '@udecode/plate'
import { useContext } from 'react'

export function TextEditor() {
  const { textEditor } = useContext(AppContext)

  return (
    <div>
      <Plate
        editor={textEditor}
        initialValue={getInitialValue(true)}
        onChange={() => handleChange(textEditor)}
        plugins={plugins}
      >
        <PlateContent className='w-full mx-auto bg-white shadow p-5 border border-gray-200 overflow-hidden rounded-md h-[40rem]' />
      </Plate>
    </div>
  )
}

function getInitialValue(mock?: boolean): TDocument {
  return populatePlateElementId(mock ? mockValue : [{ children: [{ text: '' }], type: ECommonElement.PARAGRAPH }])
}

function handleChange(editor: PlateEditor<TDocument>) {
  // console.log(editor.value)
}
