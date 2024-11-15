import React from 'react'

const Contactpic = ({name,image}) => {
  return (
    <div className='fic gap-2 my-1'>
         <img className='w-[40px] h-[40px] rounded-full'  src={image} alt="" />
        <h4>{name}</h4>
      </div>
  )
}

export default Contactpic