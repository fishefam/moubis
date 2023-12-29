import type { TMobiusBaseData } from '@/types/mobius'
import type { ClassValue } from 'clsx'

import { ELocalStorage } from '@/types/app'
import { EBlockElement, type TDocument } from '@/types/plate'
import { clsx } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

import { initialValue as mockSlateValue } from './mock'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toArray<T extends Node>(iterable: ArrayLike<T> | Iterable<T> | NodeListOf<T>): T[] {
  return Array.from(iterable)
}

export function nanoid(size = 9) {
  return customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', size)()
}

export function toTitleCase(str: string) {
  return str
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
    .join(' ')
}

export function getExtensionBaseUrl() {
  return localStorage.getItem(ELocalStorage.EXT_URL)
}

export function processMobiusData(key: keyof TMobiusBaseData) {
  const html = extractHTML(getMobiusData(key) ?? '', 'html')
  const css = extractHTML(getMobiusData(key) ?? '', 'css')
  const script = extractHTML(getMobiusData(key) ?? '', 'script')
  return { css: css ?? '', html: html ?? '', script: script ?? '' }
}

export function getMobiusData(key: keyof TMobiusBaseData): string {
  return JSON.parse(localStorage.getItem(ELocalStorage.DATA)!)[key] ?? ''
}

export function extractHTML(html: string, type: 'css' | 'html' | 'script') {
  if (type === 'css') return (html.match(/(?<=<style.*>)(.|\n)*?(?=<\/style>)/g) ?? []).join(' ')

  const dom = new DOMParser().parseFromString(html, 'text/html').body
  const elements = Array.from(dom.children).filter(({ nodeName }) =>
    type === 'html' ? nodeName !== 'SCRIPT' : nodeName === 'SCRIPT',
  )
  const htmls = elements.map(({ innerHTML, outerHTML }) => (type === 'html' ? outerHTML : innerHTML))
  return type === 'html'
    ? htmls.join('').replace(/<style.*>(.|\n)*?<\/style>/g, '')
    : htmls.map((script) => `{${script}}`).join('')
}

export function getInitialValue(mock?: boolean): TDocument {
  return mock ? mockSlateValue : [{ children: [{ text: '' }], id: nanoid(), type: EBlockElement.PARAGRAPH }]
}

export function parseHTML(html: string) {
  return new DOMParser().parseFromString(html, 'text/html').body
}

export function deserialize(nodeList: NodeListOf<ChildNode>): any {
  const nodes = Array.from(nodeList as unknown as HTMLCollection).map<{
    attributes?: Record<string, string>
    children?: NodeListOf<ChildNode>
    type?: string
  }>(({ attributes, childNodes, nodeName }) =>
    attributes && attributes.length
      ? /#text/i.test(nodeName)
        ? {
            attributes: getAttributes(attributes),
            children: childNodes,
          }
        : {
            attributes: getAttributes(attributes),
            children: childNodes,
            type: nodeName.toLowerCase(),
          }
      : /#text/i.test(nodeName)
        ? {
            children: childNodes,
          }
        : {
            children: childNodes,
            type: nodeName.toLowerCase(),
          },
  )
  nodes.forEach(({ children }, i) => {
    if (!children?.length) delete nodes[i].children
  })
  nodes.forEach(({ children }, i) => {
    if (!children?.length) (nodes[i] as any).text = nodeList[i].textContent
    if (typeof nodes[i].children === 'undefined' && nodes[i].type && typeof (nodes[i] as any).text === 'string') {
      nodes[i].children = [{ text: '' }]
      delete (nodes[i] as any).text
    }
    if (children?.length) nodes[i].children = deserialize(children) as any
  })
  return nodes
}

export function getAttributes(nodeMap: NamedNodeMap) {
  const result: Record<string, string> = {}
  if (nodeMap) Array.from(nodeMap).forEach(({ name, value }) => Object.defineProperty(result, name, { value }))
  return result
}
