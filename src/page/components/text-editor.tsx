import type { TDocument } from '@/types/plate'
import type { Dispatch, SetStateAction } from 'react'

import { useRef } from 'react'
import { createEditor, Text } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, withReact } from 'slate-react'

export function TextEditor({ question, setA }: { question: TDocument; setA: Dispatch<SetStateAction<any>> }) {
  const { current: editor } = useRef(withReact(withHistory(createEditor())))
  const slateContainer = useRef<HTMLDivElement>(null)

  return (
    <div ref={slateContainer}>
      <Slate
        editor={editor}
        initialValue={question}
        onChange={(v) => handleChange(v as TDocument, slateContainer.current!, setA)}
      >
        <Editable />
      </Slate>
      {/* <Plate
        editor={textEditor}
        initialValue={getInitialValue(true)}
        onChange={() => handleChange(textEditor)}
      >
        <PlateContent
          className='w-full mx-auto bg-white shadow p-5 border border-gray-200 overflow-scroll rounded-md h-[40rem]'
          onKeyDown={(e) => {
            console.log(e.code)
          }}
        />
      </Plate> */}
    </div>
  )
}

function handleChange(value: TDocument, container: HTMLDivElement, setA: any) {}

function serialize(node: any) {
  if (Text.isText(node)) {
    let string = node.text
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    return string
  }

  const children = node.children.map((n) => serialize(n)).join('')

  switch (node.type) {
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`
    case 'paragraph':
      return `<p>${children}</p>`
    case 'link':
      return `<a href="${node.url}">${children}</a>`
    default:
      return children
  }
}
