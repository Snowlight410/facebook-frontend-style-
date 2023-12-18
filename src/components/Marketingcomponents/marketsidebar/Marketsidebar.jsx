import React from 'react'
import MarketingsidebarGroup from './sidebar/MarketingsidebarGroup'
import Icons from '../../../icons/iconslist'
const Marketetsidebar = () => {
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
        <div className='border-b-[1px] border-[#3a3b3c] pb-2'>
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"}/>
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"}/>
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"}/>
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"} />
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"} />
        <button className='buttonColor w-[90%] h-[36px] rounded-lg opacity-50 block  mx-auto' >+ Create new listing </button>
        </div>
        <div  className='border-b-[1px] border-[#3a3b3c] py-2'>
        <h2 className='text-white text-lg mt-2 font-bold'> filters</h2>
        <p className='text-blue-700'>Lahore , pakistan ,With in 65 kilometter </p>
        </div>
        <div className='border-b-[1px] border-[#3a3b3c] py-1'>
        <h2 className='text-white  text-lg mt-2 font-bold'> category</h2>
        <div className=''>
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"}/>
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"}/>
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"}/>
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"} />
        <MarketingsidebarGroup Icons={Icons.video} name={"Home"} />
        </div>
        </div>
    </div>
  )
}

export default Marketetsidebar