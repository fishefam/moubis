import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toArray<T extends Node>(iterable: Iterable<T> | ArrayLike<T> | NodeListOf<T>): T[] {
  return Array.from(iterable)
}
