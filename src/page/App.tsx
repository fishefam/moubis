import { MathJaxContext } from 'better-react-mathjax'
import { useState } from 'react'

import { CodeEditor } from './components/CodeEditor'
import { PlateEditor } from './components/PlateEditor'
import { usePlateEditor } from './hooks/plateEditor'
import { getExtensionBaseUrl, getInitialValue, serializeFragment } from './lib/util'

const INITIAL_PLATE_VALUE = getInitialValue(true)

export default function App() {
  const [plate] = usePlateEditor()
  const [plateValue] = useState(INITIAL_PLATE_VALUE)
  const [codeValue, setCodeValue] = useState(serializeFragment(INITIAL_PLATE_VALUE))

  console.log(INITIAL_PLATE_VALUE)
  return (
    <MathJaxContext
      config={{ startup: { typeset: false } }}
      hideUntilTypeset='every'
      src={`${getExtensionBaseUrl()}assets/tex-mml-chtml.js`}
    >
      <div className='p-10'>
        <PlateEditor
          setCodeValue={setCodeValue}
          state={plate}
          value={plateValue}
        />
        <CodeEditor
          plate={plate}
          value={codeValue}
        />
      </div>
    </MathJaxContext>
  )
}
