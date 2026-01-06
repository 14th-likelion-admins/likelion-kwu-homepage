import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { loadFonts } from './utils/fonts'
import './index.css'
import App from './App.jsx'

// 폰트 로드
loadFonts()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
