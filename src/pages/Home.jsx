// src/pages/Home.jsx
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-black text-white font-sans'>
      <Header />

      <main className='min-h-screen pt-20'>
        {/* Hero Section - 중앙 3D 구체 */}
        <section className='relative h-screen flex items-center justify-center overflow-hidden'>
          {/* 배경 그라디언트 효과 */}
          <div className='absolute inset-0 bg-gradient-radial from-orange-900/20 via-black to-black' />

          {/* 중앙 구체 영역 */}
          <div className='relative z-10 flex items-center justify-center'>
            {/* 구체 이미지 또는 CSS로 구현 */}
            <div className='relative w-80 h-80 md:w-96 md:h-96'>
              {/* 오렌지 구체 */}
              <div className='absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 shadow-2xl shadow-orange-500/50 animate-pulse-slow' />

              {/* 주변 텍스트들 */}
              <div className='absolute -top-20 left-1/2 -translate-x-1/2 text-sm font-light opacity-80'>
                FRONTEND
              </div>
              <div className='absolute -bottom-20 left-1/2 -translate-x-1/2 text-sm font-light opacity-80'>
                BACKEND
              </div>
              <div className='absolute top-1/2 -left-32 -translate-y-1/2 text-sm font-light opacity-80'>
                <div>LIKE</div>
                <div>LION</div>
              </div>
              <div className='absolute top-1/2 -right-32 -translate-y-1/2 text-sm font-light opacity-80'>
                <div>KWANG</div>
                <div>WOON</div>
                <div>UNIV</div>
              </div>

              {/* 중앙 텍스트 */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-xs opacity-60 mb-1'>Expanding X</div>
                  <div className='text-sm font-medium'>UX/UI DESIGN</div>
                </div>
              </div>
            </div>
          </div>

          {/* 우측 하단 더보기 버튼 */}
          <div className='absolute right-8 bottom-8'>
            <button className='flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full hover:bg-gray-800 transition'>
              <span className='text-sm'>더보기</span>
              <span className='text-orange-400'>→</span>
            </button>
          </div>
        </section>

        {/* ABOUT Section */}
        <section className='relative py-32 px-4' id='about'>
          <div className='max-w-7xl mx-auto'>
            {/* 배경 텍스트 */}
            <div className='absolute inset-0 flex items-start justify-center pt-20'>
              <h2 className='text-7xl md:text-9xl font-bold text-white/5 select-none'>ABOUT</h2>
            </div>

            {/* 내용 */}
            <div className='relative z-10 text-center space-y-16'>
              {/* 통계 */}
              <div className='flex justify-center gap-16 flex-wrap'>
                <div>
                  <div className='text-5xl font-bold text-orange-400'>13</div>
                  <div className='text-sm text-gray-400 mt-2'>YEARS</div>
                </div>
                <div>
                  <div className='text-5xl font-bold text-orange-400'>11,947</div>
                  <div className='text-sm text-gray-400 mt-2'>광운대학생회 회원 수</div>
                </div>
                <div>
                  <div className='text-5xl font-bold text-orange-400'>1,634</div>
                  <div className='text-sm text-gray-400 mt-2'>전체 프로젝트 건 수</div>
                </div>
                <div>
                  <div className='text-5xl font-bold text-orange-400'>97</div>
                  <div className='text-sm text-gray-400 mt-2'>기술 선호도</div>
                </div>
              </div>

              {/* LIKELION 타이틀 */}
              <div>
                <h3 className='text-6xl md:text-8xl font-bold tracking-wider'>LIKELION</h3>
              </div>

              {/* View more 버튼 */}
              <div>
                <button className='px-6 py-3 border border-gray-600 rounded-full hover:bg-gray-800 transition'>
                  View more →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES Section */}
        <section className='relative py-32 px-4 bg-gradient-to-b from-black via-orange-950/10 to-black'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h3 className='text-3xl font-bold mb-2'>CORE VALUES</h3>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              {/* Responsibility */}
              <div className='bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition'>
                <div className='w-20 h-20 mx-auto mb-6 flex items-center justify-center'>
                  {/* 아이콘 영역 - 삼각형 패턴 */}
                  <div className='relative w-16 h-16'>
                    <div
                      className='absolute inset-0 border-4 border-orange-400'
                      style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                    ></div>
                  </div>
                </div>
                <h4 className='text-xl font-bold text-center mb-4'>Responsibility</h4>
                <p className='text-sm text-gray-400 text-center leading-relaxed'>
                  우리가 맡은 일에 대한 책임을 다하고 약속을 지키며 신뢰를 구축합니다
                </p>
              </div>

              {/* Curiosity */}
              <div className='bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition'>
                <div className='w-20 h-20 mx-auto mb-6 flex items-center justify-center'>
                  {/* 아이콘 영역 - 원형 패턴 */}
                  <div className='relative w-16 h-16'>
                    <div className='absolute inset-0 border-4 border-orange-400 rounded-full' />
                    <div className='absolute inset-2 border-4 border-orange-400 rounded-full' />
                  </div>
                </div>
                <h4 className='text-xl font-bold text-center mb-4'>Curiosity</h4>
                <p className='text-sm text-gray-400 text-center leading-relaxed'>
                  끊임없이 궁금증을 가지고 새로운 것을 배우며 탐구하는 자세를 가집니다
                </p>
              </div>

              {/* Cooperation */}
              <div className='bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition'>
                <div className='w-20 h-20 mx-auto mb-6 flex items-center justify-center'>
                  {/* 아이콘 영역 - 사각형 패턴 */}
                  <div className='relative w-16 h-16'>
                    <div className='absolute inset-0 border-4 border-orange-400' />
                    <div className='absolute inset-2 border-4 border-orange-400' />
                  </div>
                </div>
                <h4 className='text-xl font-bold text-center mb-4'>Cooperation</h4>
                <p className='text-sm text-gray-400 text-center leading-relaxed'>
                  서로가 가진 생각을 활발하게 공유하며 함께 더 나은 결과를 만들어 갑니다
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Be the LION */}
        <section className='relative py-32 px-4'>
          <div className='max-w-4xl mx-auto text-center space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-5xl md:text-7xl font-bold'>Be the LION,</h2>
              <h2 className='text-5xl md:text-7xl font-bold'>Rule Your World!</h2>
            </div>

            <p className='text-gray-400 text-lg'>+ 멋사랑 이름까지</p>

            <div className='pt-8'>
              <button className='px-8 py-4 bg-transparent border border-gray-600 rounded-full hover:bg-gray-800 transition text-lg'>
                대표자화 →
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
