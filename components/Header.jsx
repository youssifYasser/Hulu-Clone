import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  UserIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-between items-center m-5 h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='home' Icon={HomeIcon} />
        <HeaderItem title='trending' Icon={BoltIcon} />
        <HeaderItem title='verified' Icon={CheckBadgeIcon} />
        <HeaderItem title='collection' Icon={RectangleStackIcon} />
        <HeaderItem title='search' Icon={MagnifyingGlassIcon} />
        <HeaderItem title='account' Icon={UserIcon} />
      </div>
      <Image
        src='https://links.papareact.com/ua6'
        alt='hulu logo'
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
