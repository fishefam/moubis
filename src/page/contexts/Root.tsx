import type { TSetState } from '@/types/app'
import type { TEditableDataKey } from '@/types/data'
import type { ReactNode } from 'react'

import { createContext, useContext, useState } from 'react'

type TProps = { children: ReactNode }

const INITIAL_CONTEXT = {
  editorType: 'editor',
  setEditorType: function () {} as TSetState<TEditableDataKey>,
}

export const RootContext = createContext(INITIAL_CONTEXT)

export function RootContextProvider({ children }: TProps) {
  const [editorType, setEditorType] = useState<TEditableDataKey>('editor')
  return <RootContext.Provider value={{ editorType, setEditorType }}>{children}</RootContext.Provider>
}

export function useRootContext() {
  return useContext(RootContext)
}
