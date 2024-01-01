import type { TFinalTextDataProps, TTextData } from '@/types/data'
import type { TDocument } from '@/types/plate'
import type { RefObject } from 'react'

import { useEditorContext } from '@/contexts/Editor'
import { useRootContext } from '@/contexts/Root'
import { cn, prettierSync, serializeFragment } from '@/lib/util'
import { Plate } from '@/types/plate'
import { PlateContent, type PlateEditor } from '@udecode/plate'
import { useRef } from 'react'

export function PlateEditor() {
  const { editorType } = useRootContext()
  const { textData } = useEditorContext()
  const ref = useRef<HTMLDivElement>(null)
  const values = Object.values(textData)
  const plates = Object.keys(textData).map((k, i) => ({ ...values[i].plate, key: k as keyof TTextData }))
  const codes = Object.keys(textData).map((k, i) => values[i].code)

  return (
    <div
      className='h-full hover:border-2'
      ref={ref}
    >
      {plates.map(({ key, state, value }, i) => (
        <div
          className={cn(editorType !== key && 'hidden', 'h-full')}
          key={state.id}
        >
          <Plate
            editor={state}
            initialValue={value}
            onChange={(v) => updateCodeState(codes, i, v, ref)}
          >
            <PlateContent className='h-full' />
          </Plate>
        </div>
      ))}
    </div>
  )
}

function updateCodeState(
  codes: TFinalTextDataProps['code'][],
  index: number,
  value: TDocument,
  ref: RefObject<HTMLDivElement>,
) {
  if (ref.current?.children[index].firstElementChild === document.activeElement) {
    const serializedHTML = prettierSync(serializeFragment(value), 'html')
    const view = codes[index].html.view
    view.dispatch({ changes: { from: 0, insert: serializedHTML, to: view.state.doc.length } })
  }
}
