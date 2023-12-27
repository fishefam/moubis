import type { ClassValue } from 'clsx'

import { clsx } from 'clsx'
import { customAlphabet } from 'nanoid'
import { twMerge } from 'tailwind-merge'

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
  return localStorage.getItem('extension-base-url')
}
