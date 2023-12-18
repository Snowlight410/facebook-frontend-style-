import React from 'react'

const Sidebar = ({title , image}) => {
  return (
    <div className='flex    h-[44px] border-white items-center hover:bg-[#3a3b3c]  hover: rounded-md'>
        <img src={image} className='m-[25px]  h-[25px]' alt="Image Name" />
        <p className='absolute left-[4rem]'>{title}</p>
            </div>
  )
}

export default Sidebar