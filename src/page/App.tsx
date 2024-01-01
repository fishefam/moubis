import { Layout } from '@/components/Layout'
import { useRef } from 'react'

import { Footer } from './components/Footer'
import { MainArea } from './components/MainArea'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { RootContextProvider } from './contexts/Root'
import { getData, normalizeData, prepareData } from './lib/data'

const RAW_EDITOR_DATA = normalizeData(getData())

export default function App() {
  const { current: editorData } = useRef(prepareData(RAW_EDITOR_DATA))

  console.log('App Render')
  return (
    <RootContextProvider>
      <Layout
        bottom={<Footer />}
        left={<Sidebar />}
        main={<MainArea editorData={editorData} />}
        top={<Navbar />}
      />
    </RootContextProvider>
  )
}
