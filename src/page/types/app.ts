import type { Dispatch, SetStateAction } from 'react'

export enum ELocalStorage {
  DATA = 'data',
  EXT_URL = 'ext-url',
}

export type TSetState<T> = Dispatch<SetStateAction<T>>
