import type { Extension } from '@uiw/react-codemirror'

import { useEditorContext } from '@/contexts/Editor'
import { color } from '@uiw/codemirror-extensions-color'
import { langs } from '@uiw/codemirror-extensions-langs'
import { xcodeLight } from '@uiw/codemirror-themes-all'
import { useCodeMirror } from '@uiw/react-codemirror'
import { useEffect, useRef } from 'react'

type TProps = { lang: 'css' | 'html' | 'js' }

export function CodeEditor({ lang }: TProps) {
  const { code, plate } = useEditorContext()
  const container = useRef<HTMLDivElement>(null)
  const { setView, view } = useCodeMirror({
    container: container.current,
    extensions: [color, getLangExtension(lang)],
    onChange: (v) => {
      // if (document.activeElement === container.current?.firstElementChild?.lastElementChild?.children[1])
      //   plate.insertFragment(deserializeHtml(plate as unknown as PlateEditor, { element: v }))
    },
    theme: xcodeLight,
    value: code[lang].value,
  })

  useEffect(() => {
    if (view) {
      setView(code[lang].editor)
      container.current?.appendChild(code[lang].editor.dom)
      const rootElement = container.current?.firstElementChild as HTMLElement | null
      if (rootElement) {
        rootElement.style.height = '100%'
        rootElement.style.scrollBehavior = 'smooth'
      }
    }
  }, [code, lang, setView, view])

  return (
    <div
      className={'h-full'}
      ref={container}
    ></div>
  )
}

function getLangExtension(lang: TProps['lang']): Extension {
  return lang === 'html' ? langs.html() : lang === 'css' ? langs.css() : langs.javascript()
}
