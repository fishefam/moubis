import * as Popover from '@radix-ui/react-popover'
import type { ReactNode } from 'react'

type EmojiToolbarDropdownProps = {
  control: ReactNode
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  children: ReactNode
}

export function EmojiToolbarDropdown({ control, isOpen, setIsOpen, children }: EmojiToolbarDropdownProps) {
  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger
        asChild
        className='inline-flex items-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([data-icon])]:h-5 [&_svg:not([data-icon])]:w-5 bg-transparent hover:bg-slate-100 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground h-9 px-2 my-1 justify-between pr-1'
      >
        {control}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className='z-50 overflow-hidden rounded-md border bg-white p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 min-w-0'>
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
