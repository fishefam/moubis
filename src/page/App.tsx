import { createContext } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { PlateEditor } from './components/plate-editor'

export const AppContext = createContext({ dndBackend: HTML5Backend })

export default function App() {
  return (
    <AppContext.Provider value={{ dndBackend: HTML5Backend }}>
      <div className='p-10'>
        <PlateEditor />
      </div>
    </AppContext.Provider>
  )
}
