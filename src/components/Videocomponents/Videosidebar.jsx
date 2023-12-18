import React from 'react'
import Icons from '../../icons/iconslist'
import VideosidebarGroup from './sidebar/VideosidebarGroup'

const Videosidebar = () => {
  return (
    <div className=' maincolor p-4 h-screen  mt-2 mx-auto'>
        <div className='fic justify-between '>
            <h2 className='font-bold text-2xl'>Friends</h2>
            <button className='bg-[#3a3b3c] fic justify-center rounded-full h-[35px] w-[35px] '><Icons.setting color='white' size={20}/></button>
        </div>
        <div className='h-[40px] my-3 rounded-full gap-1 sm:pl-2 fic justify-center w-[40px] sm:w-full  bg-[#3a3b3c]'>
            {/* search icons */}
            <Icons.search size={18} color='white' className='focus:hidden '/>
            <input type="text" placeholder='Search Video' className='h[40px] hidden sm:block  focus:outline-none bg-transparent text-white' />
        </div>
        <div>
        <VideosidebarGroup Icons={Icons.video} name={"Home"} showIcons={false}/>
        <VideosidebarGroup Icons={Icons.video} name={"Live"} showIcons={false}/>
        <VideosidebarGroup Icons={Icons.video} name={"Shows"} showIcons={false}/>
        <VideosidebarGroup Icons={Icons.video} name={"Explore"} showIcons={false}/>
        <VideosidebarGroup Icons={Icons.video} name={"Saved videos"} showIcons={false}/>
        </div>
    </div>
  )
}

export default Videosidebar