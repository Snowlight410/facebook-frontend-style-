import React from 'react'

const Contactpic = ({name}) => {
  return (
    <div className='fic gap-2 my-1'>
         <img className='w-[40px] h-[40px] rounded-full'  src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h4>{name}</h4>
      </div>
  )
}

export default Contactpic