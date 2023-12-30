import type { TElement, TText } from '@udecode/plate'
import type { RefObject } from 'react'

import { EBlockElement } from '@/types/plate'
import { EditorState } from '@codemirror/state'
import { type PlateEditor } from '@udecode/plate'
import { useDebounce } from '@uidotdev/usehooks'
import { basicSetup, EditorView } from 'codemirror'
import { useEffect, useMemo, useRef, useState } from 'react'

export function useCodeEditor(plateState: PlateEditor) {
  const codeContainer = useRef<HTMLDivElement>(null)
  const { extensions } = useCodeExtensions(plateState, codeContainer)
  const codeState = useMemo(() => EditorState.create({ extensions }), [extensions])
  const codeView = useMemo(() => new EditorView(), [])
  useSyncWithPlateEditor(plateState)
  const [a, b] = useState(true)
  useEffect(() => {
    codeView.setState(codeState)
    codeContainer.current?.appendChild(codeView.dom)
    b(false)
  }, [codeState, codeView])

  useEffect(() => {
    if (!a) console.log('working')
  }, [a])

  return { codeContainer, codeState, codeView }
}

function useCodeExtensions(plateState: PlateEditor, codeContainer: RefObject<HTMLDivElement>) {
  const { current: extensions } = useRef([basicSetup])

  // const { current: onchangeListener } = useRef(
  //   EditorView.updateListener.of(({ docChanged, state }) => {
  //     const elem = codeContainer.current?.firstElementChild?.children[1].children[1]
  //     if (docChanged && document.activeElement === elem) {
  //       const fragment = deserializeHtml(plateState, { element: state.doc.toString() })
  //     }
  //   }),
  // )

  // extensions.push(onchangeListener)
  return { extensions }
}

function useSyncWithPlateEditor(plateState: PlateEditor) {
  const [fragment, setFragment] = useState<(TElement | TText)[]>([])
  const [firstLoad, setFirstLoad] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const debounced = useDebounce({ firstLoad, fragment }, 600)

  useEffect(() => {
    // if (!debounced.firstLoad) {
    plateState.children.forEach(() => plateState.delete({ at: [0] }))
    plateState.children = [{ children: [{ text: '' }], type: EBlockElement.PARAGRAPH }]
    plateState.insertFragment([{ children: [{ text: 'HELLO INJECTION' }], type: EBlockElement.PARAGRAPH }])
    // }
  }, [plateState])
  return { firstLoad, isLoading, setFirstLoad, setFragment, setIsLoading }
}
