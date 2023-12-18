import React from 'react'
import CardMarketing from './CardMarketing'
import Icons from '../../../icons/iconslist'
const RightMarketing = () => {
  return (
    <div>
    <div className='pb-7 '>
      <div className='fic justify-between p-5 '><h2 className='text-2xl font-bold'>Today picks</h2><button className='text-[#0866ff]'> Lahore 4km</button></div>
      <div className="grid grid-cols-3  gap-3 w-[95%] mr-auto ">
   <CardMarketing/>
   <CardMarketing/>
   <CardMarketing/>
   <CardMarketing/>
   <CardMarketing/>
</div>
    </div>
    {/* <div className='pb-7 border-[#3a3b3c]'>
      <div className='fic justify-between p-5 '><h2 className='text-2xl font-bold'>Friend Requirest</h2><button className='text-[#0866ff]'>See all</button></div>
 <div className="grid grid-cols-4  gap-3 w-[95%] mr-auto ">
   <CardFriend/>
   <CardFriend/>
   <CardFriend/>
   <CardFriend/>
   <CardFriend/>
</div>
    </div> */}
    </div>
  )
}

export default RightMarketing