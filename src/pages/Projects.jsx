// src/pages/Projects.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import projectImage1 from '../assets/projects-image-1.png'

export default function Projects() {
  const [selectedGeneration, setSelectedGeneration] = useState('기수')
  const [selectedActivity, setSelectedActivity] = useState('활동')
  const [showGenerationDropdown, setShowGenerationDropdown] = useState(false)
  const [showActivityDropdown, setShowActivityDropdown] = useState(false)
  const [displayedProjects, setDisplayedProjects] = useState(12) // 초기 표시 개수
  const [isLoading, setIsLoading] = useState(false)
  const observerTarget = useRef(null)

  const generations = ['13TH', '14TH', '15TH']
  const activities = ['중앙해커톤', '권역별 연합해커톤', '아이디어톤']

  // 프로젝트 데이터 (13개로 제한)
  const allProjects = Array.from({ length: 13 }).map((_, i) => ({
    id: i + 1,
    title: '알콩달콩',
    tag: 'APP',
    description: '프로젝트 부연설명 한줄 소개',
    image: projectImage1,
  }))

  // 화면 너비에 따른 열 개수 계산
  const getColumns = () => {
    const width = window.innerWidth
    if (width < 768) return 1 // 모바일
    if (width < 1280) return 2 // 태블릿
    return 3 // 데스크탑
  }

  const [columns, setColumns] = useState(getColumns())

  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 무한스크롤 구현
  const loadMoreProjects = useCallback(() => {
    if (isLoading) return
    setIsLoading(true)
    // 시뮬레이션: 실제로는 API 호출
    setTimeout(() => {
      setDisplayedProjects((prev) => Math.min(prev + 12, allProjects.length))
      setIsLoading(false)
    }, 500)
  }, [isLoading, allProjects.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedProjects < allProjects.length) {
          loadMoreProjects()
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [displayedProjects, allProjects.length, loadMoreProjects])

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowGenerationDropdown(false)
        setShowActivityDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const visibleProjects = allProjects.slice(0, displayedProjects)

  return (
    <div className="bg-[#1A1A1A] text-white font-sans min-h-screen">
      <Header />

      <main className="relative pt-20 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* 제목과 뒤로가기 버튼 */}
        <div className="flex items-center gap-4 mb-8 md:mb-12 mt-8 md:mt-12">
          <Link
            to="/projectshome"
            className="flex items-center justify-center flex-shrink-0"
            style={{
              width: '24px',
              height: '24px',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h2
            className="text-lg md:text-xl lg:text-2xl font-bold m-0"
            style={{
              fontFamily: "'Space Grotesk', Helvetica, sans-serif",
              lineHeight: '1.2',
            }}
          >
            멋쟁이사자처럼에서 진행된 프로젝트
          </h2>
        </div>

        {/* 드롭다운 필터 - 첫번째 프로젝트 카드 상단 좌측 끝에 맞춤 */}
        <div className="flex flex-wrap gap-4" style={{ paddingLeft: '0', marginBottom: '23.5px', marginTop: '23px' }}>
          {/* 기수 드롭다운 */}
          <div className="relative dropdown-container">
            <button
              onClick={() => {
                setShowGenerationDropdown(!showGenerationDropdown)
                setShowActivityDropdown(false)
              }}
              className="border border-white rounded-full px-4 py-2 flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-white/10 transition-colors"
              style={{
                fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                fontSize: 'clamp(12px, 1vw, 16px)',
                fontWeight: 300,
                minWidth: '100px',
              }}
            >
              <span>{selectedGeneration}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(90deg)' }}
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {showGenerationDropdown && (
              <div className="absolute mt-2 border border-white rounded-full bg-[#1A1A1A] z-20 min-w-full shadow-lg">
                {generations.map((gen) => (
                  <button
                    key={gen}
                    onClick={() => {
                      setSelectedGeneration(gen)
                      setShowGenerationDropdown(false)
                    }}
                    className="w-full text-center px-6 py-3 md:px-8 md:py-4 hover:bg-white/10 rounded-full first:rounded-t-full last:rounded-b-full transition-colors"
                    style={{
                      fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                      fontSize: 'clamp(12px, 1vw, 16px)',
                      fontWeight: 300,
                    }}
                  >
                    {gen}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 활동 드롭다운 */}
          <div className="relative dropdown-container">
            <button
              onClick={() => {
                setShowActivityDropdown(!showActivityDropdown)
                setShowGenerationDropdown(false)
              }}
              className="border border-white rounded-full px-4 py-2 flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-white/10 transition-colors"
              style={{
                fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                fontSize: 'clamp(12px, 1vw, 16px)',
                fontWeight: 300,
                minWidth: '100px',
              }}
            >
              <span>{selectedActivity}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'rotate(90deg)' }}
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {showActivityDropdown && (
              <div className="absolute mt-2 border border-white rounded-full bg-[#1A1A1A] z-20 min-w-full shadow-lg">
                {activities.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => {
                      setSelectedActivity(activity)
                      setShowActivityDropdown(false)
                    }}
                    className="w-full text-center px-6 py-3 md:px-8 md:py-4 hover:bg-white/10 rounded-full first:rounded-t-full last:rounded-b-full transition-colors"
                    style={{
                      fontFamily: "'Space Grotesk', Helvetica, sans-serif",
                      fontSize: 'clamp(12px, 1vw, 16px)',
                      fontWeight: 300,
                    }}
                  >
                    {activity}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 프로젝트 그리드 */}
        <div
          className="grid gap-6 md:gap-8"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="border border-white/50 rounded-3xl bg-[#1A1A1A] overflow-hidden hover:border-white transition-colors"
            >
              {/* 프로젝트 이미지 컨테이너 - 좌우여백 37.5, 상단 여백 34 */}
              <div
                className="relative"
                style={{
                  paddingLeft: '37.5px',
                  paddingRight: '37.5px',
                  paddingTop: '34px',
                }}
              >
                <div
                  className="w-full border border-white rounded-3xl overflow-hidden bg-[#1A1A1A]"
                  style={{
                    aspectRatio: '375 / 211',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6 md:p-8">
                {/* 프로젝트 제목과 태그 */}
                <div className="flex items-end gap-0 mb-4">
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(20px, 2.5vw, 24px)',
                      lineHeight: '1.2',
                      fontWeight: 500,
                    }}
                  >
                    {project.title}
                  </span>
                  <span
                    className="font-bold text-white/50"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(14px, 1.8vw, 18px)',
                      lineHeight: '1.2',
                      marginLeft: '20px',
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* 프로젝트 설명 */}
                <p
                  className="text-white"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: '1.2',
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 무한스크롤 감지 요소 */}
        {displayedProjects < allProjects.length && (
          <div
            ref={observerTarget}
            className="flex justify-center items-center py-8"
          >
            {isLoading && (
              <div className="text-white/50">로딩 중...</div>
            )}
          </div>
        )}

        {/* UP 버튼 */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#5E5E5E] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity z-50"
          aria-label="맨 위로"
        >
          <div
            className="w-3 h-3 border-4 border-black"
            style={{
              borderTop: 'none',
              borderRight: 'none',
              transform: 'rotate(135deg)',
            }}
          />
        </button>
      </main>
    </div>
  )
}
