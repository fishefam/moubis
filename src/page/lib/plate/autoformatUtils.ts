import type { AutoformatBlockRule, PlateEditor } from '@udecode/plate'
import {
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  getParentNode,
  isElement,
  isType,
  toggleList,
  unwrapList,
} from '@udecode/plate'

export const preFormat: AutoformatBlockRule['preFormat'] = (editor) => unwrapList(editor)

export const format = (editor: PlateEditor, customFormatting: () => void) => {
  if (editor.selection) {
    const parentEntry = getParentNode(editor, editor.selection)
    if (!parentEntry) return
    const [node] = parentEntry
    if (isElement(node) && !isType(editor, node, ELEMENT_CODE_BLOCK) && !isType(editor, node, ELEMENT_CODE_LINE)) {
      customFormatting()
    }
  }
}

export const formatList = (editor: PlateEditor, elementType: string) => {
  format(editor, () =>
    toggleList(editor, {
      type: elementType,
    }),
  )
}

export const formatText = (editor: PlateEditor, text: string) => {
  format(editor, () => editor.insertText(text))
}
