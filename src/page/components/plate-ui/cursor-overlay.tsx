import type { CursorData, CursorOverlayProps, CursorProps } from '@udecode/plate-cursor'

import { cn } from '@/lib/utils'
import { createStore } from '@udecode/plate-common'
import { CursorOverlay as CursorOverlayPrimitive } from '@udecode/plate-cursor'

export const cursorStore = createStore('cursor')({
  cursors: {},
})

export function Cursor({
  caretPosition,
  classNames,
  data,
  disableCaret,
  disableSelection,
  selectionRects,
}: CursorProps<CursorData>) {
  if (!data) {
    return null
  }

  const { style, selectionStyle = style } = data

  return (
    <>
      {!disableSelection &&
        selectionRects.map((position, i) => (
          <div
            className={cn('pointer-events-none absolute z-10 opacity-[0.3]', classNames?.selectionRect)}
            key={i}
            style={{
              ...selectionStyle,
              ...position,
            }}
          />
        ))}
      {!disableCaret && caretPosition && (
        <div
          className={cn('pointer-events-none absolute z-10 w-0.5', classNames?.caret)}
          style={{ ...caretPosition, ...style }}
        />
      )}
    </>
  )
}

export function CursorOverlay({ cursors, ...props }: CursorOverlayProps) {
  const dynamicCursors = cursorStore.use.cursors()

  const allCursors = { ...cursors, ...dynamicCursors }

  return <CursorOverlayPrimitive {...props} cursors={allCursors} onRenderCursor={Cursor} />
}
