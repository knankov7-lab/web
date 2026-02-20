import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TimerApp from './TimerApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TimerApp />
  </StrictMode>,
)
