import type { TSetState } from '@/types/app'
import type { TValue } from '@/types/plate'
import type { PlateEditor as TPlateEditor } from '@udecode/plate'

import { useSyncWithCodeEditor } from '@/hooks/plateEditor'
import { nanoid } from '@/lib/util'
import { Plate, PlateContent } from '@udecode/plate'

type TProps = { setCodeValue: TSetState<string>; state: TPlateEditor; value: TValue }
type THandleChangeProps = { isMounting: boolean; setChangeSignal: TSetState<string>; setIsMounting: TSetState<boolean> }

export function PlateEditor({ setCodeValue, state, value }: TProps) {
  const { isMounting, setChangeSignal, setIsMounting } = useSyncWithCodeEditor(state, setCodeValue)

  console.log('Plate Render')
  return (
    <Plate
      editor={state}
      initialValue={value}
      onChange={() => handleChange({ isMounting, setChangeSignal, setIsMounting })}
    >
      <PlateContent className='w-full mx-auto bg-white shadow p-5 border border-gray-200 overflow-scroll rounded-md h-[40rem]' />
    </Plate>
  )
}

function handleChange({ isMounting, setChangeSignal, setIsMounting }: THandleChangeProps) {
  if (isMounting) setIsMounting(false)
  if (!isMounting) setChangeSignal(nanoid(5))
}
