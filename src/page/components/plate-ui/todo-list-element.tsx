import { PlateElement, type PlateElementProps, type Value } from '@udecode/plate'
import { type TTodoListItemElement, useTodoListElement, useTodoListElementState } from '@udecode/plate-list'

import { cn } from '@/lib/utils'

import { Checkbox } from './checkbox'

export type TodoListElementProps = PlateElementProps<Value, TTodoListItemElement>

export function TodoListElement({ className, children, ...props }: TodoListElementProps) {
  const { element } = props
  const state = useTodoListElementState({ element })
  const { checkboxProps } = useTodoListElement(state)

  return (
    <PlateElement className={cn(className)} {...props}>
      <div style={{ display: 'flex', flexDirection: 'row', padding: '0.25rem 0' }}>
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
          <Checkbox {...checkboxProps} />
        </div>
        <span
          contentEditable={!state.readOnly}
          suppressContentEditableWarning
          style={
            state.checked
              ? { color: 'rgb(100 116 139)', flex: '1 1 0%', textDecorationLine: 'line-through' }
              : { flex: '1 1 0%' }
          }
        >
          {children}
        </span>
      </div>
    </PlateElement>
  )
}
