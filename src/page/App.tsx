import { Layout } from '@/components/Layout'

import { Footer } from './components/Footer'
import { MainArea } from './components/MainArea'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

export type TData = { [key in TDataKeys]: TContextData }
const MOBIUS_DATA_KEYS: TDataKeys[] = ['algorithm', 'authorNotesEditor', 'commentEditor', 'editor']
// const MOBIUS_DATA = getData(MOBIUS_DATA_KEYS)

export default function App() {
  return (
    <Layout
      bottom={<Footer />}
      left={<Sidebar />}
      main={<MainArea />}
      top={<Navbar />}
    />
  )
}
