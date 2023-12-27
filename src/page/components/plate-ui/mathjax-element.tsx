import type { PlateLeafProps } from '@udecode/plate-common'

import { cn } from '@/lib'
import { PlateLeaf } from '@udecode/plate-common'
import { MathJax } from 'better-react-mathjax'
import { useState } from 'react'

export const MathJaxElement = ({ children, ...props }: PlateLeafProps) => {
  const [show, setShow] = useState(false)

  return (
    <PlateLeaf {...props}>
      <figure style={{ display: 'inline-block', position: 'relative' }}>
        <button
          className={cn(
            'p-2 text-sm font-medium !inline-block focus:outline-none rounded mx-2 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200',
          )}
          onClick={() => setShow((state) => !state)}
          style={{ display: 'none' }}
        >
          <MathJax contentEditable={false} inline={true} is='span'>
            {props.text.text}
          </MathJax>
        </button>

        <div
          className={cn('absolute top-10 left-0 z-50 p-0 shadow rounded-sm whitespace-nowrap', !show && 'hidden')}
          style={{ margin: '0 4px' }}
        >
          <div className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-2'>
            {children}
          </div>
        </div>
      </figure>
    </PlateLeaf>
  )
}
