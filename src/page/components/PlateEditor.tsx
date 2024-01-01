import type { TTextData } from '@/types/data'

import { useEditorContext } from '@/contexts/Editor'
import { useRootContext } from '@/contexts/Root'
import { cn } from '@/lib/util'
import { Plate } from '@/types/plate'
import { PlateContent, type PlateEditor } from '@udecode/plate'

export function PlateEditor() {
  const { editorType } = useRootContext()
  const { textData } = useEditorContext()
  const values = Object.values(textData)
  const plates = Object.keys(textData).map((k, i) => ({ ...values[i].plate, key: k as keyof TTextData }))

  return (
    <div className='h-full hover:border-2'>
      {plates.map(({ key, state, value }) => (
        <div
          className={cn(editorType !== key && 'hidden', 'h-full')}
          key={state.id}
        >
          <Plate
            editor={state}
            initialValue={value}
          >
            <PlateContent className='h-full' />
          </Plate>
        </div>
      ))}
    </div>
  )
}
