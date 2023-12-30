import type { TSetState } from '@/types/app'
import type { TValue } from '@/types/plate'

import { getInitialValue } from '@/lib/util'
import { createContext, useState } from 'react'

type TContext = {
  code?: { setValue: TSetState<string>; value: string }
  plate?: { setValue: TSetState<TValue>; value: TValue }
}
type TProps = { children: any }

export const Context = createContext<TContext>({})

export function ContextProvider({ children }: TProps) {
  const INITIAL_VALUE = getInitialValue<TValue>(true)

  const [codeValue, setCodeValue] = useState(INITIAL_VALUE.code)
  const [plateValue, setPlateValue] = useState(INITIAL_VALUE.plate)

  return (
    <Context.Provider
      value={{
        code: { setValue: setCodeValue, value: codeValue },
        plate: { setValue: setPlateValue, value: plateValue },
      }}
    >
      {children}
    </Context.Provider>
  )
}
