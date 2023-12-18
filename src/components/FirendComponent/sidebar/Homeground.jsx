import React from 'react'

const Homeground = ({Icons,Icons1,name,showIcons=true}) => {
  return (
    <div className='fic rounded-lg p-3 mt-3 h-[52px] hover:bg-[#3a3b3c] justify-between'>
        <div className='fic gap-2'>
          
             <Icons size={30} color='white'/>
        
            <h1 className='font-bold text-lg'>{name}</h1>
        </div>
        <div>
          {
            showIcons && 
          <Icons1 size={18} color='white'/>
          }  
        </div>
        </div>
  )
}

export default Homeground