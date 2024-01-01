import type { TContextData } from '@/contexts/Editor'
import type { TFinalTextDataProps, TMobiusBaseData } from '@/types/data'
import type { LanguageNames } from '@liquify/prettify'
import type { Extension } from '@uiw/react-codemirror'
import type { ClassValue } from 'clsx'

import { ELocalStorage } from '@/types/app'
import { createPlateEditor, deserializeHTML, EBlockElement, type TDocument } from '@/types/plate'
import prettify from '@liquify/prettify'
import { serializeHtml } from '@udecode/plate'
import { langs } from '@uiw/codemirror-extensions-langs'
import { EditorView } from '@uiw/react-codemirror'
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

export function processData(data: string): TContextData {
  const html = extractHTML(data, 'html')
  const css = extractHTML(data, 'css')
  const script = extractHTML(data, 'script')
  return {
    code: {
      css: { editor: new EditorView(), value: prettierSync(css, 'css') },
      html: { editor: new EditorView(), value: prettierSync(html, 'html') },
      js: { editor: new EditorView(), value: prettierSync(script, 'javascript') },
    },
    plate: {
      editor: createPlateEditor({ id: nanoid(), plugins }),
      value: deserializeHTML(html.length ? html : '<p></p>'),
    },
  }
}

export function extractHTML(html: string, type: 'css' | 'html' | 'javascript') {
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

export function prettierSync(value: string, language: LanguageNames) {
  return prettify.formatSync?.(value, { language, preserveLine: 1, wrap: 100 }) ?? ''
}

export function serializeFragment(fragment: TDocument, plate = createPlateEditor({ plugins }), format = true) {
  const html = serializeHtml(plate, { nodes: fragment as any }) as any
  return format ? prettierSync(html) : html
}

export function getCodemirrorLangExtension(lang: keyof TFinalTextDataProps['code']): Extension {
  return lang === 'html' ? langs.html() : lang === 'css' ? langs.css() : langs.javascript()
}
