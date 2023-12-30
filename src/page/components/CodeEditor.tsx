import type { PlateEditor } from '@udecode/plate'
import type { ReactCodeMirrorRef } from '@uiw/react-codemirror'

import { nanoid } from '@/lib/util'
import CodeMirror from '@uiw/react-codemirror'
import { type Dispatch, type MutableRefObject, type SetStateAction, useRef } from 'react'

type Props = { plate: PlateEditor; value: string }

export function CodeEditor({ value }: Props) {
  const ref = useRef<ReactCodeMirrorRef>(null)

  console.log('Code Render')
  return (
    <CodeMirror
      className='h-80 overflow-scroll'
      // onChange={
      // (v) => handleChange({ container, setIsChanged, state, view })
      // const fragment = deserializeHtml(plateState, { element: v })
      // plateState.children.forEach(() => plateState.delete({ at: [0] }))
      // plateState.children = [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }]
      // plateState.insertFragment(fragment)
      // }
      ref={ref}
      value={value}
    />
  )
}

function handleChange({
  container,
  setIsChanged,
}: Props & { container: MutableRefObject<HTMLDivElement>; setIsChanged: Dispatch<SetStateAction<string>> }) {
  if (document.activeElement === container.current?.firstElementChild) setIsChanged(nanoid(5))
}
