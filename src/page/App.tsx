import { Layout } from '@/components/Layout'
import { useRef } from 'react'

import { Footer } from './components/Footer'
import { MainArea } from './components/MainArea'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { RootContextProvider } from './contexts/Root'
import {
  getRawCodeData,
  getRawTextData,
  normalizeCodeData,
  normalizeTextData,
  prepareCodeData,
  prepareTextData,
} from './lib/data'

const NORMALIZED_CODE_DATA = normalizeCodeData(getRawCodeData())
const NORMALIZED_TEXT_DATA = normalizeTextData(getRawTextData())

export default function App() {
  const { current: codeData } = useRef(prepareCodeData(NORMALIZED_CODE_DATA))
  const { current: textData } = useRef(prepareTextData(NORMALIZED_TEXT_DATA))

  return (
    <RootContextProvider>
      <Layout
        bottom={<Footer />}
        left={<Sidebar />}
        main={
          <MainArea
            codeData={codeData}
            textData={textData}
          />
        }
        top={<Navbar />}
      />
    </RootContextProvider>
  )
}
