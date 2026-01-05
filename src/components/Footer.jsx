// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className='border-t border-gray-700 py-8'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='text-sm text-gray-500'>© 2025 LIKELION KWUNIV</p>

        <div className='flex items-center gap-6 text-gray-500 text-sm'>
          <a href='#' className='hover:text-orange-400 transition'>
            Contact us!
          </a>
          <a href='#' className='hover:text-orange-400 transition text-lg'>
            🏠
          </a>
          <a href='#' className='hover:text-orange-400 transition text-lg'>
            ✉️
          </a>
          <a href='#' className='hover:text-orange-400 transition text-lg'>
            📷
          </a>
        </div>
      </div>
    </footer>
  )
}
