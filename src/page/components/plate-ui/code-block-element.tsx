import type { TCodeBlockElement } from '@udecode/plate-code-block'
import type { PlateElementProps, Value } from '@udecode/plate-common'

import { cn } from '@/lib/utils'
import { useCodeBlockElementState } from '@udecode/plate-code-block'
import { PlateElement } from '@udecode/plate-common'
import { forwardRef } from 'react'

import { CodeBlockCombobox } from './code-block-combobox'

const CodeBlockElement = forwardRef<HTMLDivElement, PlateElementProps<Value, TCodeBlockElement>>(
  ({ className, ...props }, ref) => {
    const { children, element } = props

    const state = useCodeBlockElementState({ element })

    return (
      <PlateElement
        className={cn(state.className, className)}
        ref={ref}
        style={{ padding: '0.25rem 0', position: 'relative' }}
        {...props}
      >
        <style>{getPrismCss()}</style>
        <div
          style={{
            backgroundColor: '#272822',
            borderRadius: '5px',
            fontFamily: 'monospace',
            lineHeight: 'normal',
            overflowX: 'auto',
            padding: '2rem 1.5rem',
          }}
        >
          <div>{children}</div>
        </div>

        {state.syntax && (
          <div
            className='absolute right-2 top-2 z-10 select-none !block'
            contentEditable={false}
            style={{ display: 'none' }}
          >
            <CodeBlockCombobox />
          </div>
        )}
      </PlateElement>
    )
  },
)
CodeBlockElement.displayName = 'CodeBlockElement'

function getPrismCss() {
  return '.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#8292a2}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.punctuation,.token.url,.token.variable{color:#f8f8f2}.token.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}'
}

export { CodeBlockElement }
