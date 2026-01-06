// src/pages/Home.jsx
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Core1 from '../assets/corevalue1.png'
import Core2 from '../assets/corevalue2.png'
import Core3 from '../assets/corevalue3.png'

export default function Home() {
  const [aboutVisible, setAboutVisible] = useState(false)
  const [coreValuesVisible, setCoreValuesVisible] = useState(false)

  const aboutRef = useRef(null)
  const coreValuesRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px',
    }

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutVisible(true)
        }
      })
    }, observerOptions)

    const coreValuesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCoreValuesVisible(true)
        }
      })
    }, observerOptions)

    if (aboutRef.current) aboutObserver.observe(aboutRef.current)
    if (coreValuesRef.current) coreValuesObserver.observe(coreValuesRef.current)

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current)
      if (coreValuesRef.current) coreValuesObserver.unobserve(coreValuesRef.current)
    }
  }, [])

  return (
    <div className='font-sans text-white bg-black'>
      <Header />

      <main className='min-h-screen'>
        {/* Hero Section - 중앙 3D 구체 */}
        <section className='relative flex items-center justify-center h-screen overflow-hidden'>
          {/* 배경 그라디언트 효과 */}
          <div className='absolute inset-0 bg-gradient-radial from-orange-900/20 via-black to-black' />

          {/* 중앙 구체 영역 */}
          <div className='relative z-10 flex items-center justify-center'>
            <div className='relative w-80 h-80 md:w-96 md:h-96'>
              {/* 오렌지 구체 */}
              <div className='absolute inset-0 rounded-full shadow-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 shadow-orange-500/50 animate-pulse-slow' />

              {/* 주변 텍스트들 */}
              <div className='absolute text-sm font-light -translate-x-1/2 -top-20 left-1/2 opacity-80'>
                FRONTEND
              </div>
              <div className='absolute text-sm font-light -translate-x-1/2 -bottom-20 left-1/2 opacity-80'>
                BACKEND
              </div>
              <div className='absolute text-sm font-light -translate-y-1/2 top-1/2 -left-32 opacity-80'>
                <div>LIKE</div>
                <div>LION</div>
              </div>
              <div className='absolute text-sm font-light -translate-y-1/2 top-1/2 -right-32 opacity-80'>
                <div>KWANG</div>
                <div>WOON</div>
                <div>UNIV</div>
              </div>

              {/* 중앙 텍스트 */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='mb-1 text-xs opacity-60'>Expanding X</div>
                  <div className='text-sm font-medium'>UX/UI DESIGN</div>
                </div>
              </div>
            </div>
          </div>

          {/* 우측 하단 더보기 버튼 */}
          <div className='absolute right-8 bottom-8'>
            <button className='flex items-center gap-2 px-4 py-2 transition border border-gray-600 rounded-full hover:bg-gray-800'>
              <span className='text-sm'>더보기</span>
              <span className='text-orange-400'>→</span>
            </button>
          </div>
        </section>

        {/* ABOUT Section */}
        <section
          ref={aboutRef}
          className='relative px-4 py-20 bg-gradient-to-b from-black via-gray-900 to-gray-900'
          id='about'
        >
          <div className='max-w-6xl mx-auto'>
            {/* ABOUT 큰 타이틀 - 왼쪽에서 등장, 왼쪽 치우침 */}
            <div className='pl-8 mb-16 overflow-hidden text-left md:pl-16'>
              <h2
                className={`text-6xl md:text-8xl lg:text-9xl font-bold text-white transition-all duration-1000 ${
                  aboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
              >
                ABOUT
              </h2>
            </div>

            {/* 통계 - 가운데 고정 */}
            <div className='flex flex-wrap justify-center gap-16 mb-20 md:gap-24'>
              <div className='text-center'>
                <div className='mb-2 text-5xl font-bold text-orange-300 md:text-6xl'>13</div>
                <div className='text-sm text-gray-300'>시작한지</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-5xl font-bold text-orange-300 md:text-6xl'>11,947</div>
                <div className='text-sm text-gray-300'>멋사 대학 출신 학생 수</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-5xl font-bold text-orange-300 md:text-6xl'>1,634</div>
                <div className='text-sm text-gray-300'>해커톤 최다 참여 인원</div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-5xl font-bold text-orange-300 md:text-6xl'>97</div>
                <div className='text-sm text-gray-300'>누적 참여 대학</div>
              </div>
            </div>

            {/* LIKELION 타이틀 - 오른쪽에서 등장, 오른쪽 치우침 */}
            <div className='pr-8 mb-12 overflow-hidden text-right md:pr-16'>
              <h3
                className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider transition-all duration-1000 ${
                  aboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                LIKELION
              </h3>
            </div>

            {/* View more 버튼 - 아래에서 등장 */}
            <div className='flex justify-center'>
              <button
                className={`px-8 py-3 border border-gray-400 rounded-full text-sm hover:bg-gray-800 transition-all duration-1000 ${
                  aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                View more
              </button>
            </div>
          </div>
        </section>

        {/* CORE VALUES Section */}
        <section
          ref={coreValuesRef}
          className='relative px-4 py-20 bg-gradient-to-b from-gray-900 via-orange-950/30 to-black'
        >
          <div className='mx-auto max-w-7xl'>
            {/* 타이틀 */}
            <div className='mb-16 text-center'>
              <h3 className='mb-2 text-3xl font-bold text-orange-400 md:text-4xl'>CORE VALUES</h3>
            </div>

            <div className='grid gap-8 md:grid-cols-3'>
              {/* Responsibility 이미지 */}
              <div
                className={`transition-all duration-700 ${
                  coreValuesVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <img src={Core1} alt='Responsibility' className='w-full h-auto' />
              </div>

              {/* Curiosity 이미지 */}
              <div
                className={`transition-all duration-700 ${
                  coreValuesVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <img src={Core2} alt='Curiosity' className='w-full h-auto' />
              </div>

              {/* Cooperation 이미지 */}
              <div
                className={`transition-all duration-700 ${
                  coreValuesVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <img src={Core3} alt='Cooperation' className='w-full h-auto' />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Be the LION */}
        <section className='relative px-4 py-32 bg-black'>
          <div className='max-w-4xl mx-auto'>
            {/* 좌측 상단 꺾쇠 */}
            <div className='mb-8 text-left'>
              <div className='text-6xl font-bold text-orange-400 md:text-8xl'>⌜</div>
            </div>

            {/* 중앙 텍스트 */}
            <div className='mb-8 space-y-6 text-center'>
              <h2 className='text-4xl font-bold leading-tight md:text-6xl'>
                Be the LION,
                <br />
                Rule Your World!
              </h2>
              <p className='text-base text-gray-400'>+ 멋사랑 이름까지</p>
            </div>

            {/* 우측 하단 꺾쇠 */}
            <div className='mb-8 text-right'>
              <div className='text-6xl font-bold text-orange-400 md:text-8xl'>⌟</div>
            </div>

            {/* 버튼 */}
            <div className='text-center'>
              <button className='px-8 py-3 text-sm transition bg-transparent border border-gray-500 rounded hover:bg-gray-800'>
                대표 홈페이지
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
