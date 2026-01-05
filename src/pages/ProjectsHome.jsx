// src/pages/ProjectsHome.jsx
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectSlider from '../components/ProjectSlider'
import { Link } from 'react-router-dom'

export default function ProjectsHome() {
  return (
    <div className='bg-black text-white font-sans'>
      <Header />

      <main className='min-h-screen overflow-x-hidden pt-20'>
        {/* Hero / Projects Preview Section */}
        <section className='relative overflow-hidden py-24'>
          {/* 배경 큰 텍스트 */}
          <h2 className='hero-back-text'>OUR PROJECTS</h2>

          <div className='max-w-7xl mx-auto relative z-10'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
              {/* 좌측 */}
              <div className='flex flex-col items-start space-y-6 w-full md:w-1/4 px-4'>
                <h3 className='text-3xl font-bold'>Works</h3>
                <ProjectSlider />
                <Link to='/projects' className='more-btn mt-4'>
                  More project?
                </Link>
              </div>

              {/* 우측 슬라이더 */}
              <ProjectSlider />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
