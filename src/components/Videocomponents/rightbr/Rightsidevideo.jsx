import React from 'react'
import Icons from '../../../icons/iconslist'
import bird from '../../../assets/bird.mp4'
import Image from '../../../assets/facebook.png'
const Rightsidevideo = () => {
  return (
    <>
    <div className=' px-2 w-[90%] my-10  rounded-lg maincolor mr-auto border-white'>
        <div className=''>
            <div className='fic p-3 justify-between'>
                <div className='fic '>
                    <img src={Image} className='w-[50px] h-[50px]  rounded-full'/>
                    <div>
                        <div className='ficg'>
                            <h3>Baba bayi</h3>
                            <button>Flollow</button>
                        </div>
                        <div className='ficg'
                        ><p>17 vovember at 18133</p><Icons.Browse size={15} color='white'/></div>
                    </div>
                </div>
                <div>
                    <Icons.menukebab color='white' size={15} className='rotate-90' />
                </div>
            </div>
            <div className='mb-2'><p>#viral #viraldeivo #explore #funny #comedy #scenes #movie </p></div>
        </div>
        <div>
            <video controls controlsList='nodownload'   muted loop autoPlay>
                <source  src={bird}  />
            </video>
        </div>
        <div className='fic justify-between p-3'>
            <div className=' fic gap-8'>
                <div className='fij gap-1'>
                    <Icons.like size={15} color='white'/>
                    <p>Like</p>
                </div>
                <div className='fij gap-1'>
                    <Icons.command size={15} color='white'/>
                    <p>Comment</p>
                </div>
                <div className='fij gap-1'>
                    <Icons.share size={15} color='white'/>
                    <p>Share</p>
                </div>
            </div>
            <div className='ficg'>
                <p><span>&#x1F44D;
</span> <span>&#128150;</span> <span>263k</span> <span>. 4.8k comment</span>. 27m Views</p>
            </div>
        </div>
    </div>
    <div className=' px-2 w-[90%] mt-10 rounded-lg maincolor mr-auto border-white'>
        <div className=''>
            <div className='fic p-3 justify-between'>
                <div className='fic '>
                    <img src={Image} className='w-[50px] h-[50px]  rounded-full'/>
                    <div>
                        <div className='ficg'>
                            <h3>Baba bayi</h3>
                            <button>Flollow</button>
                        </div>
                        <div className='ficg'
                        ><p>17 vovember at 18133</p><Icons.Browse size={15} color='white'/></div>
                    </div>
                </div>
                <div>
                    <Icons.menukebab color='white' size={15} className='rotate-90' />
                </div>
            </div>
            <div className='mb-2'><p>#viral #viraldeivo #explore #funny #comedy #scenes #movie </p></div>
        </div>
        <div>
            <video  muted loop autoPlay>
                <source src={bird}  />
            </video>
        </div>
        <div className='fic justify-between p-3'>
            <div className=' fic gap-8'>
                <div className='fij gap-1'>
                    <Icons.like size={15} color='white'/>
                    <p>Like</p>
                </div>
                <div className='fij gap-1'>
                    <Icons.command size={15} color='white'/>
                    <p>Comment</p>
                </div>
                <div className='fij gap-1'>
                    <Icons.share size={15} color='white'/>
                    <p>Share</p>
                </div>
            </div>
            <div className='ficg'>
                <p><span>&#x1F44D;
</span> <span>&#128150;</span> <span>263k</span> <span>. 4.8k comment</span>. 27m Views</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Rightsidevideo