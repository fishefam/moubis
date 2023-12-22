import type { ClassNames, UnknownObject } from '@udecode/plate'
import { usePlateSelectors } from '@udecode/plate'
import type { CursorData, CursorOverlayState, CursorState, SelectionRect } from '@udecode/plate-cursor'
import type { RefObject } from 'react'

import { useCursorOverlayPositions } from '../hooks/useCursorOverlayPositions'

export type CursorProps<TCursorData extends UnknownObject = UnknownObject> = {
  /**
   * Whether to disable the caret.
   */
  disableCaret?: boolean

  /**
   * Whether to disable the selection rects.
   */
  disableSelection?: boolean

  /**
   * Custom caret component.
   * For example, you could display a label next to the caret.
   * @default styled div
   */
  onRenderCaret?: React.FC<Pick<CursorProps<TCursorData>, 'data' | 'caretPosition'>>

  /**
   * Overrides `Caret` component
   */
  onRenderSelectionRect?: React.FC<
    Pick<CursorProps<TCursorData>, 'data'> & {
      selectionRect: SelectionRect
    }
  >
} & CursorOverlayState<TCursorData> &
  ClassNames<{
    caret: string
    selectionRect: string
  }>

export type CursorOverlayProps<TCursorData extends UnknownObject = UnknownObject> = {
  /**
   * Cursor states to use for calculating the overlay positions, by key.
   */
  cursors?: Record<string, CursorState<TCursorData>>

  /**
   * Container the overlay will be rendered in.
   * If set, all returned overlay positions will be relative to this container.
   */
  containerRef?: RefObject<HTMLElement>

  /**
   * Whether to refresh the cursor overlay positions on container resize.
   * @default true
   */
  refreshOnResize?: boolean

  /**
   * Overrides `Cursor` component.
   */
  onRenderCursor?: React.FC<CursorProps>
} & Pick<
  CursorProps<CursorData>,
  'disableCaret' | 'disableSelection' | 'onRenderCaret' | 'onRenderSelectionRect' | 'classNames'
>

export function CursorOverlayContent<TCursorData extends UnknownObject = UnknownObject>({
  classNames,
  onRenderCursor: CursorComponent,
  onRenderSelectionRect,
  onRenderCaret,
  ...props
}: CursorOverlayProps<TCursorData>) {
  const { disableCaret, disableSelection } = props

  const { cursors } = useCursorOverlayPositions(props)

  const cursorProps = {
    classNames,
    disableCaret,
    disableSelection,
    onRenderCaret,
    onRenderSelectionRect,
  }

  if (!CursorComponent) return null

  return (
    <>
      {cursors.map((cursor) => (
        <CursorComponent key={cursor.key} {...cursorProps} {...cursor} />
      ))}
    </>
  )
}

export function CursorOverlay<TCursorData extends UnknownObject = UnknownObject>(
  props: CursorOverlayProps<TCursorData>,
) {
  const isMounted = usePlateSelectors().isMounted()

  if (!isMounted) return null

  return <CursorOverlayContent {...props} />
}
