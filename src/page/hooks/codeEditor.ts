import { EBlockElement } from '@/types/plate'
import { deserializeHtml, type PlateEditor } from '@udecode/plate'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

export function useSyncWithPlateEditor(plate: PlateEditor, value: string, debounceTime = 300) {
  const [isMounting, setIsMounting] = useState(true)
  const [changeSignal, setChangeSignal] = useState('')
  const debouncedChange = useDebounce(changeSignal, debounceTime)
  useEffect(() => {
    if (!isMounting) {
      plate.children.forEach(() => plate.delete({ at: [0] }))
      plate.children = [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }]
      plate.insertFragment(deserializeHtml(plate, { element: value }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedChange])
  return { isMounting, setChangeSignal, setIsMounting }
}
