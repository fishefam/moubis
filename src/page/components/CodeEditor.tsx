import type { TSetState } from '@/types/app'
import type { PlateEditor } from '@udecode/plate'
import type { ReactCodeMirrorRef } from '@uiw/react-codemirror'
import type { MutableRefObject, RefObject } from 'react'

import { useRootContext } from '@/Context'
import { nanoid } from '@/lib/util'
import { deserializeHtml } from '@udecode/plate'
import { useCodeMirror } from '@uiw/react-codemirror'
import { useEffect, useRef } from 'react'

type TProps = Record<string, never>
type THandleChangeProps = {
  container: RefObject<ReactCodeMirrorRef>
  isMounting: boolean
  setChangeSignal: TSetState<string>
  setIsMounting: TSetState<boolean>
  value: string
  valueRef: MutableRefObject<string>
}

export function CodeEditor(_: TProps) {
  const { codeView, plate } = useRootContext()
  const container = useRef<HTMLDivElement>(null)
  const { setView, view } = useCodeMirror({
    container: container.current,
    onChange: (v) => {
      if (document.activeElement === container.current?.firstElementChild?.lastElementChild?.children[1])
        plate.insertFragment(deserializeHtml(plate as unknown as PlateEditor, { element: v }))
    },
    value: 'dfasf',
  })
  // const { isMounting, setChangeSignal, setIsMounting } = useSyncWithPlateEditor(plate, valueRef.current)

  useEffect(() => {
    if (view) {
      setView(codeView)
      container.current?.appendChild(codeView.dom)
    }
  }, [codeView, setView, view])

  console.log('Code Render')
  return <div ref={container}></div>
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

function Test() {
  const cm = useCodeMirror({})
  console.log(cm)
  useEffect(() => {})
  return (
    <div>
      <button
        onClick={() => {
          cm.view?.dispatch({ changes: { from: 0, insert: 'hahahah' } })
        }}
      >
        click here
      </button>{' '}
      WHAT IS UP TESTING
    </div>
  )
}
