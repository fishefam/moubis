import type { Extension } from '@codemirror/state'
import type { TElement, TText } from '@udecode/plate'
import type { RefObject } from 'react'

import { EBlockElement } from '@/types/plate'
import { EditorState } from '@codemirror/state'
import { deserializeHtml, type PlateEditor } from '@udecode/plate'
import { useDebounce } from '@uidotdev/usehooks'
import { basicSetup, EditorView } from 'codemirror'
import { useEffect, useRef, useState } from 'react'

export function useCodeEditor(plateState: PlateEditor) {
  const codeContainer = useRef<HTMLDivElement>(null)
  const extensions = useCodeExtensions(plateState, codeContainer)
  const { current: codeState } = useRef(EditorState.create({ extensions }))
  const { current: codeView } = useRef(new EditorView())
  useEffect(() => {
    codeView.setState(codeState)
    codeContainer.current?.appendChild(codeView.dom)
  }, [codeState, codeView, codeView.dom])
  return { codeContainer, codeState, codeView }
}

function useCodeExtensions(plateState: PlateEditor, codeContainer: RefObject<HTMLDivElement>) {
  const extensions: Extension[] = [basicSetup]
  const { setFragment } = useSyncWithPlateEditor(plateState)

  const onchangeListener = EditorView.updateListener.of(({ docChanged, state }) => {
    const elem = codeContainer.current?.firstElementChild?.children[1].children[1]
    if (docChanged && document.activeElement === elem) {
      const fragment = deserializeHtml(plateState, { element: state.doc.toString() })
      plateState.children.forEach(() => plateState.delete({ at: [0] }))
      plateState.children = [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }]
      setFragment(fragment)
    }
  })

  extensions.push(onchangeListener)
  return extensions
}

function useSyncWithPlateEditor(plateState: PlateEditor) {
  const [fragment, setFragment] = useState<(TElement | TText)[]>([])
  const debouncedFragment = useDebounce(fragment, 700)
  useEffect(() => {
    plateState.insertFragment(debouncedFragment)
  }, [debouncedFragment, plateState])
  return { setFragment }
}
