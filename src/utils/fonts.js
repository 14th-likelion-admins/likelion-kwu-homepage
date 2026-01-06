/**
 * ============================================================================
 * fonts.js - 폰트 파일 import
 * ============================================================================
 * 
 * 프로젝트에서 사용하는 로컬 폰트 파일을 import합니다.
 * Vite 빌드 시 자동으로 최적화되어 배포됩니다.
 * 
 * ============================================================================
 */

// Inter 폰트
import InterRegular from '../assets/font/Inter-Regular.ttf'
import InterBold from '../assets/font/Inter-Bold.ttf'

// Space Grotesk 폰트
import SpaceGroteskRegular from '../assets/font/SpaceGrotesk-Regular.ttf'
import SpaceGroteskBold from '../assets/font/SpaceGrotesk-Bold.ttf'

// 폰트 URL을 export하여 CSS에서 사용
export const fontUrls = {
  InterRegular,
  InterBold,
  SpaceGroteskRegular,
  SpaceGroteskBold,
}

// CSS에 @font-face를 동적으로 추가하는 함수
export const loadFonts = () => {
  const style = document.createElement('style')
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      src: url(${InterRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Inter';
      src: url(${InterBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Space Grotesk';
      src: url(${SpaceGroteskRegular}) format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Space Grotesk';
      src: url(${SpaceGroteskBold}) format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
  `
  document.head.appendChild(style)
}
