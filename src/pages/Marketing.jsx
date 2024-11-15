import React from 'react'

import RightMarketing from '../components/Marketingcomponents/rightbar/RightMarketing'
import Marketetsidebar from '../components/Marketingcomponents/marketsidebar/Marketsidebar'
const Marketing = () => {
  return (
    <main className='text-white mt-14 flex'>
            <section  className=' fixed w-[25%] overflow-y-auto scrool  max-h-screen  left-0 top-14 '>
             <Marketetsidebar/>
            </section>
            <section className=' absolute right-0 w-[70%] mx-auto  h-screen'>
              <RightMarketing/>
            </section>
        </main>
  )
}

export default Marketing