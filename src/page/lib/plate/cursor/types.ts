import type { UnknownObject } from '@udecode/plate'
import type { CSSProperties } from 'react'
import type { Range } from 'slate'

export type SelectionRect = {
  width: number
  height: number

  top: number
  left: number
}

export type CaretPosition = {
  height: number

  top: number
  left: number
}

export type CursorState<TCursorData extends UnknownObject = UnknownObject> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key?: any
  selection: Range | null
  data?: TCursorData
}

export type CursorOverlayState<TCursorData extends Record<string, unknown>> = {
  caretPosition: CaretPosition | null
  selectionRects: SelectionRect[]
} & CursorState<TCursorData>

export type CursorData = {
  style?: CSSProperties
  selectionStyle?: CSSProperties
}
