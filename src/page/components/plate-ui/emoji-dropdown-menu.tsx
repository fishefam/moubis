import type { EmojiDropdownMenuOptions} from '@udecode/plate-emoji'
import { useEmojiDropdownMenuState } from '@udecode/plate-emoji'

import { Icons } from '../icons'
import { emojiCategoryIcons, emojiSearchIcons } from './emoji-icons'
import { EmojiPicker } from './emoji-picker'
import { EmojiToolbarDropdown } from './emoji-toolbar-dropdown'
import type { ToolbarButtonProps } from './toolbar'
import { ToolbarButton } from './toolbar'

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
