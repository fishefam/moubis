import type { PlateEditor as TPlateEditor, Value } from '@udecode/plate'
import type { EditorView } from 'codemirror'
import type { Dispatch, ForwardRefRenderFunction, MutableRefObject, SetStateAction } from 'react'

import { useSyncWithCodeEditor } from '@/hooks/plateEditor'
import { getInitialValue, nanoid } from '@/lib/util'
import { Plate, PlateContent } from '@udecode/plate'
import { forwardRef } from 'react'

type Props = { codeView: EditorView; state: TPlateEditor }

function Editor({ codeView, state }: Props, ref: MutableRefObject<HTMLDivElement>) {
  const { setIsChanged } = useSyncWithCodeEditor(codeView, ref)

  return (
    <Plate
      editor={state}
      initialValue={getInitialValue<Value>(true)}
      onChange={() => handleChange({ codeView, container: ref, setIsChanged, state })}
    >
      <div ref={ref}>
        <PlateContent className='w-full mx-auto bg-white shadow p-5 border border-gray-200 overflow-scroll rounded-md h-[40rem]' />
      </div>
    </Plate>
  )
}

function handleChange({
  codeView,
  container,
  setIsChanged,
  state,
}: Props & { container: MutableRefObject<HTMLDivElement>; setIsChanged: Dispatch<SetStateAction<string>> }) {
  if (document.activeElement === container.current?.firstElementChild) setIsChanged(nanoid(5))
}

const PlateEditor = forwardRef(Editor as ForwardRefRenderFunction<HTMLDivElement, Props>)
PlateEditor.displayName = 'PlateEditor'

export { PlateEditor }
