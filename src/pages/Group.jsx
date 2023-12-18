import React from 'react'
import Groupsidebar from '../components/Groupcomponent/sidebar/Groupsidebar'
import Centergroup from '../components/Groupcomponent/centerside/Centergroup'
import Rightsidegroup from '../components/Groupcomponent/rightside/Rightsidegroup'

const Group = () => {
  return (
    <main className='text-white mt-14 flex'>
        <section  className=' fixed w-[25%] overflow-y-auto scrool  max-h-screen  left-0 top-14 '>
            <Groupsidebar/>
        </section>
        <section className=' w-[50%] mx-auto  border-white h-screen'>
            <Centergroup/>
        </section>
        <section className=' fixed right-0  w-[25%] top-14  border-white h-screen'>
            <Rightsidegroup/>
        </section>
    </main>
  )
}

export default Group