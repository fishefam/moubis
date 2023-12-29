import { MathJaxContext } from 'better-react-mathjax'

import { getExtensionBaseUrl } from './lib/util'

export default function App() {
  return (
    <MathJaxContext
      config={{ startup: { typeset: false } }}
      hideUntilTypeset='every'
      src={`${getExtensionBaseUrl()}assets/tex-mml-chtml.js`}
    >
      <div className='p-10'></div>
    </MathJaxContext>
  )
}
