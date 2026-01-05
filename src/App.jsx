// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path='/' element={<Home />} />

        {/* 프로젝트 페이지 */}
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
