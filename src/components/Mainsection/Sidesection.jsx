import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import img from '../../assets/facebook.png'
import Iconsface from '../../icons/iconsface.js'
import Icons from '../../icons/iconslist.js'
const Sidesection = () => {
    const [showMore ,setShowMore] = useState(false)
function showmoreclick(){
    setShowMore(true)
}
function showLessclick(){
    setShowMore(false)
}
  return (
    < >
        {/* Left side  */}
        {
            !showMore && 
            <>
            <Sidebar title="Ali hassan" image = {Iconsface.event}/>
        <Sidebar title="Find friends" image = {Iconsface.friend} />
        <Sidebar title="Events" image = {Iconsface.event} />
        <Sidebar title="Groups" image = {Iconsface.group} />
        <Sidebar title="Feeds" image = {Iconsface.feeds} />
        <Sidebar title="Marketplace" image = {Iconsface.marketing} />
        <Sidebar title="Blood Donations" image = {Iconsface.blood}/>
        <Sidebar title="Climate Science Centre" image = {Iconsface.nature} />
        <Sidebar title="Fundraisers" image = {Iconsface.funds} />
        <Sidebar title="Gaming Video" image = {Iconsface.games}/>
        <Sidebar title="Memories" image = {Iconsface.memories}/>
        <div className='flex pl-5 gap-3    h-[44px] border-white items-center hover:bg-[#3a3b3c]  hover: rounded-md'>

            <div className='w-[25px] h-[25px]  fic justify-center rounded-full bg-[#3a3b3c]'>
                <Icons.indown size={15} />
            </div>
        <button className='hover:bg-[#3a3b3c]'onClick={showmoreclick}>See More</button>
        </div>
            </>
        }
        {
            showMore && 
            <>
        <Sidebar title="Ali hassan" image = {Iconsface.event}/>
        <Sidebar title="Find friends" image = {Iconsface.friend} />
        <Sidebar title="Events" image = {Iconsface.event} />
        <Sidebar title="Groups" image = {Iconsface.group} />
        <Sidebar title="Feeds" image = {Iconsface.feeds} />
        <Sidebar title="Marketplace" image = {Iconsface.marketing} />
        <Sidebar title="Blood Donations" image = {Iconsface.blood}/>
        <Sidebar title="Climate Science Centre" image = {Iconsface.nature} />
        <Sidebar title="Fundraisers" image = {Iconsface.funds} />
        <Sidebar title="Gaming Video" image = {Iconsface.games}/>

        <Sidebar title="Memories" image = {Iconsface.memories}/>
        <Sidebar title="messenger" image = {Iconsface.messanger}/>
        <Sidebar title="Messenger Kids" image = {Iconsface.kidmess}/>
        <Sidebar title="Orders and payments" image = {Iconsface.payment}/>
        <Sidebar title="Pages" image = {Iconsface.pages}/>
        <Sidebar title="Play games" image = {Iconsface.playgame}/>
        <Sidebar title="Recent ad activity" image = {Iconsface.recent}/>
        <Sidebar title="Saved" image = {Iconsface.save}/>
        <Sidebar title="Video" image = {Iconsface.videos}/>

        <div className='flex pl-5 gap-3    h-[44px] border-white items-center hover:bg-[#3a3b3c]  hover: rounded-md'>
            <div className='w-[25px] h-[25px]  fic justify-center rounded-full bg-[#3a3b3c]'>
<Icons.inup size={15}/>
            </div>
        <button className='hover:bg-[#3a3b3c]'onClick={showLessclick}>See Less</button>
        </div>
            </>
        }
    {
        
     <ul className={`text-white gap-1  relative right-6 flex flex-wrap w-[70%] mx-auto mb-16`}>
            <li> Privacy</li>
            <li>. Terms</li>
            <li>. Advertising</li>
            <li>. Ad choices</li>
            <li>. Cookies</li>
            <li>. More</li>
            <li>. Meta &copy; 2023</li>
        </ul>
    }   
    </>
  )
}

export default Sidesection