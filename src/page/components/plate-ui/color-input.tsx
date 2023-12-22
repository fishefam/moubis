import { useColorInput } from '@udecode/plate'
import type { InputHTMLAttributes, ReactElement } from 'react'
import { Children, cloneElement } from 'react'

import { cn } from '@/lib/utils'

export function ColorInput({
  value = '#000000',
  onChange,
  children,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const { inputRef, childProps } = useColorInput()

  return (
    <div className={cn('flex flex-col items-center', className)} {...props}>
      {Children.map(children, (child) => {
        if (!child) return child

        return cloneElement(child as ReactElement, childProps)
      })}

      <input
        ref={inputRef}
        className='h-0 w-0 overflow-hidden border-0 p-0'
        type='color'
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
