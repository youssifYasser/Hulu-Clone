import requests from '../utils/requests'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()

  return (
    <nav className='relative'>
      <div className='flex px-10 sm:px-20 space-x-10 sm:space-x-20 whitespace-nowrap overflow-x-scroll text-lg sm:text-xl   md:text-2xl overflow-y-hidden scrollbar-thin scrollbar-thumb-[#085675] pb-5'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className='cursor-pointer transition-transform duration-100 hover:scale-110 hover:text-white active:text-red-500'
          >
            {title}
          </h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 w-1/12 h-10 bg-gradient-to-l from-[#06202A]' />
    </nav>
  )
}

export default Nav