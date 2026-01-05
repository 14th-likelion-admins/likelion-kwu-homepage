// src/components/ProjectSlider.jsx
import { useRef } from 'react'

function SliderControls({ sliderRef }) {
  return (
    <div className='flex space-x-4'>
      <button
        className='arrow-left'
        onClick={() => sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
      >
        ←
      </button>

      <button
        className='arrow-right'
        onClick={() => sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
      >
        →
      </button>
    </div>
  )
}

export default function ProjectSlider() {
  const sliderRef = useRef(null)

  return (
    <>
      {/* 좌측 버튼 */}
      <SliderControls sliderRef={sliderRef} />

      {/* 우측 슬라이더 */}
      <div className='flex-1 w-full overflow-x-auto'>
        <div ref={sliderRef} className='flex space-x-6 pb-4'>
          {[1, 2, 3].map((num) => (
            <div key={num} className='project-card flex-shrink-0'>
              <img src='/assets/project.png' alt='KW-Vizer' className='logo' />
              <div className='title'>KW-Vizer</div>
              <div className='desc'>학사정보 기반 AI 진로 상담 챗봇</div>
              <div className='number'>{String(num).padStart(2, '0')}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
