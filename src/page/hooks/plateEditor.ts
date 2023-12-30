import type { EditorView } from 'codemirror'
import type { MutableRefObject } from 'react'

import { plugins } from '@/lib/plate/plugins'
import { prettier } from '@/lib/util'
import { createPlateEditor } from '@udecode/plate'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useRef, useState } from 'react'

export function usePlateEditor() {
  const plateContainer = useRef<HTMLDivElement>(null)
  const { current: plateState } = useRef(createPlateEditor({ plugins }))
  return { plateContainer, plateState }
}

export function useSyncWithCodeEditor(codeView: EditorView, codeContainer: MutableRefObject<HTMLDivElement>) {
  const [isChanged, setIsChanged] = useState('')
  const debouncedIschanged = useDebounce(isChanged, 500)

  useEffect(() => {
    const html = codeContainer.current.firstElementChild?.innerHTML ?? ''
    prettier(html, (val) => codeView.dispatch({ changes: { from: 0, insert: val, to: codeView.state.doc.length } }))
  }, [codeContainer, codeView, debouncedIschanged])

  return { setIsChanged }
}
