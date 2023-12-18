import React from 'react'
import Sidesection from './Mainsection/Sidesection'
import Centersection from './Mainsection/Centersection'
import Rightsection from './Mainsection/Rightsection'

const Mainsection = () => {
  return (
    <main className='text-white mt-14 flex'>
        <section  className=' fixed w-[25%] overflow-y-auto scrool  max-h-screen  left-0 top-14 '>
            <Sidesection/>
        </section>
        <section className=' w-[50%] mx-auto  border-white h-screen'>
            <Centersection/>
        </section>
        <section className=' fixed right-0  w-[25%] top-14  border-white h-screen'>
            <Rightsection/>
        </section>
    </main>
  )
}

export default Mainsection