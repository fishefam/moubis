import type { UseEmojiPickerType } from '@udecode/plate-emoji'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

export type EmojiPickerSearchAndClearProps = Pick<UseEmojiPickerType, 'clearSearch' | 'i18n' | 'searchValue'>

export function EmojiPickerSearchAndClear({ clearSearch, i18n, searchValue }: EmojiPickerSearchAndClearProps) {
  return (
    <>
      <span className={cn('absolute left-2 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2')}>
        <Icons.search />
      </span>
      {searchValue && (
        <button
          aria-label='Clear'
          className={cn(
            'absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer border-none bg-transparent',
          )}
          onClick={clearSearch}
          title={i18n.clear}
          type='button'
        >
          <Icons.clear className='h-full w-full' />
        </button>
      )}
    </>
  )
}
