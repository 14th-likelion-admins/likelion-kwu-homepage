/**
 * ============================================================================
 * projectsData.js - 프로젝트 데이터 관리
 * ============================================================================
 * 
 * 이 파일은 프로젝트의 상세 정보를 관리하고, 프로젝트 데이터를 생성합니다.
 * 
 * 새로운 프로젝트 추가 방법:
 * 1. 기본 정보만 필요한 경우: projectImages.js에 이미지만 추가하면 자동 생성됨
 * 2. 상세 정보가 필요한 경우: 아래 predefinedProjects 배열에 프로젝트 객체 추가
 * 
 * ============================================================================
 */

import { projectImages, getProjectImage, getThumbnailImageSync } from './projectImages'

/**
 * 모든 프로젝트 데이터를 생성하는 함수
 * 
 * 동작 방식:
 * 1. predefinedProjects 배열에 상세 정보가 있는 프로젝트를 먼저 추가
 * 2. projectImages 맵에 있는 모든 프로젝트 id를 가져와서 기본 프로젝트 생성
 * 3. 프로젝트를 id 내림차순으로 정렬 (숫자가 큰 것 = 최신 프로젝트)
 * 
 * 새로운 프로젝트 추가 시:
 * - 상세 정보가 필요한 경우: predefinedProjects 배열에 프로젝트 객체 추가
 * - 기본 정보만 필요한 경우: projectImages.js에만 추가하면 자동 생성됨
 * 
 * @returns {Array} 프로젝트 배열 (id 내림차순 정렬)
 */
// 프로젝트 데이터 캐시 (성능 최적화 및 일관성 보장)
let cachedProjects = null

