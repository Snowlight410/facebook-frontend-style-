import React from 'react'

const CardMarketing = () => {
  return (
    <div className="w-full flex  flex-col gap-2 h-40vh bg-[#242526]  shadow-md rounded-md">
  <img src="https://source.unsplash.com/random/500x400/?nature"
       alt=""
       className="w-full h-60 rounded-md object-cover" />
  <h2 className=" pl-1  text-white font-bold">price</h2>
  <h2 className=" pl-1  text-white  ">title</h2>
  <h2 className=" pl-1  text-white text-sm ">address</h2>
</div>
  )
}

export default CardMarketing