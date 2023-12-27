import { TextEditor } from '@/components/text-editor'
import { getExtensionBaseUrl } from '@/lib/utils'
import { MathJaxContext } from 'better-react-mathjax'
import { createContext } from 'react'

export const AppContext = createContext({})

export default function App() {
  return (
    <AppContext.Provider value={{}}>
      <MathJaxContext
        config={{ startup: { typeset: false } }}
        hideUntilTypeset='first'
        src={`${getExtensionBaseUrl()}assets/tex-mml-chtml.js`}
      >
        <div className='p-10'>
          <TextEditor />
        </div>
      </MathJaxContext>
    </AppContext.Provider>
  )
}
