import App from '@/App'
import '@/main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
