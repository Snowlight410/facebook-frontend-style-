import React from 'react'
const MarketingsidebarGroup = ({Icons ,name}) => {
  return (
    
    <div className='fic rounded-lg p-3 mt-3 h-[52px] hover:bg-[#686868] justify-between'>
        <div className='fic gap-2'>
            <div className='w-[35px] h-[35px] secondcolor rounded-full fij' >
             <Icons size={18}  color='white'/>
            </div>
            <h1 className='font-bold text-lg'>{name}</h1>
        </div>
    
        </div>
  )
}

export default MarketingsidebarGroup