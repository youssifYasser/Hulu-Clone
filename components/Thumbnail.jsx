import Image from 'next/image'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Thumbnail = ({ result }) => {
  const [showOverview, setShowOverview] = useState(false)
  const router = useRouter()

  if (router.query.genre === 'RomanceMovies') {
    console.log(`${result.title || result.original_name} ==> `, result)
  }
  const base_url = 'https://image.tmdb.org/t/p/original'
  return (
    <div className='3xl:max-w-lg group p-2 cursor-pointer sm:transition-transform sm:duration-200 sm:ease-in sm:hover:scale-105 hover:z-50 '>
      <Image
        src={
          `${base_url}${result.backdrop_path || result.poster_path}` ||
          `${base_url}${result.poster_path}`
        }
        alt='movie poster'
        className='object-cover'
        height={1080}
        width={1920}
      />

      <div className='p-2'>
        {showOverview ? result.overview : result.overview.slice(0, 35)}
        {showOverview || (result.overview.slice(35).length > 0 && '...')}
        {result.overview.slice(35).length > 0 && (
          <span
            className={`${
              showOverview && 'hidden'
            } underline cursor-pointer text-gray-600 ml-1`}
            onClick={() => setShowOverview(true)}
          >
            more
          </span>
        )}
        <h2 className='mt-1 text-white  text-2xl font-medium sm:font-normal sm:group-hover:font-bold sm:transition-all sm:duration-100 sm:ease-in-out'>
          {result.title || result.original_name}
        </h2>
        <p className='flex items-center sm:transition-opacity sm:duration-100 sm:ease-out sm:opacity-0 sm:group-hover:opacity-100'>
          {result.media_type && `${result.media_type}・`}{' '}
          {result.release_date || result.first_air_date} ・{' '}
          <HandThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
        </p>
      </div>
    </div>
  )
}

export default Thumbnail