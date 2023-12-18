import React from 'react'

const CardFriend = () => {
  return (
<div className="w-full flex  flex-col gap-2 h-40vh bg-[#242526]  shadow-md rounded-md">
  <img src="https://source.unsplash.com/random/500x400/?nature"
       alt=""
       className="w-full h-60 rounded-md object-cover" />
  <h2 className=" pl-1  text-white font-bold">Yourdfdsf Title</h2>
  <button className="px-4 py-2 w-[90%] block  bg-[#0866ff]   mx-auto rounded-lg mt-2">Button 1</button>
  <button className="px-4 py-2 bg-[#3a3b3c] block w-[90%] mb-2 mx-auto rounded-lg mt-2 " onClick={()=>{console.log('working')}}>Button 2</button>
</div>

  )
}

export default CardFriend