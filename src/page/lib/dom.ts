import { toArray } from './util'

type CreateElementOptions<T> = {
  attributes?: Array<[string, string]>
  classnames?: string[]
  innerHtml?: string
  parent?: Element | string
  tag: T
  text?: string
}

export function selectElement(selector: string) {
  return document.querySelector(selector)
}

export function createElement<T extends keyof HTMLElementTagNameMap>(options: CreateElementOptions<T>) {
  const { attributes, classnames, innerHtml, parent, tag, text } = options
  const element = document.createElement(tag)
  if (innerHtml) element.innerHTML = innerHtml
  if (!innerHtml && text) element.textContent = text
  if (attributes)
    attributes.forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
  if (classnames) element.className = classnames.join(' ')
  if (typeof parent === 'string') document.querySelector(parent)?.appendChild(element)
  if (parent instanceof Element) parent.appendChild(element)
  return element
}

export function namedNodeMapToObject<T>(namedNodeMap: NamedNodeMap) {
  const obj: Record<string, string> = {}
  for (const { name, value } of toArray(namedNodeMap)) obj[name] = value
  return obj as T
}
