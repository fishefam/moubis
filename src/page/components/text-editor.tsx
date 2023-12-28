import type { TDocument } from '@/types/plate'
import type { PlateEditor } from '@udecode/plate'

import { AppContext } from '@/App'
import { initialValue as mockValue } from '@/lib/mock'
import { populatePlateElementId } from '@/lib/util'
import { EElement } from '@/types/plate'
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
      >
        <PlateContent className='w-full mx-auto bg-white shadow p-5 border border-gray-200 overflow-scroll rounded-md h-[40rem]' />
      </Plate>
    </div>
  )
}

function getInitialValue(mock?: boolean): TDocument {
  return populatePlateElementId(mock ? mockValue : [{ children: [{ text: '' }], type: EElement.PARAGRAPH }])
}

function handleChange(editor: PlateEditor<TDocument>) {
  console.log(editor.children)
}
