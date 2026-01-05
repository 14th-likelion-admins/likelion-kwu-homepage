// src/components/Header.jsx
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-700'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-4'>
        {/* 로고 클릭 → 메인 */}
        <Link to='/' className='font-bold text-lg'>
          광운대 멋쟁이 사자처럼
        </Link>

        <nav className='md:flex space-x-6 text-sm'>
          <a href='#about' className='hover:text-orange-400'>
            ABOUT
          </a>
          <Link to='/projectshome' className='hover:text-orange-400'>
            PROJECT
          </Link>
          <a href='#' className='hover:text-orange-400'>
            BLOG
          </a>
          <a href='#' className='hover:text-orange-400'>
            TEAM
          </a>
          <a
            href='#'
            className='border border-orange-400 px-3 py-1 rounded-full hover:bg-orange-400 hover:text-black'
          >
            지원하기
          </a>
        </nav>
      </div>
    </header>
  )
}
