const HeaderItem = ({ title, Icon }) => {
  return (
    <div className='flex flex-col items-center w-12 sm:w-20 group cursor-pointer hover:text-white'>
      <Icon className='h-7 sm:h-8 mb-1 group-hover:animate-bounce' />
      <p className='tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-150'>
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
