import { MathJaxContext } from 'better-react-mathjax'

import { CodeEditor } from './components/CodeEditor'
import { PlateEditor } from './components/PlateEditor'
import { useCodeEditor } from './hooks/codeEditor'
import { usePlateEditor } from './hooks/plateEditor'
import { getExtensionBaseUrl } from './lib/util'

export default function App() {
  const { plateContainer, plateState } = usePlateEditor()
  const { codeContainer, codeState, codeView } = useCodeEditor(plateState)

  return (
    <MathJaxContext
      config={{ startup: { typeset: false } }}
      hideUntilTypeset='every'
      src={`${getExtensionBaseUrl()}assets/tex-mml-chtml.js`}
    >
      <div className='p-10'>
        <CodeEditor
          ref={codeContainer}
          state={codeState}
          view={codeView}
        />
        <PlateEditor
          codeView={codeView}
          ref={plateContainer}
          state={plateState}
        />
      </div>
    </MathJaxContext>
  )
}
