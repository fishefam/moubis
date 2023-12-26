import type { ToolbarButtonProps } from '@/components/plate-ui/toolbar'
import type { EmojiDropdownMenuOptions } from '@udecode/plate-emoji'

import { Icons } from '@/components/icons'
import { EmojiToolbarDropdown } from '@/components/plate-ui/emoji-toolbar-dropdown'
import { ToolbarButton } from '@/components/plate-ui/toolbar'
import { useEmojiDropdownMenuState } from '@udecode/plate-emoji'

import { emojiCategoryIcons, emojiSearchIcons } from './emoji-icons'
import { EmojiPicker } from './emoji-picker'

type EmojiDropdownMenuProps = {
  options?: EmojiDropdownMenuOptions
} & ToolbarButtonProps

export function EmojiDropdownMenu({ options, ...props }: EmojiDropdownMenuProps) {
  const { emojiPickerState, isOpen, setIsOpen } = useEmojiDropdownMenuState(options)

  return (
    <EmojiToolbarDropdown
      control={
        <ToolbarButton isDropdown pressed={isOpen} tooltip='Emoji' {...props}>
          <Icons.emoji />
        </ToolbarButton>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <EmojiPicker
        {...emojiPickerState}
        icons={{
          categories: emojiCategoryIcons,
          search: emojiSearchIcons,
        }}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        settings={options?.settings}
      />
    </EmojiToolbarDropdown>
  )
}
