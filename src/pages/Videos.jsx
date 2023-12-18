import React from 'react'
import Videosidebar from '../components/Videocomponents/Videosidebar'
import Rightsidevideo from '../components/Videocomponents/rightbr/Rightsidevideo'

const Videos = () => {
  return ( 

        <main className='text-white mt-14 flex'>
            <section  className=' fixed w-[25%] overflow-y-auto scrool  max-h-screen  left-0 top-14 '>
            <Videosidebar/>
            </section>
            <section className=' absolute right-0 w-[70%] mx-auto  h-screen'>
              <Rightsidevideo/>
            </section>
        </main>
      )
    }
export default Videos