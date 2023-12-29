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

export function parseHTML(html: string) {
  return new DOMParser().parseFromString(html, 'text/html').body
}

/**
 *
 * @requires getAttributes Function in this module
 * @param nodeList
 * @returns
 */
export function deserialize(nodeList: NodeListOf<ChildNode>) {
  const clone = Array.from(nodeList) as (ChildNode & { attributes: NamedNodeMap })[]
  const nodes = clone.map<{
    attributes?: Record<string, string>
    children?: NodeListOf<ChildNode>
    text?: string
    type?: string
  }>(({ attributes, childNodes, nodeName, textContent }) => {
    const hasAttributes = attributes && attributes.length
    const isTextNode = /#text/i.test(nodeName)
    if (hasAttributes && !isTextNode)
      return {
        attributes: getAttributes(attributes),
        children: childNodes,
        type: nodeName.toLowerCase(),
      }
    if (!hasAttributes && !isTextNode)
      return {
        children: childNodes,
        type: nodeName.toLowerCase(),
      }
    return {
      text: textContent?.trim() ?? '',
    }
  })

  nodes.forEach(({ children }, i) => {
    if (children?.length) nodes[i].children = deserialize(children) as unknown as NodeListOf<ChildNode>
  })

  return nodes
}

export function getAttributes<T extends Record<string, string>>(nodeMap: NamedNodeMap) {
  const result = {} as T
  if (nodeMap) Array.from(nodeMap).forEach(({ name, value }) => Object.defineProperty(result, name, { value }))
  return result
}
