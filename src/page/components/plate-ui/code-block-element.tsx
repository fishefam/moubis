import './code-block-element.css'

import { PlateElement, type PlateElementProps, type Value } from '@udecode/plate'
import { type TCodeBlockElement, useCodeBlockElementState } from '@udecode/plate-code-block'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

import { CodeBlockCombobox } from './code-block-combobox'

const CodeBlockElement = forwardRef<HTMLDivElement, PlateElementProps<Value, TCodeBlockElement>>(
  ({ className, ...props }, ref) => {
    const { children, element } = props

    const state = useCodeBlockElementState({ element })

    return (
      <PlateElement ref={ref} className={cn('relative py-1', state.className, className)} {...props}>
        <pre className='overflow-x-auto rounded-md bg-slate-100 px-6 py-8 font-mono text-sm leading-[normal] [tab-size:2] dark:bg-slate-800'>
          <code>{children}</code>
        </pre>

        {state.syntax && (
          <div className='absolute right-2 top-2 z-10 select-none' contentEditable={false}>
            <CodeBlockCombobox />
          </div>
        )}
      </PlateElement>
    )
  },
)
CodeBlockElement.displayName = 'CodeBlockElement'

export { CodeBlockElement }
