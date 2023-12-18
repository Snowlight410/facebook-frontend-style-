import React from 'react'
import Firendsidebar from '../components/FirendComponent/Firendsidebar'
import RightFriend from '../components/FirendComponent/RightFriend'
import Videosidebar from '../components/Videocomponents/Videosidebar'

const Friend = () => {
  return ( 

        <main className='text-white mt-14 flex'>
            <section  className=' fixed w-[25%] overflow-y-auto scrool  max-h-screen  left-0 top-14 '>
            <Videosidebar/>
            </section>
            <section className=' absolute right-0 w-[70%] mx-auto  h-screen'>
              <RightFriend/>
            </section>
        </main>
      )
    }
export default Friend