import type { TSetState } from '@/types/app'
import type { PlateEditor } from '@udecode/plate'
import type { ReactCodeMirrorRef } from '@uiw/react-codemirror'
import type { MutableRefObject, RefObject } from 'react'

import { useSyncWithPlateEditor } from '@/hooks/codeEditor'
import { nanoid } from '@/lib/util'
import { noctisLilac } from '@uiw/codemirror-themes-all'
import CodeMirror from '@uiw/react-codemirror'
import { useRef } from 'react'

type TProps = { plate: PlateEditor; value: string }
type THandleChangeProps = {
  container: RefObject<ReactCodeMirrorRef>
  isMounting: boolean
  setChangeSignal: TSetState<string>
  setIsMounting: TSetState<boolean>
  value: string
  valueRef: MutableRefObject<string>
}

export function CodeEditor({ plate, value }: TProps) {
  const container = useRef<ReactCodeMirrorRef>(null)
  const valueRef = useRef(value)
  const { isMounting, setChangeSignal, setIsMounting } = useSyncWithPlateEditor(plate, valueRef.current)

  console.log('Code Render')
  return (
    <CodeMirror
      className='h-80 overflow-scroll'
      extensions={[]}
      onChange={(v) => handleChange({ container, isMounting, setChangeSignal, setIsMounting, value: v, valueRef })}
      ref={container}
      theme={noctisLilac}
      value={value}
    />
  )
}

function handleChange({ container, isMounting, setChangeSignal, setIsMounting, value, valueRef }: THandleChangeProps) {
  const isFocused =
    document.activeElement === container.current?.editor?.firstElementChild?.lastElementChild?.children[1]

  if (isMounting && isFocused) setIsMounting(false)
  if (!isMounting && isFocused) {
    valueRef.current = value
    setChangeSignal(nanoid(5))
  }
}
