// src/pages/Home.jsx
import { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Core1 from '../assets/corevalue1.png'
import Core2 from '../assets/corevalue2.png'
import Core3 from '../assets/corevalue3.png'
import mainsun from '../assets/mainsun.png'

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
        } else {
          setAboutVisible(false)
        }
      })
    }, observerOptions)

    const coreValuesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCoreValuesVisible(true)
        } else {
          setCoreValuesVisible(false)
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
          {/* 배경 - 검은색 */}
          <div className='absolute inset-0 bg-black'></div>

          {/* 중앙 구체와 모든 텍스트 */}
          <div className='relative z-10 flex items-center justify-center w-full'>
            {/* 전체 컨테이너 */}
            <div
              className='relative flex items-center justify-center'
              style={{ width: '1000px', height: '600px' }}
            >
              {/* 중앙 구체 이미지 */}
              <div
                className='absolute'
                style={{
                  width: '600px',
                  height: '600px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <img src={mainsun} alt='Main Sun' className='object-cover w-full h-full' />
              </div>

              {/* FRONTEND - 버튼 */}
              <button
                className='absolute transition-all hover:text-orange-300'
                style={{ top: '100px', left: '32%' }}
              >
                <div className='text-3xl font-light tracking-wide hover:font-bold hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] transition-all'>
                  FRONTEND
                </div>
              </button>

              {/* BACKEND - 버튼 */}
              <button
                className='absolute transition-all hover:text-orange-300'
                style={{ top: '180px', left: '25%' }}
              >
                <div className='text-3xl font-light tracking-wide hover:font-bold hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] transition-all'>
                  BACKEND
                </div>
              </button>

              {/* LIKE LION - 텍스트 */}
              <div
                className='absolute text-left'
                style={{ top: '40%', left: '80px', transform: 'translateY(-50%)' }}
              >
                <div className='text-4xl font-light leading-tight tracking-wide'>LIKE</div>
                <div className='text-4xl font-light leading-tight tracking-wide'>LION</div>
              </div>

              {/* Exploding X - 텍스트 */}
              <div
                className='absolute text-center'
                style={{ top: '40%', left: '68%', transform: 'translate(-50%, -50%)' }}
              >
                <div className='text-4xl font-light tracking-wider text-white'>Exploding X</div>
              </div>

              {/* KWAG WOON UNIV - 텍스트 */}
              <div
                className='absolute text-right'
                style={{ top: '40%', right: '80px', transform: 'translateY(-50%)' }}
              >
                <div className='text-4xl font-light leading-tight tracking-wide'>KWAG</div>
                <div className='text-4xl font-light leading-tight tracking-wide'>WOON</div>
                <div className='text-4xl font-light leading-tight tracking-wide'>UNIV</div>
              </div>

              {/* UXUI DESIGN - 버튼 */}
              <button
                className='absolute transition-all hover:text-orange-300'
                style={{ bottom: '150px', left: '32%' }}
              >
                <div className='text-3xl font-light tracking-wide hover:font-bold hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] transition-all'>
                  UXUI DESIGN
                </div>
              </button>
            </div>
          </div>

          {/* 우측 하단 버튼 영역 */}
          <div className='absolute flex items-center gap-4 right-12 bottom-12'>
            {/* 지원 하기 버튼 */}
            <button className='flex items-center gap-3 px-6 py-3 text-base transition border-2 border-white rounded-sm hover:bg-white/10 group'>
              <span>지원 하기</span>
              <span className='text-xl transition-transform transform group-hover:translate-x-1 group-hover:-translate-y-1'>
                ↗
              </span>
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
                <div className='mb-2 text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] md:text-6xl'>
                  14
                </div>
                <div className='text-sm font-bold text-gray-300 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]'>
                  시작된지
                </div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] md:text-6xl'>
                  11,947
                </div>
                <div className='text-sm font-bold text-gray-300 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]'>
                  멋사 대학 출신 학생 수
                </div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] md:text-6xl'>
                  1,634
                </div>
                <div className='text-sm font-bold text-gray-300 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]'>
                  해커톤 최다 참여 인원
                </div>
              </div>
              <div className='text-center'>
                <div className='mb-2 text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(251,146,60,0.8)] md:text-6xl'>
                  97
                </div>
                <div className='text-sm font-bold text-gray-300 drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]'>
                  누적 참여 대학
                </div>
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
          className='relative px-4 py-32 bg-gradient-to-b from-gray-900 via-orange-950/30 to-black'
        >
          <div className='max-w-5xl mx-auto'>
            {/* 타이틀 */}
            <div className='mb-20 text-center'>
              <h3 className='mb-2 text-2xl font-bold tracking-wider text-orange-300 md:text-3xl'>
                CORE VALUES
              </h3>
            </div>

            <div className='grid gap-12 md:grid-cols-3 md:gap-16'>
              {/* Responsibility 이미지 */}
              <div
                className={`transition-all duration-700 flex flex-col items-center ${
                  coreValuesVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <img src={Core1} alt='Responsibility' className='w-48 h-auto mb-6 md:w-56' />
              </div>

              {/* Curiosity 이미지 */}
              <div
                className={`transition-all duration-700 flex flex-col items-center ${
                  coreValuesVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <img src={Core2} alt='Curiosity' className='w-48 h-auto mb-6 md:w-56' />
              </div>

              {/* Cooperation 이미지 */}
              <div
                className={`transition-all duration-700 flex flex-col items-center ${
                  coreValuesVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <img src={Core3} alt='Cooperation' className='w-48 h-auto mb-6 md:w-56' />
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
