import type { TMobiusBaseData } from '@/types/mobius'
import type { ClassValue } from 'clsx'

import { ELocalStorage } from '@/types/app'
import { EBlockElement, type TDocument } from '@/types/plate'
import prettify from '@liquify/prettify'
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

export function getInitialValue<T = TDocument>(mock?: boolean) {
  return (mock ? mockSlateValue : [{ children: [{ text: '' }], id: nanoid(), type: EBlockElement.PARAGRAPH }]) as T
}

export function prettier(value: string, cb: (result: string) => void) {
  prettify.format?.(value, { preserveLine: 1, wrap: 100 }).then(cb)
}
