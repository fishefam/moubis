import { cn } from '@/lib/utils'
import { useColorInput } from '@udecode/plate-font'
import React from 'react'

export function ColorInput({
  children,
  className,
  onChange,
  value = '#000000',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const { childProps, inputRef } = useColorInput()

  return (
    <div className={cn('flex flex-col items-center', className)} {...props}>
      {React.Children.map(children, (child) => {
        if (!child) return child

        return React.cloneElement(child as React.ReactElement, childProps)
      })}

      <input
        className='h-0 w-0 overflow-hidden border-0 p-0'
        onChange={onChange}
        ref={inputRef}
        type='color'
        value={value}
      />
    </div>
  )
}
