import Image from 'next/image'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import { forwardRef, useState } from 'react'

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
  const [showOverview, setShowOverview] = useState(false)
  const base_url = 'https://image.tmdb.org/t/p/original'

  return (
    <div
      ref={ref}
      className='3xl:max-w-lg group p-2 cursor-pointer sm:transition-transform sm:duration-200 sm:ease-out sm:hover:scale-105 hover:z-50 active:pointer-events-none sm:active:pointer-events-auto'
    >
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
        <p className={!showOverview && 'whitespace-nowrap'}>
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
        </p>

        <h2 className='mt-1 text-white  text-2xl font-medium'>
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
})

export default Thumbnail
