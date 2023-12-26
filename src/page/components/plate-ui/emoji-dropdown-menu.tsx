import type { EmojiDropdownMenuOptions } from '@udecode/plate-emoji'
import { useEmojiDropdownMenuState } from '@udecode/plate-emoji'

import { Icons } from '@/components/icons'
import { EmojiToolbarDropdown } from '@/components/plate-ui/emoji-toolbar-dropdown'
import type { ToolbarButtonProps } from '@/components/plate-ui/toolbar'
import { ToolbarButton } from '@/components/plate-ui/toolbar'

import { emojiCategoryIcons, emojiSearchIcons } from './emoji-icons'
import { EmojiPicker } from './emoji-picker'

type EmojiDropdownMenuProps = {
  options?: EmojiDropdownMenuOptions
} & ToolbarButtonProps

export function EmojiDropdownMenu({ options, ...props }: EmojiDropdownMenuProps) {
  const { isOpen, setIsOpen, emojiPickerState } = useEmojiDropdownMenuState(options)

  return (
    <EmojiToolbarDropdown
      control={
        <ToolbarButton pressed={isOpen} isDropdown tooltip='Emoji' {...props}>
          <Icons.emoji />
        </ToolbarButton>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <EmojiPicker
        {...emojiPickerState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icons={{
          categories: emojiCategoryIcons,
          search: emojiSearchIcons,
        }}
        settings={options?.settings}
      />
    </EmojiToolbarDropdown>
  )
}
