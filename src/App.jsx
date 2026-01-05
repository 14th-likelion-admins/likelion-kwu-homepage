// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectsHome from './pages/ProjectsHome'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path='/' element={<Home />} />

        {/* 프로젝트 홈 */}
        <Route path='/projectshome' element={<ProjectsHome />} />

        {/* 프로젝트 리스트 */}
        <Route path='/projects' element={<Projects />} />

        {/*그 외 모든 경로 Home */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}
