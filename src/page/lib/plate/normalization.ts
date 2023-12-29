import { EBlockElement, EVoidElement } from '@/types/plate'

/**
 * This module is for the normalization of initial Mobius documents to Plate.
 * For copy and paste during editing in the Plate editor, it uses Plate's
 * own normalization functions.
 *
 * Essentially, these are two separate normalization modules for different use cases.
 *
 * Currently this module is not complete and so is not ready for use in production.
 * Therefore, the entire extension should only be engineered to work with new Mobius
 * documents for now.
 */

const PARAGRAPH_NODENAMES = ['p', 'div']
const DIVIDER_NODENAMES = ['hr']

type BaseDoc = {
  attributes?: Record<string, string>
  text?: string
  type?: string
}

export function normalizeTypes(
  doc: (BaseDoc & {
    children?: BaseDoc[]
  })[],
) {
  return doc.map(({ children, type, ...rest }, i) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = type ? { type, ...rest } : { ...rest }

    if (type && PARAGRAPH_NODENAMES.includes(type)) result.type = EBlockElement.PARAGRAPH
    if (type && DIVIDER_NODENAMES.includes(type)) result.type = EVoidElement.DIVIDER

    if (children && children.length) {
      doc[i].children = normalizeTypes(children)
      result.children = doc[i].children
    }

    return result
  })
}
