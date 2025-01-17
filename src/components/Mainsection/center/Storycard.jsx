import React from 'react'
import Image from '../../../images/Image'

const Storycard = ({title,divStyle}) => {
  
  const imagesUrls = {
    imgf :Image.bg1,
    imgs:Image.bg2,
    imgt:Image.bg3
  }
  
  return (
    <div style={divStyle} className=' opacity-70 relative z-[100]'>
    <img className='absolute rounded-full top-3 left-3 w-[40px] h-[40px] border-blue-800 border-4'  src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className=' flex flex-col items-center justify-end  h-[100%] leading  '>
    <p className='text-white z-[10] text-sm mb-2 font-bold'>{title}</p>
    </div>
  </div>
  )
}

export default Storycard