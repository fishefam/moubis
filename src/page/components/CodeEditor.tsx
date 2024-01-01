import type { TCodeData, TFinalTextDataProps, TTextData } from '@/types/data'
import type { TPlateEditor } from '@/types/plate'
import type { EditorState, EditorView } from '@uiw/react-codemirror'
import type { RefObject } from 'react'
import type { BaseEditor } from 'slate'

import { useEditorContext } from '@/contexts/Editor'
import { useRootContext } from '@/contexts/Root'
import { cn, getCodemirrorLangExtension } from '@/lib/util'
import { deserializeHTML, EBlockElement } from '@/types/plate'
import { color } from '@uiw/codemirror-extensions-color'
import { noctisLilac } from '@uiw/codemirror-themes-all'
import { basicSetup, type Extension, useCodeMirror } from '@uiw/react-codemirror'
import { useEffect, useRef } from 'react'
import { Transforms } from 'slate'

type TProps = { isCodeData?: boolean; lang: keyof TFinalTextDataProps['code'] }
type TCodeMirrorProps = {
  extensions: Extension[]
  plate: TPlateEditor
  state: EditorState
  value: string
  view: EditorView
}

export function CodeEditor({ isCodeData = false, lang }: TProps) {
  const { editorType } = useRootContext()
  const { codeData, textData } = useEditorContext()

  const code = Object.keys(codeData).map((k) => ({ key: k, ...codeData[k as keyof TCodeData].code }))
  const text = Object.keys(textData).map((k) => ({ key: k, ...textData[k as keyof TTextData].code[lang] }))
  const plates = Object.keys(textData).map((k) => textData[k as keyof TTextData].plate)

  const data = isCodeData ? code : text

  return (
    <>
      {data.map(({ key, state, value, view }, i) => (
        <div
          className={cn('h-full', editorType !== key && 'hidden')}
          key={i}
        >
          <CodeMirror
            extensions={[color, noctisLilac, getCodemirrorLangExtension(lang)]}
            plate={plates[i].state}
            state={state}
            value={value}
            view={view}
          />
        </div>
      ))}
    </>
  )
}

function CodeMirror({ extensions, plate, state, value, view }: TCodeMirrorProps) {
  const { setView } = useCodeMirror({
    basicSetup: { foldGutter: false },
    extensions: [basicSetup(), ...extensions],
    onChange: (v) => updatePlateState(plate, v, ref),
    style: { height: '100%' },
    value,
  })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    view.setState(state)
    setView(view)
    ref.current?.appendChild(view.dom)
    view.dom.style.height = '100%'
  }, [setView, state, view])

  return (
    <div
      className='h-full'
      ref={ref}
    />
  )
}

function updatePlateState(plate: TPlateEditor, v: string, ref: RefObject<HTMLDivElement>): void {
  if (ref.current?.firstElementChild?.lastElementChild?.children[1] === document.activeElement) {
    const fragment = deserializeHTML(v)
    plate.children.forEach(() => Transforms.delete(plate as BaseEditor, { at: [0] }))
    plate.children = [
      {
        children: [{ text: '' }],
        type: EBlockElement.PARAGRAPH,
      },
    ]
    plate.insertFragment(fragment)
  }
}
