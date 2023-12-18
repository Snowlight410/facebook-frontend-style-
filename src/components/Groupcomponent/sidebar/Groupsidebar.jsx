import React from 'react'
import Groupsidebargroup from './Groupsidebargroup'
import Icons from '../../../icons/iconslist'
import CardGroupjoin from './CardGroupjoin'

const Groupsidebar = () => {
  return (
    <div className='  p-4 h-screen  mt-2 mx-auto'>
        <div className='fic justify-between '>
            <h2 className='font-bold text-2xl'>Friends</h2>
            <button className='bg-[#3a3b3c] fic justify-center rounded-full h-[35px] w-[35px] '><Icons.setting color='white' size={20}/></button>
        </div>
        <div className='h-[40px] my-3 rounded-full gap-1 sm:pl-2 fic justify-center w-[40px] sm:w-full  bg-[#3a3b3c]'>
            {/* search icons */}
            <Icons.search size={18} color='white' className='focus:hidden '/>
            <input type="text" placeholder='Search Video' className='h[40px] hidden sm:block  focus:outline-none bg-transparent text-white' />
        </div>
        <div className='border-b-[1px] mb-2 border-[#3a3b3c] pb-2'>
        <Groupsidebargroup Icons={Icons.video} name={"Your feed"} />
        <Groupsidebargroup Icons={Icons.video} name={"Discover"} />
        <Groupsidebargroup Icons={Icons.video} name={"Your groups"} />
        <button className='buttonColor w-[90%] my-4 h-[36px] rounded-lg opacity-50 block  mx-auto' >+ Create new Group </button>
        </div>
        <div className='py-1'>
            <div className='fic justify-between'>
        <h2 className='text-white  text-lg mt-2 font-bold'>Group you've joined</h2>
        <button className='text-blue-500'>See all</button>
            </div>
        <div className='mt-3'>
            <CardGroupjoin/>
            <CardGroupjoin/>
            <CardGroupjoin/>
            <CardGroupjoin/>
            <CardGroupjoin/>
            <CardGroupjoin/>
        </div>
        </div>
    </div>
  )
}

export default Groupsidebar