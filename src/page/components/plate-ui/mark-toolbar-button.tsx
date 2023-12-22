import { useMarkToolbarButton, useMarkToolbarButtonState } from '@udecode/plate'

import { ToolbarButton, ToolbarButtonProps } from './toolbar'

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
