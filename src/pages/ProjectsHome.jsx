// src/pages/ProjectsHome.jsx
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProjectsHome() {
  // -----------------------------
  // 슬라이더 컨트롤 컴포넌트
  // -----------------------------
  function SliderControls({ sliderRef }) {
    return (
      <div className='flex space-x-4 mb-4'>
        <button
          className='arrow-left px-3 py-1 border border-gray-600 rounded hover:bg-gray-700 transition'
          onClick={() => sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
        >
          ←
        </button>

        <button
          className='arrow-right px-3 py-1 border border-gray-600 rounded hover:bg-gray-700 transition'
          onClick={() => sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
        >
          →
        </button>
      </div>
    )
  }

  // -----------------------------
  // 프로젝트 슬라이더 컴포넌트
  // -----------------------------
  function ProjectSlider() {
    const sliderRef = useRef(null)

    return (
      <div className='flex flex-col'>
        <SliderControls sliderRef={sliderRef} />

        <div className='flex-1 w-full overflow-x-auto'>
          <div ref={sliderRef} className='flex space-x-6 pb-4'>
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className='project-card flex-shrink-0 w-60 bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-orange-500/50 transition'
              >
                <img
                  src='/assets/project.png'
                  alt='KW-Vizer'
                  className='logo mb-2 w-full h-32 object-cover rounded'
                />
                <div className='title font-bold text-lg mb-1'>KW-Vizer</div>
                <div className='desc text-sm text-gray-400 mb-1'>
                  학사정보 기반 AI 진로 상담 챗봇
                </div>
                <div className='number text-gray-500 text-xs'>{String(num).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-black text-white font-sans'>
      <Header />

      <main className='min-h-screen overflow-x-hidden pt-20'>
        {/* Hero / Projects Preview Section */}
        <section className='relative overflow-hidden py-24'>
          {/* 배경 큰 텍스트 */}
          <h2 className='hero-back-text'>OUR PROJECTS</h2>

          <div className='max-w-7xl mx-auto relative z-10'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
              {/* 좌측 */}
              <div className='flex flex-col items-start space-y-6 w-full md:w-1/4 px-4'>
                <h3 className='text-3xl font-bold'>Works</h3>
                <ProjectSlider />
                <Link to='/projects' className='more-btn mt-4 text-orange-400 hover:underline'>
                  More project?
                </Link>
              </div>

              {/* 우측 슬라이더 */}
              <div className='flex-1 px-4'>
                <ProjectSlider />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
