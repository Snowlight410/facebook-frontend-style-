import React from 'react'
import Cardforlikecommendshare from './Cardforlikecommendshare'
import Icons from '../../../icons/iconslist'
const Storybig = () => {
  return (
    <div className='w-[80%] my-5 bg-[#242626]  bg-[#3a] rounded-lg mx-auto '>
    <div className='fic gap-2 pt-2 w-[95%] mx-auto  justify-between' >
      <div className='fic gap-2 '><img className='w-[40px] h-[40px] rounded-full' src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D' alt="" />
      <div><h3>fdasfd</h3><p>sjadkfjdsa;f . <span>5h</span> <span>f</span></p></div>
      </div>
      <div className='fic gap-2'> 
      <Icons.menukebab size={15} className='rotate-[90deg] ' color='white' />
      <Icons.cross size={15} color='white' />
      </div>
    </div>
    <div className='pl-5 my-2'>
      <p>destions </p>
    </div>
    <div className=''>
      <img className='w-full h-[80vh] object-cover' src={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D%22"} alt="" />
    </div>
    <div className='fic gap-1 py-2 pl-5 border-b-[1px] border-[#3a3b3c] my-2' >
    &#x1F60A;
    &#x1F44D;
    <span>100B</span>
    </div>
    <div className='fic justify-evenly py-2 border-b-[1px] border-[#3a3b3c] '>
      <Cardforlikecommendshare name={"Like"} Icon = {Icons.like}/>
      <Cardforlikecommendshare name={"Comment"} Icon = {Icons.comment}/>
      <Cardforlikecommendshare name={"Share"} Icon = {Icons.share}/>
    </div>
  </div>
  )
}

export default Storybig