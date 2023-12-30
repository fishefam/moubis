import type { EditorState } from '@codemirror/state'
import type { EditorView } from 'codemirror'
import type { ForwardedRef } from 'react'

import { forwardRef } from 'react'

type Props = { state: EditorState; view: EditorView }

function Editor(_: Props, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div
      className='h-80 overflow-scroll'
      ref={ref}
    ></div>
  )
}

const CodeEditor = forwardRef<HTMLDivElement, Props>(Editor)
CodeEditor.displayName = 'CodeEditor'

export { CodeEditor }
