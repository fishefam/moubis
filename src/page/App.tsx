import { CodeEditor } from './components/CodeEditor'
import { PlateEditor } from './components/PlateEditor'
import RootContextProvider from './Context'

export default function App() {
  return (
    <RootContextProvider>
      <div className='p-10'>
        <PlateEditor />
        <CodeEditor />
      </div>
    </RootContextProvider>
  )
}
