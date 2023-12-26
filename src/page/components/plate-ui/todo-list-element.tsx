import type { PlateElementProps, Value } from '@udecode/plate-common'
import type { TTodoListItemElement } from '@udecode/plate-list'

import { PlateElement } from '@udecode/plate-common'
import { useTodoListElementState } from '@udecode/plate-list'

import { TextCheckbox } from './checkbox'

export type TodoListElementProps = PlateElementProps<Value, TTodoListItemElement>

export function TodoListElement({ children, className, ...props }: TodoListElementProps) {
  const { element } = props
  const state = useTodoListElementState({ element })

  return (
    <PlateElement
      className={className}
      style={{ display: 'flex', flexDirection: 'row', padding: '0.25rem 0' }}
      {...props}
    >
      <div
        contentEditable={false}
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginRight: '0.375rem',
          userSelect: 'none',
        }}
      >
        <TextCheckbox />
      </div>
      <span contentEditable={!state.readOnly} style={{ flex: '1 1 0%' }} suppressContentEditableWarning>
        {children}
      </span>
    </PlateElement>
  )
}
