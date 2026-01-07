// src/components/Header.jsx
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/kw-logo.png' // 로고 이미지 경로

export default function Header() {
  const [showToast, setShowToast] = useState(false)
  const navigate = useNavigate()

  const handleProjectClick = (e) => {
    try {
      if (window && window.innerWidth < 768) {
        e.preventDefault()
        navigate('/projects')
      }
    } catch (err) {
      // fallback: do nothing and allow Link to handle navigation
    }
  }

  const handleApplyClick = (e) => {
    e.preventDefault()
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <>
      <header
        className='fixed top-0 left-0 z-50 w-full backdrop-blur'
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className='flex items-center justify-between px-4 py-4 mx-auto max-w-7xl'>
          {/* 로고 클릭 → 메인 */}
          <Link to='/' className='flex items-center gap-2'>
            <img src={logo} alt='LIKELION Logo' className='w-8 h-8 md:w-10 md:h-10' />
            <span className='hidden md:inline-block text-lg font-bold md:text-xl'>광운대 멋쟁이 사자처럼</span>
          </Link>

          <nav className='flex items-center gap-6 text-sm'>
            {/* ABOUT 임시 숨김 */}
            {/* <a href='#about' className='hover:text-orange-400'>
              ABOUT
            </a> */}
            <Link to='/projectshome' onClick={handleProjectClick} className='hover:text-orange-400'>
              PROJECT
            </Link>
            <a
              href='#'
              onClick={handleApplyClick}
              className='inline-flex items-center px-3 py-1 border border-white rounded-md'
            >
              지원하기
            </a>
          </nav>
        </div>
      </header>

      {/* Toast 알림 */}
      {showToast && (
        <div
          className='fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 bg-gray-800 text-white rounded-lg shadow-2xl'
          style={{ animation: 'slideDown 0.3s ease-out' }}
        >
          <style>{`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translate(-50%, -20px);
              }
              to {
                opacity: 1;
                transform: translate(-50%, 0);
              }
            }
          `}</style>
          <p className='text-center'>지금은 모집기간이 아니에요! 모집 기간을 확인해주세요 :)</p>
        </div>
      )}
    </>
  )
}
