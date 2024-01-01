import { Plate } from '@/types/plate'
import { PlateContent, type PlateEditor } from '@udecode/plate'
import { useRef } from 'react'

type TProps = Record<string, never>

export function PlateEditor({ a }: TProps) {
  // const { code, plate } = useEditorContext()
  const container = useRef<HTMLDivElement>(null)

  console.log(plate.value)
  return (
    <Plate
      editor={a.editor}
      // initialValue={[{ children: [{ text: nanoid() }], type: EBlockElement.PARAGRAPH }]}
      onChange={(v) => {
        // if (document.activeElement === container.current?.firstElementChild)
        //   code[codeLang].editor.dispatch({ changes: { from: 0, insert: serializeFragment(v) } })
      }}
    >
      {/* <div
        className='h-full'
        ref={container}
      > */}
      <PlateContent className='w-full mx-auto bg-white p-5 overflow-scroll h-full focus:outline-none' />
      {/* </div> */}
    </Plate>
  )
}
