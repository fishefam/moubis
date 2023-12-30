import type { TSetState } from '@/types/app'
import type { PlateEditor } from '@udecode/plate'

import { plugins } from '@/lib/plate/plugins'
import { serializeFragment } from '@/lib/util'
import { createPlateEditor } from '@udecode/plate'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

export function usePlateEditor() {
  // const { current: plateState } = useRef(createPlateEditor({ plugins }))
  return useState(createPlateEditor({ plugins }))
}

/**
 * @param codeView
 * @param codeContainer
 * @returns
 */
export function useSyncWithCodeEditor(state: PlateEditor, setCodeValue: TSetState<string>, debounceTime = 300) {
  const [isMounting, setIsMounting] = useState(true)
  const [changeSignal, setChangeSignal] = useState('')
  const debouncedChange = useDebounce(changeSignal, debounceTime)
  useEffect(() => {
    if (!isMounting) setCodeValue(serializeFragment(state.children))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedChange])
  return { isMounting, setChangeSignal, setIsMounting }
}
