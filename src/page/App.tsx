import type { PlateEditor } from '@udecode/plate'

import { TextEditor } from '@/components/text-editor'
import { plugins } from '@/lib/plate/plugins'
import { getExtensionBaseUrl, nanoid } from '@/lib/util'
import { createPlateEditor } from '@udecode/plate'
import { MathJaxContext } from 'better-react-mathjax'
import { createContext } from 'react'

import type { TDocument } from './types/plate'

const TEXT_EDITOR = createPlateEditor({ id: nanoid(), plugins: plugins }) as unknown as PlateEditor<TDocument>

export const AppContext = createContext<{ textEditor: PlateEditor<TDocument> }>({ textEditor: TEXT_EDITOR })

export default function App() {
  return (
    <AppContext.Provider value={{ textEditor: TEXT_EDITOR }}>
      <MathJaxContext
        config={{ startup: { typeset: false } }}
        hideUntilTypeset='every'
        src={`${getExtensionBaseUrl()}assets/tex-mml-chtml.js`}
      >
        <div className='p-10'>
          <TextEditor />
        </div>
      </MathJaxContext>
    </AppContext.Provider>
  )
}
