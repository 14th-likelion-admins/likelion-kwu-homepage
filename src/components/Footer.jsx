// src/components/Footer.jsx
import email from '../assets/email-icon.png'
import insta from '../assets/insta-icon.png'
import git from '../assets/git-icon.png'

export default function Footer() {
  return (
    <footer className='py-4'>
      <div className='flex flex-col items-center justify-between gap-4 px-4 mx-auto max-w-7xl md:flex-row'>
        <p className='text-sm font-bold text-white'>광운대 멋쟁이사자처럼</p>
        <p className='text-sm text-wihte'>© 2025 LIKELION KWUNIV</p>

        <div className='flex items-center gap-6 text-sm text-white'>
          <a href='#' className='transition hover:text-orange-400'>
            Contact us!
          </a>
          <a href='#'>
            <img src={email} alt='email' className='w-8 md:w-8' />
          </a>
          <a href='#'>
            <img src={insta} alt='email' className='w-6 h-6 md:w-6 md:h-6' />
          </a>
          <a href='#'>
            <img src={git} alt='email' className='w-6 h-6 md:w-6 md:h-6' />
          </a>
        </div>
      </div>
    </footer>
  )
}
