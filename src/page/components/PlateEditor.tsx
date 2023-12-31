import type { TSetState } from '@/types/app'
import type { PlateEditor } from '@udecode/plate'
import type { RefObject } from 'react'

import { useRootContext } from '@/Context'
import { nanoid, serializeFragment } from '@/lib/util'
import { Plate, PlateContent } from '@udecode/plate'
import { useRef } from 'react'

type TProps = Record<string, never>
type THandleChangeProps = {
  container: RefObject<HTMLDivElement>
  isMounting: boolean
  setChangeSignal: TSetState<string>
  setIsMounting: TSetState<boolean>
}

export function PlateEditor(_: TProps) {
  const { codeView, plate, plateValue } = useRootContext()
  const container = useRef<HTMLDivElement>(null)
  // const { isMounting, setChangeSignal, setIsMounting } = useSyncWithCodeEditor(state, setCodeValue)

  console.log('Plate Render')
  return (
    <Plate
      editor={plate}
      initialValue={plateValue}
      // onChange={() => handleChange({ container, isMounting, setChangeSignal, setIsMounting })}
      onChange={(v) => {
        if (document.activeElement === container.current?.firstElementChild)
          codeView.dispatch({ changes: { from: 0, insert: serializeFragment(v) } })
      }}
    >
      <div ref={container}>
        <PlateContent className='w-full mx-auto bg-white shadow p-5 border border-gray-200 overflow-scroll rounded-md h-[40rem]' />
      </div>
    </Plate>
  )
}

function handleChange({ container, isMounting, setChangeSignal, setIsMounting }: THandleChangeProps) {
  const isFocused = document.activeElement === container.current?.firstElementChild
  if (isMounting && isFocused) setIsMounting(false)
  if (!isMounting && isFocused) setChangeSignal(nanoid(5))
}
