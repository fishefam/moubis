import type { PlateEditor } from '@udecode/plate'

import { useEditorContext } from '@/contexts/Editor'
import { Plate, PlateContent } from '@udecode/plate'
import { useRef } from 'react'

type TProps = Record<string, never>

export function PlateEditor(_: TProps) {
  const { code, plate } = useEditorContext()
  const container = useRef<HTMLDivElement>(null)

  console.log(plate)
  return (
    <Plate
      editor={plate.editor}
      initialValue={plate.value}
      onChange={(v) => {
        // if (document.activeElement === container.current?.firstElementChild)
        //   code[codeLang].editor.dispatch({ changes: { from: 0, insert: serializeFragment(v) } })
      }}
    >
      <div
        className='flex-grow'
        ref={container}
      >
        <PlateContent className='w-full mx-auto bg-white p-5 overflow-scroll md:h-[40rem] focus:outline-none' />
      </div>
    </Plate>
  )
}
