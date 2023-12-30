import type { TSetState } from '@/types/app'
import type { TValue } from '@/types/plate'
import type { PlateEditor as TPlateEditor } from '@udecode/plate'
import type { RefObject } from 'react'

import { useSyncWithCodeEditor } from '@/hooks/plateEditor'
import { nanoid } from '@/lib/util'
import { Plate, PlateContent } from '@udecode/plate'
import { useRef } from 'react'

type TProps = { setCodeValue: TSetState<string>; state: TPlateEditor; value: TValue }
type THandleChangeProps = {
  container: RefObject<HTMLDivElement>
  isMounting: boolean
  setChangeSignal: TSetState<string>
  setIsMounting: TSetState<boolean>
}

export function PlateEditor({ setCodeValue, state, value }: TProps) {
  const container = useRef<HTMLDivElement>(null)
  const { isMounting, setChangeSignal, setIsMounting } = useSyncWithCodeEditor(state, setCodeValue)

  return (
    <Plate
      editor={state}
      initialValue={value}
      onChange={() => handleChange({ container, isMounting, setChangeSignal, setIsMounting })}
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
