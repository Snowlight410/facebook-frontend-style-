import React from 'react'
import facebook from '../.../../../../assets/facebook.png'
const CardGroupjoin = () => {
  return (
    <div className='fic my-2 gap-2'>
        <img width={30} height={30} src={facebook} alt="" />
        <div>
            <h2>Teem patti Group</h2>
            <p>last active 14 minutes ago</p>
        </div>
    </div>
  )
}

export default CardGroupjoin