import React from 'react'

const Secondstorycard = ({title,imga}) => {
  return (
    <div  className='fic gap-2'>
    <img className='w-[30px] h-[30px] rounded-full'  src={imga} alt="" />
    <p className='font-bold'>{title}</p>
      </div>
  )
}

export default Secondstorycard