import React from 'react'
import Icons from '../../icons/iconslist'
import Contactpic from './right/Contactpic'

const Rightsection = () => {
  return (
    <div className='w-[95%] mx-auto  mt-3'> 
    <div  className='border-b-[1px] border-[#3a3b3c] pb-3'>
      <div  className='fic justify-between'>
        <div className='mb-3' >
          <h3 className='text-xl font-bold'>Contacts</h3>
        </div>
        <div className='fic gap-2'>
          <Icons.search size={20} color='white' />
          <Icons.menukebab className='rotate-[90deg]' size={20} color='white' />
        </div>
      </div>
     <Contactpic name ={"dfadf"}/>
     <Contactpic name ={"dfadf"}/>
     <Contactpic name ={"dfadf"}/>
    </div>
    <div className='pt-2 ' >
      <h2 className='text-xl font-bold'>Group conversation</h2>
      <div className='fic pt-2 gap-2' >
        <button className='bg-[#3a3b3c] text-white h-[30px] w-[30px] rounded-full'>+</button>
        <p>Create Grounp</p>
      </div>
    </div>
    </div>
  )
}

export default Rightsection