export const getAllProjects = () => {
  // 캐시된 프로젝트가 있으면 재사용 (일관성 보장)
  if (cachedProjects) {
    return cachedProjects
  }

  // ============================================================================
  // 프로젝트를 Map으로 관리하여 중복 방지 및 우선순위 보장
  // ============================================================================
  // Map을 사용하면 같은 ID의 프로젝트가 여러 번 추가되어도 마지막 값만 유지됩니다.
  // 먼저 정의된 프로젝트(상세 정보가 있는 프로젝트)가 우선 적용됩니다.
  // ============================================================================
  const projectsMap = new Map()

  // ============================================================================
  // 상세 정보가 있는 프로젝트 목록 (우선 적용)
  // ============================================================================
  // 특별한 상세 정보(개요, 기능 등)가 필요한 프로젝트는 여기에 추가
  // 이 프로젝트들은 나중에 자동 생성 코드에 의해 덮어씌워지지 않습니다
  // ============================================================================
  const predefinedProjects = [
    {
      id: 1,
      title: '리본(RE:born)',
      tag: 'APP',
      description: 'AI 유기동물 맞춤 추천 서비스',
      image: getProjectImage(1),
      thumbnail: getThumbnailImageSync(1),
      detail: {
        thumbnail: getProjectImage(1),
        overview: `**RE:born**은 사용자의 관심사와 행동 패턴을 학습하여 개인에게 가장 적합한 유기동물을 추천하는 **AI 기반 매칭 서비스**입니다.

AI 추천과 정보 통합을 통해 유기동물 입양 과정을 보다 쉽고, 신뢰할 수 있게 만드는 것을 목표로 합니다.

매년 약 10만 마리 이상의 유기동물이 발생하지만, 입양 희망자는 자신에게 맞는 동물을 찾기 어렵고 보호소별로 정보가 분산되어 있어 접근성이 낮다는 문제가 존재합니다.

본 프로젝트는 **공공데이터 포털의 유기동물 데이터를 통합**하고, 사용자의 조회·관심·선호 행동을 기반으로 **임베딩 벡터를 생성**하여 개인화된 추천 결과를 제공합니다.

또한 입양 과정에서 자주 발생하는 궁금증을 해결하기 위해 **RAG 기반 AI 챗봇**을 도입하여 입양 절차, 질병, 보호소 관련 질문에 대한 자연어 응답을 제공합니다.`,
        features: [
          '사용자 행동(조회, 관심 기록) 기반 AI 추천 시스템',
          '임베딩 벡터를 활용한 개인화 유기동물 매칭',
          '지역 / 품종 / 나이 조건별 유기동물 검색',
          '전국 보호소 유기동물 정보 통합 조회',
          'RAG 기반 입양 정보 AI 챗봇',
          '카카오 OAuth 2.0 소셜 로그인',
          'JWT 기반 인증·인가 처리',
          'REST API 기반 서비스 구조',
        ],
      },
    },
    {
      id: 2,
      title: 'SafeScan',
      tag: 'APP',
      description: 'AI 디지털 범죄 사전 탐지 플랫폼',
      image: getProjectImage(2),
      thumbnail: getThumbnailImageSync(2),
      detail: {
        thumbnail: getProjectImage(2),
        overview: '프로젝트 개요가 여기에 들어갑니다.',
        features: ['주요 기능 1', '주요 기능 2', '주요 기능 3'],
      },
    },
    {
      id: 3,
      title: '살펴',
      tag: 'APP',
      description: '주민 참여 안전 지도 서비스',
      image: getProjectImage(3),
      thumbnail: getThumbnailImageSync(3),
      detail: {
        thumbnail: getProjectImage(3),
        overview: '프로젝트 개요가 여기에 들어갑니다.',
        features: ['주요 기능 1', '주요 기능 2', '주요 기능 3'],
      },
    },
    {
      id: 4,
      title: '과잉제로',
      tag: 'APP',
      description: '과잉진료 분석 서비스',
      image: getProjectImage(4),
      thumbnail: getThumbnailImageSync(4),
      detail: {
        thumbnail: getProjectImage(4),
        overview: '프로젝트 개요가 여기에 들어갑니다.',
        features: ['주요 기능 1', '주요 기능 2', '주요 기능 3'],
      },
    },
    {
      id: 5,
      title: 'FeedUp',
      tag: 'APP',
      description: 'SNS 프로모션 플랫폼',
      image: getProjectImage(5),
      thumbnail: getThumbnailImageSync(5),
      detail: {
        thumbnail: getProjectImage(5),
        overview: '프로젝트 개요가 여기에 들어갑니다.',
        features: ['주요 기능 1', '주요 기능 2', '주요 기능 3'],
      },
    },
  ]

  // 먼저 정의된 프로젝트들을 Map에 추가 (우선 적용)
  for (const project of predefinedProjects) {
    projectsMap.set(project.id, project)
  }

  // ============================================================================
  // 나머지 프로젝트 자동 생성
  // ============================================================================
  // projectImages 맵에 있는 모든 프로젝트 id를 가져와서 기본 프로젝트 데이터 생성
  // 이미 Map에 있는 프로젝트(상세 정보가 있는 프로젝트)는 건너뜀
  // ============================================================================
  
  // 프로젝트 id 목록을 가져와서 내림차순 정렬 (숫자가 큰 것 = 최신 프로젝트)
  const allProjectIds = Object.keys(projectImages)
    .map(Number)
    .sort((a, b) => b - a) // 내림차순 정렬
  
  // 각 프로젝트 id에 대해 기본 프로젝트 데이터 생성
  for (const projectId of allProjectIds) {
    // 이미 Map에 있는 프로젝트(상세 정보가 있는 프로젝트)는 건너뛰기
    if (projectsMap.has(projectId)) {
      continue
    }
    
    const image = getProjectImage(projectId)
    if (image) {
      // 기본 프로젝트 데이터 생성 (상세 정보가 없는 경우에만)
      projectsMap.set(projectId, {
        id: projectId,
        title: '타이틀 미지정',
        tag: 'WEB',
        description: '프로젝트 한줄 소개',
        image: image,
        thumbnail: getThumbnailImageSync(projectId),
        detail: {
          thumbnail: image,
          overview: '프로젝트 개요가 여기에 들어갑니다.',
          features: ['주요 기능 1', '주요 기능 2', '주요 기능 3'],
        },
      })
    }
  }

  // ============================================================================
  // 프로젝트 정렬 및 반환
  // ============================================================================
  // Map의 값들을 배열로 변환하고 id 내림차순으로 정렬
  // ============================================================================
  const projects = Array.from(projectsMap.values())
  projects.sort((a, b) => b.id - a.id)

  // 캐시에 저장 (일관성 보장)
  cachedProjects = projects

  return projects
}

/**
 * 최신 프로젝트 N개를 가져오는 함수
 * 
 * ProjectsHome에서 사용되며, 숫자가 가장 큰 프로젝트 N개를 반환합니다.
 * getAllProjects()가 이미 id 내림차순으로 정렬되어 있으므로 상위 N개를 반환합니다.
 * 
 * @param {number} count - 가져올 프로젝트 개수 (기본값: 5)
 * @returns {Array} 최신 프로젝트 배열
 * 
 * 사용 예시:
 * - getLatestProjects(5) // 최신 프로젝트 5개
 * - getLatestProjects(10) // 최신 프로젝트 10개
 */
export const getLatestProjects = (count = 5) => {
  const allProjects = getAllProjects()
  // 이미 id 내림차순으로 정렬되어 있으므로 상위 count개 반환
  return allProjects.slice(0, count)
}
