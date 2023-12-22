/* import type { SlateText, SlateElement, SlateVoidHTML } from '@/types/slate'
import type { ExtendedNode, ExtendedNodeList, HtmlTextTag } from '@/types/dom'
import { isTextTag, namedNodeMapToObject } from './dom'
import { toArray } from './utils'

export function htmlToSlate(html: string) {
  const container = document.createElement('div')
  container.innerHTML = html
  return deserialize(container.childNodes)
}

function deserialize(nodeList: NodeListOf<ChildNode>) {
  return toArray(nodeList as ExtendedNodeList).map<SlateElement>(
    ({ nodeName, textContent, childNodes, attributes: attr }) => {
      const type = nodeName.toLowerCase()
      if (type === '#text') return createSlateTextElement(textContent)
      if (isTextTag(type)) return createSlateVoidElement(type, attr, childNodes)
      return createSlateElement(type as keyof HTMLElementTagNameMap, attr, childNodes)
    },
  )
}

function createSlateElement(
  nodeName: keyof HTMLElementTagNameMap,
  attributes: NamedNodeMap,
  childNodes: NodeListOf<ChildNode>,
): SlateElement {
  if (attributes.length)
    return {
      type: nodeName,
      attributes: namedNodeMapToObject(attributes),
      children: toArray(childNodes as ExtendedNodeList).map(({ nodeName, outerHTML, textContent }) => {
        const type = nodeName.toLowerCase()
        if (type === '#text') return createSlateTextElement(textContent)
        return {}
      }),
    }
  return {
    type: nodeName,
    children: toArray(childNodes as ExtendedNodeList).map(({ nodeName, outerHTML, textContent }) => {}),
  }
}

function createSlateVoidElement(
  nodeName: keyof HTMLElementTagNameMap,
  attributes: NamedNodeMap,
  childNodes: NodeListOf<ChildNode>,
): SlateElement {
  if (attributes.length)
    return {
      type: nodeName,
      isVoid: true,
      attributes: namedNodeMapToObject(attributes),
      children: toArray(childNodes as ExtendedNodeList).map(({ nodeName, outerHTML, textContent }) => {}),
    }
  return {
    type: nodeName,
    isVoid: true,
    children: toArray(childNodes as ExtendedNodeList).map(({ nodeName, outerHTML, textContent }) => {}),
  }
}

function createSlateTextElement(text: string | null): SlateElement {
  return {
    type: 'span',
    children: [createSlateText(text)],
  }
}

function createSlateText(
  text: string | null,
  options?: { bold?: boolean; italic?: boolean; underline?: boolean },
): SlateText {
  if (options)
    return {
      text: text ?? '',
      bold: options.bold,
      italic: options.italic,
      underline: options.underline,
    }
  return {
    text: text ?? '',
  }
}

function createSlateHTML(html: string): SlateVoidHTML {
  return {
    html,
    isVoid: true,
    text: '',
  }
} */

// function deserialize(nodeList: NodeListOf<ChildNode>) {
//   const result: Array<SlateElement | SlateText> = []
//   for (let i = 0; i < nodeList.length; i++) {
//     const { nodeName, attributes, textContent, childNodes } = nodeList[i] as ExtendedNode
//     if (type === '#text')
//       result[i] = { text: [8204, 160].includes(textContent?.charCodeAt(0) ?? -1) ? '&nbsp;' : textContent ?? '' }
//     const type = nodeName.toLowerCase() as '#text' | keyof HTMLElementTagNameMap
//     if (type !== '#text' && !attributes?.length) result[i] = { type, children: deserialize(childNodes) }
//     if (type !== '#text' && attributes?.length)
//       result[i] = {
//         type,
//         attributes: namedNodeMapToObject(attributes),
//         children: deserialize(childNodes),
//       }
//   }
//   return result as SlateElement[]
// }
