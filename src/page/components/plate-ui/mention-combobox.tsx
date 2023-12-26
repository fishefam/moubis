import type { ComboboxProps, Data, NoData } from '@udecode/plate-combobox'
import type { MentionPlugin } from '@udecode/plate-mention'

import { getPluginOptions, useEditorRef } from '@udecode/plate-common'
import { ELEMENT_MENTION, getMentionOnSelectItem } from '@udecode/plate-mention'

import { Combobox } from './combobox'

export type MentionComboboxProps<TData extends Data = NoData> = {
  pluginKey?: string
} & Partial<ComboboxProps<TData>>

export function MentionCombobox<TData extends Data = NoData>({
  pluginKey = ELEMENT_MENTION,
  id = pluginKey,
  ...props
}: MentionComboboxProps<TData>) {
  const editor = useEditorRef()

  const { trigger } = getPluginOptions<MentionPlugin>(editor, pluginKey)

  return (
    <Combobox
      controlled
      id={id}
      onSelectItem={getMentionOnSelectItem({
        key: pluginKey,
      })}
      trigger={trigger!}
      {...props}
    />
  )
}
