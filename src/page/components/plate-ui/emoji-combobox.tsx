import type { ComboboxItemProps } from '@udecode/plate-combobox'
import type { EmojiItemData, TEmojiCombobox } from '@udecode/plate-emoji'

import { KEY_EMOJI, useEmojiComboboxState } from '@udecode/plate-emoji'

import { Combobox } from './combobox'

export function EmojiComboboxItem({ item }: ComboboxItemProps<EmojiItemData>) {
  const {
    data: { emoji, id },
  } = item

  return (
    <div>
      {emoji} :{id}:
    </div>
  )
}

export function EmojiCombobox<TData extends EmojiItemData = EmojiItemData>({
  pluginKey = KEY_EMOJI,
  id = pluginKey,
  ...props
}: TEmojiCombobox<TData>) {
  const { onSelectItem, trigger } = useEmojiComboboxState({ pluginKey })

  return (
    <Combobox
      controlled
      id={id}
      onRenderItem={EmojiComboboxItem}
      onSelectItem={onSelectItem}
      trigger={trigger}
      {...props}
    />
  )
}
