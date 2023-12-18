import React from 'react'
import Icons from '../../icons/iconslist'
import Homeground from './sidebar/Homeground'

const Firendsidebar = () => {
  return (
    <div className=' maincolor p-4 h-screen  mt-2 mx-auto'>
        <div className='fic justify-between '>
            <h2 className='font-bold text-2xl'>Friends</h2>
            <button className='bg-[#3a3b3c] fic justify-center rounded-full h-[35px] w-[35px] '><Icons.setting color='white' size={20}/></button>
        </div>
        <div>
      <Homeground Icons={Icons.group} Icons1={Icons.rightIndi} name="Home"/>
      <Homeground Icons={Icons.group} Icons1={Icons.rightIndi} name="Friend requrests"/>
      <Homeground Icons={Icons.group} Icons1={Icons.rightIndi} name="Suggestions"/>
      <Homeground Icons={Icons.group} Icons1={Icons.rightIndi} name="All Friends"/>
      <Homeground Icons={Icons.group} Icons1={Icons.rightIndi} name="Birthdays" showIcons={false}/>
      <Homeground Icons={Icons.group} Icons1={Icons.rightIndi} name="Custom lists"/>
        </div>
    </div>
  )
}

export default Firendsidebar