import type { ReactNode } from 'react'

import { cn } from '@/lib/util'

type TSlot = 'bottom' | 'left' | 'main' | 'top'
type TProps = { [key in TSlot]: ReactNode }

const AREAS = [
  { coldEnd: 3, colStart: 1, key: 'top', rowEnd: 2, rowStart: 1 },
  { coldEnd: 1, colStart: 1, key: 'left', rowEnd: 4, rowStart: 2 },
  { coldEnd: 3, colStart: 2, key: 'main', rowEnd: 4, rowStart: 2 },
  { coldEnd: 3, colStart: 1, key: 'bottom', rowEnd: 5, rowStart: 4 },
]

export function Layout({ bottom, left, main, top }: TProps) {
  return (
    <div className='bg-slate-200 w-screen h-screen grid grid-cols-[4rem_auto] grid-rows-[4rem_auto_auto_4rem]'>
      {AREAS.map(({ coldEnd, colStart, key, rowEnd, rowStart }, i) => (
        <div
          className={cn(
            'p-2',
            `row-start-${rowStart}`,
            `row-end-${rowEnd}`,
            `col-start-${colStart}`,
            `col-end-${coldEnd}`,
            [1, 2].includes(i) && 'py-0',
            i === 1 && 'pr-0',
          )}
          key={key}
        >
          <div className={cn('bg-white w-full h-full rounded', i !== 2 && 'p-1', i === 2 && 'bg-slate-200')}>
            {i === 0 && top}
            {i === 1 && left}
            {i === 2 && main}
            {i === 3 && bottom}
          </div>
        </div>
      ))}
    </div>
  )
}
