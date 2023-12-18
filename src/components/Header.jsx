import React, { useState } from 'react'
import facebooklogo from '../assets/facebook.png'
import Icons from '../icons/iconslist.js'
import { Link } from 'react-router-dom'
const Header = () => {
    const [hide , setHide] = useState(true)
    function handleFocus(){
       setHide(false)
    }
    function handleFocusan(){
       setHide(true)
    }
  return (
    <header className='h-[56px] fic justify-between fixed w-[100vw]  top-0 z-[200] bg-[#1c1e21] px-7'>
     <div className='fic gap-2' >
        {
            hide && <img src={facebooklogo} className='w-[40px] h-[40px] rounded-full' alt="Facebook Logo" />
        }
            {
                !hide && <Icons.leftarrow size={30} color='white' className='hover:bg-[#3a3b3c] rounded-full  '/>
            }   
        <div className='h-[40px] rounded-full gap-1 sm:pl-2 fic justify-center w-[40px] sm:w-full  bg-[#3a3b3c]'>
            {/* search icons */}
            {
            hide && <Icons.search size={18} color='white' className='focus:hidden '/>
            }
            <input type="text" onBlur={handleFocusan} onFocus={handleFocus} placeholder='Facebook Search' className='h[40px] hidden sm:block  focus:outline-none bg-transparent text-white' />
        </div>
     </div>
     <nav className='hidden sm:block'>
     <ul className='fic gap-2   '>
        <Link to={'/'}>
       <li className='list-none fic justify-center w-[100px] h-[50px] rounded-md hover:bg-[#3a3b3c] '>
        <Icons.home size={24} color='white'/>
        {/* Home icon  */}
       </li>
        </Link>
       <Link to={'/friend'}>
       <li className='list-none fic justify-center w-[100px] h-[50px] rounded-md hover:bg-[#3a3b3c]'>
        <Icons.friend size={24} color='white'/>
        {/* friend icon  */}
       </li>
        </Link>
       <Link to={'/videos'}>
       <li className='list-none fic justify-center w-[100px] h-[50px] rounded-md hover:bg-[#3a3b3c]'>
        <Icons.video size={24} color='white'/>
        {/* Vidoe icon  */}
       </li>
        </Link>
       <Link to={'/marketing'}>
       <li className='list-none fic justify-center w-[100px] h-[50px] rounded-md hover:bg-[#3a3b3c]'>
        <Icons.marketing size={24} color='white'/>
        {/* Marketing icon  */}
       </li>
        </Link>
       <Link to={'/group'}>
       <li className='list-none fic justify-center w-[100px] h-[50px] rounded-md hover:bg-[#3a3b3c]'>
        <Icons.group size={24} color='white'/>
        {/* Group icon  */}
       </li>
        </Link>
     </ul>
     </nav>
     <nav className='sm:hidden'>
        <ul>
       <li className='list-none fic justify-center w-[40px] h-[40px] rounded-md hover:bg-[#3a3b3c]'>
        <Icons.menu size={24} color='white'/>
        {/* Group icon  */}
       </li>
        </ul>
     </nav>
     <div  className='fic gap-3'>
        <div  className='fic justify-center w-[40px] h-[40px] rounded-full bg-[#3a3b3c]  hover:bg-[#5a5a5a]' >
            {/* menu icons */}
        <Icons.menukebab size={20} color='white'/>        
        </div>
        <div  className='fic justify-center w-[40px] h-[40px] rounded-full bg-[#3a3b3c] hover:bg-[#5a5a5a]' >
        <Icons.chat size={20} color='white'/>
            {/* messaging icons  */}
        </div>
        <div className='fic justify-center w-[40px] h-[40px] rounded-full bg-[#3a3b3c] hover:bg-[#5a5a5a]' >
        <Icons.notification size={20} color='white'/>

            {/* Notification Icons */}
        </div>
        <div  className='fic justify-center w-[40px] h-[40px] rounded-full bg-[#3a3b3c] hover:bg-[#5a5a5a]'>
        <Icons.profile size={20} color='white'/>
            {/* user Profile  */}
        </div>
     </div>
    </header>
  )
}

export default Header