/**
 * ============================================================================
 * ProjectDetailModal.jsx - 프로젝트 상세 모달 컴포넌트
 * ============================================================================
 * 
 * 프로젝트의 상세 정보를 모달 형태로 표시하는 컴포넌트입니다.
 * 
 * 사용 방법:
 * <ProjectDetailModal 
 *   project={selectedProject} 
 *   isOpen={isModalOpen} 
 *   onClose={() => setIsModalOpen(false)} 
 * />
 * 
 * ============================================================================
 */

import React, { useEffect, useRef } from 'react'

export const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project || !project.detail) return null

  const modalRef = useRef(null)

  // 모달 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden' // 배경 스크롤 방지
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // ESC 키로 닫기
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* 배경 블러 오버레이 - 클릭 시 모달 닫기 */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
        onClick={onClose}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        {/* 모달 컨텐츠 */}
        <div
          ref={modalRef}
          className="relative bg-white shadow-2xl w-full mx-4 max-h-[90vh] flex flex-col overflow-hidden"
          style={{
            maxWidth: '720px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            padding: 0,
            margin: 0,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 스크롤 가능한 컨텐츠 영역 */}
          <div 
            className="overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden" 
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {/* 프로젝트 이미지 - 최상단에 딱 붙임 */}
            <div 
              className="w-full relative" 
              style={{ 
                margin: 0,
                padding: 0,
                paddingBottom: '24px',
                lineHeight: 0,
                display: 'block',
              }}
            >
              <img
                src={project.detail.thumbnail}
                alt={project.title}
                className="w-full"
                style={{ 
                  display: 'block',
                  margin: 0,
                  padding: 0,
                  verticalAlign: 'top',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
              />
            </div>

            {/* 프로젝트 설명 */}
            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">

              {/* 프로젝트 개요 */}
              <div className="mb-8">
                <h3
                  className="text-xl font-bold mb-4 text-gray-900"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  📍 프로젝트 개요
                </h3>
                <div
                  className="text-gray-700 whitespace-pre-line leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.8',
                  }}
                >
                  {project.detail.overview.split(/\*\*(.*?)\*\*/g).map((text, index) => {
                    if (index % 2 === 1) {
                      return <strong key={index}>{text}</strong>
                    }
                    return <span key={index}>{text}</span>
                  })}
                </div>
              </div>

              {/* 주요 기능 */}
              <div className="mb-8">
                <h3
                  className="text-xl font-bold mb-4 text-gray-900"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  📍 주요 기능
                </h3>
                <ul className="list-none space-y-2">
                  {project.detail.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-700 flex items-start"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px',
                        lineHeight: '1.8',
                      }}
                    >
                      <span className="mr-2">-</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetailModal
