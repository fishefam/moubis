import type { TSetState } from '@/types/app'
import type { TCodeData, TTextData } from '@/types/data'
import type { ReactNode } from 'react'

import { getInfoRawData } from '@/lib/data'
import { createContext, useContext, useState } from 'react'

type TProps = { children: ReactNode }

const RAW_INFO_DATA = getInfoRawData()

const INITIAL_CONTEXT = {
  editorType: 'question' as keyof TCodeData | keyof TTextData,
  setEditorType: function () {} as TSetState<keyof TCodeData | keyof TTextData>,
  setTitle: function () {} as TSetState<string>,
  title: RAW_INFO_DATA.name,
}

export const RootContext = createContext(INITIAL_CONTEXT)

export function RootContextProvider({ children }: TProps) {
  const [editorType, setEditorType] = useState<keyof TCodeData | keyof TTextData>('question')
  const [title, setTitle] = useState(
    RAW_INFO_DATA.name?.length ? RAW_INFO_DATA.name : 'This is just a development title for Mobius Project',
  )
  return <RootContext.Provider value={{ editorType, setEditorType, setTitle, title }}>{children}</RootContext.Provider>
}

export function useRootContext() {
  return useContext(RootContext)
}
