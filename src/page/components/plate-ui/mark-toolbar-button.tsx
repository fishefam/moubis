import { useMarkToolbarButton, useMarkToolbarButtonState } from '@udecode/plate-common'

import type { ToolbarButtonProps } from './toolbar'
import { ToolbarButton } from './toolbar'

export type MarkToolbarButtonProps = {
  nodeType: string
  clear?: string | string[]
} & Pick<ToolbarButtonProps, 'tooltip' | 'children'>

/**
 * Toolbar button to toggle the mark of the leaves in selection.
 */
export function MarkToolbarButton({ clear, nodeType, ...props }: MarkToolbarButtonProps) {
  const state = useMarkToolbarButtonState({ clear, nodeType })
  const { props: buttonProps } = useMarkToolbarButton(state)

  return <ToolbarButton {...buttonProps} {...props} />
}
