import type { TCodeData, TFinalTextDataProps, TTextData } from '@/types/data'
import type { EditorState, EditorView } from '@uiw/react-codemirror'

import { useEditorContext } from '@/contexts/Editor'
import { useRootContext } from '@/contexts/Root'
import { cn } from '@/lib/util'
import { color } from '@uiw/codemirror-extensions-color'
import { langs } from '@uiw/codemirror-extensions-langs'
import { noctisLilac } from '@uiw/codemirror-themes-all'
import { basicSetup, type Extension, useCodeMirror } from '@uiw/react-codemirror'
import { useEffect, useRef } from 'react'

type TProps = { isCodeData?: boolean; lang: keyof TFinalTextDataProps['code'] }

export function CodeEditor({ isCodeData = false, lang }: TProps) {
  const { editorType } = useRootContext()
  const { codeData, textData } = useEditorContext()

  const code = Object.keys(codeData).map((k) => ({ key: k, ...codeData[k as keyof TCodeData].code }))
  const text = Object.keys(textData).map((k) => ({ key: k, ...textData[k as keyof TTextData].code[lang] }))

  const data = isCodeData ? code : text

  return (
    <>
      {data.map(({ key, state, value, view }, i) => (
        <div
          className={cn(editorType !== key && 'hidden')}
          key={i}
        >
          <CodeMirror
            extensions={[color, noctisLilac, getLangExtension(lang)]}
            state={state}
            value={value}
            view={view}
          />
        </div>
      ))}
    </>
  )
}

function getLangExtension(lang: TProps['lang']): Extension {
  return lang === 'html' ? langs.html() : lang === 'css' ? langs.css() : langs.javascript()
}

type TCodeMirrorProps = { extensions: Extension[]; state: EditorState; value: string; view: EditorView }

function CodeMirror({ extensions, state, value, view }: TCodeMirrorProps) {
  const { setView } = useCodeMirror({ basicSetup: {foldGutter: false},extensions: [basicSetup(), ...extensions], value,})
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    view.setState(state)
    setView(view)
    ref.current?.appendChild(view.dom)
  }, [setView, state, view])

  return <div ref={ref}></div>
}
