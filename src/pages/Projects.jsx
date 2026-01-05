// src/pages/Projects.jsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className='bg-black text-white' id='top'>
      <Header />

      <main className='max-w-7xl mx-auto px-4 py-24'>
        {/* 뒤로가기 */}
        <div className='flex items-center space-x-4 mb-8'>
          <Link to='/' className='arrow-left'>
            &larr;
          </Link>
          <h2 className='text-2xl md:text-3xl font-bold'>멋쟁이사자처럼에서 진행된 프로젝트</h2>
        </div>

        {/* 검색 & 필터 */}
        <div className='flex flex-col md:flex-row gap-4 mb-8'>
          <div className='search-wrapper flex-1'>
            <input className='search-input' placeholder='프로젝트 검색' />
            <button className='clear-btn'>&times;</button>
          </div>

          <div className='flex gap-4'>
            <div className='select-wrapper'>
              <select className='select-box'>
                <option>기수</option>
              </select>
            </div>
            <div className='select-wrapper'>
              <select className='select-box'>
                <option>활동</option>
              </select>
            </div>
          </div>
        </div>

        {/* 프로젝트 카드 */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className='archive-card'>
              <div className='logo' />
              <div className='flex justify-between mb-2'>
                <span className='name'>알광당곰</span>
                <span className='tag'>APP</span>
              </div>
              <p className='desc'>프로젝트 부연 설명 한줄 소개</p>
            </div>
          ))}
        </div>

        {/* Scroll top */}
        <a href='#top' className='scroll-top'>
          ↑
        </a>
      </main>

      <Footer />
    </div>
  )
}
