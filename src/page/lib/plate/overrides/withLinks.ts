import type { TEmptyText } from '@/types/plate'
import type { LinkPlugin, PlateEditor, RemoveEmptyNodesPlugin, Value, WithPlatePlugin } from '@udecode/plate'
import type { Point } from 'slate'

import {
  collapseSelection,
  ELEMENT_LINK,
  getAboveNode,
  getEditorString,
  getNextNodeStartPoint,
  getPluginType,
  getPreviousNodeEndPoint,
  getRangeBefore,
  getRangeFromBlockStart,
  insertNodes,
  isCollapsed,
  isEndPoint,
  isStartPoint,
  mockPlugin,
  select,
  someNode,
  upsertLink,
  withoutNormalizing,
  withRemoveEmptyNodes,
} from '@udecode/plate'
import { type BaseRange, Path } from 'slate'

/**
 * Insert space after a url to wrap a link.
 * Lookup from the block start to the cursor to check if there is an url.
 * If not found, lookup before the cursor for a space character to check the url.
 *
 * On insert data:
 * Paste a string inside a link element will edit its children text but not its url.
 *
 */
export const withLink = <V extends Value = Value, E extends PlateEditor<V> = PlateEditor<V>>(
  editor: E,
  { options: { getUrlHref, isUrl, rangeBeforeOptions }, type }: WithPlatePlugin<LinkPlugin, V, E>,
) => {
  const { apply, insertBreak, insertText, normalizeNode } = editor

  const wrapLink = () => {
    withoutNormalizing(editor, () => {
      const selection = editor.selection!

      // get the range from first space before the cursor
      let beforeWordRange = getRangeBefore(editor, selection, rangeBeforeOptions)

      // if no space found before, get the range from block start
      if (!beforeWordRange) {
        beforeWordRange = getRangeFromBlockStart(editor)
      }

      // if no word found before the cursor, exit
      if (!beforeWordRange) return

      const hasLink = someNode(editor, {
        at: beforeWordRange,
        match: { type: getPluginType(editor, ELEMENT_LINK) },
      })

      // if word before the cursor has a link, exit
      if (hasLink) return

      let beforeWordText = getEditorString(editor, beforeWordRange)
      beforeWordText = getUrlHref?.(beforeWordText) ?? beforeWordText

      // if word before is not an url, exit
      if (!isUrl!(beforeWordText)) return

      // select the word to wrap link
      select(editor, beforeWordRange)

      // wrap link
      upsertLink(editor, {
        url: beforeWordText,
      })

      // collapse selection
      collapseSelection(editor, { edge: 'end' })
    })
  }

  editor.insertBreak = () => {
    if (!isCollapsed(editor.selection)) return insertBreak()
    wrapLink()
    insertBreak()
  }

  editor.insertText = (text) => {
    if (text === ' ' && isCollapsed(editor.selection)) {
      wrapLink()
    }

    insertText(text)
  }

  // A BUG THAT AFFECT COPY AND PASTE OF OTHER TYPES OF ELEMENT
  // editor.insertData = (data: DataTransfer) => {
  //   const text = data.getData('text/plain')
  //   const textHref = getUrlHref?.(text)

  //   if (text) {
  //     const value = textHref || text
  //     const inserted = upsertLink(editor, {
  //       insertTextInLink: true,
  //       text: keepSelectedTextOnPaste ? undefined : value,
  //       url: value,
  //     })
  //     if (inserted) return
  //   }

  //   insertData(data)
  // }

  // TODO: plugin
  editor.apply = (operation) => {
    if (operation.type === 'set_selection') {
      const range = operation.newProperties as BaseRange | null

      if (range && range.focus && range.anchor && isCollapsed(range)) {
        const entry = getAboveNode(editor, {
          at: range,
          match: { type: getPluginType(editor, ELEMENT_LINK) },
        })

        if (entry) {
          const [, path] = entry

          let newPoint: Point | undefined

          if (isStartPoint(editor, range.focus, path)) {
            newPoint = getPreviousNodeEndPoint(editor, path)
          }

          if (isEndPoint(editor, range.focus, path)) {
            newPoint = getNextNodeStartPoint(editor, path)
          }

          if (newPoint) {
            operation.newProperties = {
              anchor: newPoint,
              focus: newPoint,
            }
          }
        }
      }
    }

    apply(operation)
  }

  // TODO: plugin
  editor.normalizeNode = ([node, path]) => {
    if (node.type === getPluginType(editor, ELEMENT_LINK)) {
      const range = editor.selection as BaseRange | null

      if (range && isCollapsed(range) && isEndPoint(editor, range.focus, path)) {
        const nextPoint = getNextNodeStartPoint(editor, path)

        // select next text node if any
        if (nextPoint) {
          select(editor, nextPoint)
        } else {
          // insert text node then select
          const nextPath = Path.next(path)
          insertNodes<TEmptyText>(editor, { text: '' }, { at: nextPath })
          select(editor, nextPath)
        }
      }
    }

    normalizeNode([node, path])
  }

  editor = withRemoveEmptyNodes<V, E>(
    editor,
    mockPlugin<RemoveEmptyNodesPlugin, V, E>({
      options: { types: type },
    }),
  )

  return editor
}
