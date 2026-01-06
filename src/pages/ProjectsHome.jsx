// src/pages/ProjectsHome.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import bkImage1 from '../assets/bk-image-1.png'
import noiseTexture from '../assets/noise-texture.png'
import projectImage1 from '../assets/projects-image-1.png'
import projectImage2 from '../assets/projects-image-2.png'
import projectImage3 from '../assets/projects-image-3.png'
import projectImage4 from '../assets/projects-image-4.png'
import projectImage5 from '../assets/projects-image-5.png'

// 피그마 디자인 기준: 1728x1114 (데스크탑)
const DESIGN_WIDTH = 1728
const DESIGN_HEIGHT = 1114

// 무한 마퀴 텍스트 컴포넌트
export const ProjectsShowcaseSection = ({ scale }) => {
  const marqueeText = 'OUR PROJECTS - EXPLORE'
  const marqueeItems = [marqueeText, marqueeText, marqueeText]

  const fontSize = 220 * scale
  const lineHeight = 281 * scale
  const topPosition = 120 * scale // 위로 올림 (기존 190에서 120으로)
  const height = 293 * scale

  return (
    <section
      className="absolute left-0 w-full overflow-hidden"
      style={{
        top: `${topPosition}px`,
        height: `${height}px`,
      }}
      aria-label="Projects showcase marquee"
    >
      <div className="flex animate-marquee-slow whitespace-nowrap" style={{ width: 'max-content' }}>
        {marqueeItems.map((text, index) => (
          <span
            key={index}
            className="inline-block px-4 md:px-16 text-white"
            style={{
              fontFamily: "'Space Grotesk', Helvetica, sans-serif",
              fontSize: `${fontSize}px`,
              lineHeight: `${lineHeight}px`,
              textShadow: '0px 4px 25px rgba(229, 50, 15, 0.5)',
              fontWeight: 'normal',
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}

export default function ProjectsHome() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scale, setScale] = useState(1)

  // 화면 크기에 따라 스케일 계산 (데스크탑/노트북만)
  useEffect(() => {
    const calculateLayout = () => {
      const windowWidth = window.innerWidth
      const height = window.innerHeight
      const baseWidth = 1728
      const baseHeight = 1114
      const widthRatio = windowWidth / baseWidth
      const heightRatio = height / baseHeight
      // 높이 기준으로 스케일하되, 최소 너비는 유지
      const newScale = Math.min(widthRatio, heightRatio * 0.9)
      setScale(newScale)
    }

    calculateLayout()
    window.addEventListener('resize', calculateLayout)
    return () => window.removeEventListener('resize', calculateLayout)
  }, [])

  const projects = [
    { id: 1, image: projectImage1, title: 'KW-VIZER', desc: '학사정보 기반 AI 진로 상담 챗봇' },
    { id: 2, image: projectImage2, title: 'Project 2', desc: '프로젝트 설명' },
    { id: 3, image: projectImage3, title: 'Project 3', desc: '프로젝트 설명' },
    { id: 4, image: projectImage4, title: 'Project 4', desc: '프로젝트 설명' },
    { id: 5, image: projectImage5, title: 'Project 5', desc: '프로젝트 설명' },
  ]

  const handleNext = () => {
    if (currentIndex < projects.length - 3) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // 데스크탑 기준 위치 계산 (위로 이동하여 footer와 겹치지 않게)
  const cardWidth = 545 * scale
  const cardHeight = 364 * scale
  const cardGap = 48 * scale
  const firstCardLeft = `${(437 + 200 + 100) * scale}px` // 우측으로 300px 이동 (200 + 100)
  // OUR PROJECTS 위치 변경 (120) + 높이(293) + 간격(92)에서 간격을 줄여서 위로 이동
  const firstCardTop = (120 + 293 + 60 - 200 + 120) * scale // 하단으로 120px 이동
  const worksLeftValue = (73 + 30 + 50 + 30 + 20 + 20) * scale // Works 텍스트의 left 값 (버튼들과 공유)
  const worksLeft = `${worksLeftValue}px`
  const worksTop = (626 - 50 - 8) * scale // 50px 위로 이동 + 상단으로 8px 추가 이동
  const worksTextLeftValue = worksLeftValue + 5 * scale // Works 텍스트만 우측으로 5px 추가 이동
  const buttonSize = 100 * scale // 100x100으로 변경
  const leftButtonLeftValue = worksLeftValue // Works의 W 아래에 위치하도록 (Works와 동일한 left 값)
  const leftButtonLeft = `${leftButtonLeftValue}px`
  const leftButtonTop = (710 - 50) * scale // 50px 위로 이동
  const buttonGap = 20 * scale // 버튼 간격
  const rightButtonLeftValue = leftButtonLeftValue + buttonSize + buttonGap // < 화살표 오른쪽에 나란히
  const rightButtonLeft = `${rightButtonLeftValue}px`
  const rightButtonTop = (710 - 50) * scale // 50px 위로 이동
  const moreButtonLeftValue = leftButtonLeftValue // < 화살표 아래에 위치하도록
  const moreButtonLeft = `${moreButtonLeftValue}px`
  const moreButtonTop = (838 - 50) * scale // 50px 위로 이동

  // 데스크탑 레이아웃만
  return (
    <div
      className="bg-[#1A1A1A] text-white font-sans relative"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Header />

      <main className="relative h-full pt-20" style={{ height: 'calc(100vh - 80px)' }}>
        {/* 배경 이미지 - 화면 최하단에 고정 */}
        <div
          className="fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bkImage1})`,
            backgroundSize: '100% auto',
            backgroundPosition: 'center bottom',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            minHeight: '400px',
            zIndex: 0,
          }}
        />

        {/* 배경 노이즈 텍스처 - 화면 최하단에 딱 맞게 배치 */}
        <div
          className="fixed opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url(${noiseTexture})`,
            backgroundRepeat: 'repeat',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />

        <div className="relative z-10" style={{ minHeight: 'calc(100vh - 80px)' }}>

          {/* 무한 마퀴 텍스트 */}
          <ProjectsShowcaseSection scale={scale} />

          {/* 컨텐츠 영역 - 화면 전체 너비 사용 */}
          <div className="w-full relative" style={{ minHeight: 'calc(100vh - 400px)', paddingTop: `${(190 + 293 + 92) * scale}px` }}>
            <div className="w-full relative" style={{ paddingLeft: 'max(1rem, calc((100vw - 1280px) / 2))', paddingRight: 'max(1rem, calc((100vw - 1280px) / 2))' }}>
              {/* Works 텍스트 */}
              <h3
                className="absolute font-bold text-white"
                style={{
                  fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                  fontSize: `${60 * scale}px`,
                  lineHeight: `${76 * scale}px`,
                  left: `${worksTextLeftValue}px`, // Works 텍스트만 우측으로 5px 추가 이동
                  top: `${(626 - 190 - 293 - 92 - 8) * scale}px`, // 상단으로 8px 추가 이동
                  width: `${180 * scale}px`,
                  height: `${76 * scale}px`,
                }}
              >
                Works
              </h3>

              {/* 좌측 화살표 버튼 */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute rounded-full border transition-opacity disabled:opacity-50 active:opacity-70 flex items-center justify-center focus:outline-none"
                onMouseDown={(e) => {
                  e.currentTarget.style.opacity = '0.7'
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.opacity = ''
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = ''
                }}
                style={{
                  width: `${buttonSize}px`,
                  height: `${buttonSize}px`,
                  left: `${leftButtonLeftValue}px`,
                  top: `${(710 - 190 - 293 - 92) * scale}px`,
                  background: '#1A1A1A',
                  borderColor: '#D9D9D9',
                }}
                aria-label="이전 프로젝트"
              >
                <svg
                  width={`${24 * scale}`}
                  height={`${24 * scale}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* 우측 화살표 버튼 */}
              <button
                onClick={handleNext}
                disabled={currentIndex >= projects.length - 3}
                className="absolute rounded-full border transition-opacity disabled:opacity-50 active:opacity-70 flex items-center justify-center focus:outline-none"
                onMouseDown={(e) => {
                  e.currentTarget.style.opacity = '0.7'
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.opacity = ''
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = ''
                }}
                style={{
                  width: `${buttonSize}px`,
                  height: `${buttonSize}px`,
                  left: `${rightButtonLeftValue}px`,
                  top: `${(710 - 190 - 293 - 92) * scale}px`,
                  background: '#FFFFFF',
                  borderColor: '#1A1A1A',
                }}
                aria-label="다음 프로젝트"
              >
                <svg
                  width={`${24 * scale}`}
                  height={`${24 * scale}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#1A1A1A"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* More project? 버튼 */}
              <Link
                to="/projects"
                className="absolute border rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
                style={{
                  width: `${280 * scale}px`,
                  height: `${120 * scale}px`,
                  left: `${moreButtonLeftValue}px`,
                  top: `${(838 - 190 - 293 - 92) * scale}px`,
                  background: '#1A1A1A',
                  borderColor: '#FFFFFF',
                }}
              >
                <span
                  className="font-bold text-white text-center"
                  style={{
                    fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                    fontSize: `${28 * scale}px`,
                    lineHeight: `${36 * scale}px`,
                  }}
                >
                  More project?
                </span>
              </Link>

              {/* 프로젝트 카드 슬라이더 - 화면 전체 너비 기준 */}
              <div
                className="absolute overflow-hidden"
                style={{
                  left: `${(437 + 200 + 100) * scale}px`,
                  top: `${(92 - 200 + 120) * scale}px`,
                  right: `${48 * scale}px`,
                  height: `${cardHeight}px`,
                }}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (cardWidth + cardGap)}px)`,
                    width: `${(cardWidth + cardGap) * projects.length - cardGap}px`,
                  }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 relative rounded-xl border bg-[#1A1A1A]"
                      style={{
                        width: `${cardWidth}px`,
                        height: `${cardHeight}px`,
                        marginRight: index < projects.length - 1 ? `${cardGap}px` : '0',
                        borderColor: '#FFFFFF',
                        boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.15)',
                      }}
                      onMouseEnter={(e) => {
                        const numberEl = e.currentTarget.querySelector('.project-number')
                        if (numberEl) {
                          numberEl.style.color = '#FB923C'
                          numberEl.style.textShadow = '0 0 6px rgba(251, 146, 60, 0.5), 0 0 10px rgba(251, 146, 60, 0.3)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        const numberEl = e.currentTarget.querySelector('.project-number')
                        if (numberEl) {
                          numberEl.style.color = '#5E5E5E'
                          numberEl.style.textShadow = 'none'
                        }
                      }}
                    >
                      {/* 프로젝트 이미지 */}
                      <div
                        className="absolute"
                        style={{
                          width: `${165 * scale}px`, // 185 - 20 = 165
                          height: `${165 * scale}px`, // 185 - 20 = 165
                          left: `${54 * scale}px`,
                          top: `${26 * scale}px`, // 상단 여백 26px
                        }}
                      >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>

                      {/* 프로젝트 제목 */}
                      <div
                        className="absolute font-bold text-white whitespace-nowrap"
                        style={{
                          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                          fontSize: `${40 * scale}px`,
                          lineHeight: `${51 * scale}px`,
                          left: `${54 * scale}px`,
                          top: `${(26 + 165 + 20 + 22) * scale}px`, // 이미지 하단(26 + 165) + 간격(20) + 하단 이동(22)
                          width: `${(cardWidth - 54 - 78 - 20) * scale}px`, // 카드 너비 - 좌측 여백 - 번호 영역 - 간격
                          height: `${51 * scale}px`,
                        }}
                      >
                        {project.title}
                      </div>

                      {/* 프로젝트 설명 */}
                      <div
                        className="absolute font-bold text-white whitespace-nowrap"
                        style={{
                          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                          fontSize: `${24 * scale}px`,
                          lineHeight: `${31 * scale}px`,
                          left: `${54 * scale}px`,
                          top: `${(26 + 165 + 20 + 51 + 10 + 22) * scale}px`, // 제목 하단 + 간격 + 하단 이동(22)
                          width: `${(cardWidth - 54 - 78 - 20) * scale}px`, // 카드 너비 - 좌측 여백 - 번호 영역 - 간격
                          height: `${31 * scale}px`,
                        }}
                      >
                        {project.desc}
                      </div>

                      {/* 프로젝트 번호 */}
                      <div
                        className="project-number absolute font-bold flex items-center justify-center"
                        style={{
                          fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                          fontSize: `${70 * scale}px`,
                          lineHeight: `${89 * scale}px`,
                          color: '#5E5E5E',
                          right: `${36 * scale}px`, // 우측 여백 36px
                          bottom: `${22 * scale}px`, // 하단 여백 22px
                          width: `${78 * scale}px`,
                          height: `${89 * scale}px`,
                          transition: 'color 0.3s ease, text-shadow 0.3s ease',
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
