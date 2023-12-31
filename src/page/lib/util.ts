import type { TMobiusBaseData } from '@/types/mobius'
import type { TValue } from '@/types/plate'
import type { ClassValue } from 'clsx'

import { ELocalStorage } from '@/types/app'
import { EBlockElement, type TDocument } from '@/types/plate'
import prettify from '@liquify/prettify'
import { createPlateEditor, serializeHtml } from '@udecode/plate'
import { clsx } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

import { initialValue as mockSlateValue } from './mock'
import { plugins } from './plate/plugins'

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

export function getInitialValue<T = TDocument>(mock?: boolean) {
  if (mock) return mockSlateValue as T

  const emptyNode = [{ children: [{ text: '' }], id: nanoid(), type: EBlockElement.PARAGRAPH }]
  return emptyNode as T
}

export function getInitialMockValue<T = TDocument>() {
  return mockSlateValue as T
}

export function prettier(value: string, cb: (result: string) => void) {
  prettify.format?.(value, { preserveLine: 1, wrap: 100 }).then(cb)
}

export function prettierSync(value: string) {
  return prettify.formatSync?.(value, { preserveLine: 1, wrap: 100 }) ?? ''
}

export function serializeFragment(fragment: TDocument | TValue, plate = createPlateEditor({ plugins }), format = true) {
  const html = serializeHtml(plate, { nodes: fragment })
  return format ? prettierSync(html) : html
}
