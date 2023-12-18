import React from 'react'
import CardFriend from './rightside/CardFriend'

const RightFriend = () => {
  return (
    <div>
      <div className='pb-7 border-b-[1px] border-[#3a3b3c]'>
        <div className='fic justify-between p-5 '><h2 className='text-2xl font-bold'>Friend Requirest</h2><button className='text-[#0866ff]'>See all</button></div>
        <div className="grid grid-cols-4  gap-3 w-[95%] mr-auto ">
     <CardFriend/>
     <CardFriend/>
</div>
      </div>
      <div className='pb-7 border-[#3a3b3c]'>
        <div className='fic justify-between p-5 '><h2 className='text-2xl font-bold'>Friend Requirest</h2><button className='text-[#0866ff]'>See all</button></div>
   <div className="grid grid-cols-4  gap-3 w-[95%] mr-auto ">
     <CardFriend/>
     <CardFriend/>
     <CardFriend/>
     <CardFriend/>
     <CardFriend/>
</div>
      </div>
    </div>
  )
}

export default RightFriend