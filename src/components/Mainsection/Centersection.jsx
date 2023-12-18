import React from 'react';
import Storycard from './center/Storycard';
import Secondstorycard from './center/Secondstorycard';
import Icons from '../../icons/iconslist';
import Storybig from './center/Storybig';

const Centersection = () => {
  const divStyle = {
    width: '150px',
    height: '220px',
    backgroundImage: 'url("https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
  };
  const imagesUrls = {
    imgf :"https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png",
    imgs:"https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
    ,imgt:"https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
  }
  return (
    <>
    <div className=' flex gap-2 justify-center mt-20  w-[95%] mx-auto '>
      <div style={divStyle} className=' relative z-[100]'>
        <div className=' flex flex-col items-center justify-end  h-[100%] leading  '>
        <button className='bg-blue-700  border-[#242626]  border-4 rounded-full z-[10] w-[30px] h-[30px] fic justify-center'><b>+</b></button>
          <div className='bg-[#242626] rounded-b-lg absolute  w-full h-[20%]'></div>
        <p className='text-white z-[10] text-sm mb-2 font-bold'>Create Story</p>
        </div>     
      </div>
     <Storycard  title="ali hassan" divStyle={divStyle} />
     <Storycard title="ali" divStyle={divStyle} />
    </div>
    <div className=' p-3 my-5 rounded-lg bg-[#242626] w-[80%] mx-auto border-white'>
       <div className='fic gap-1 justify-between'>
       <img className='w-[40px] h-[40px] rounded-full'  src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D" alt="" />
       <button type="text" className='text-left bg-[#3a3b3c] h-[40px]  pl-3 rounded-full flex-grow ' >What-s on the floor ?</button>
       </div>
       <div className='border-t-[1px] pt-2 border-[#3a3b3c] flex justify-around mt-2'>
        <Secondstorycard title={"live video"} imga = {imagesUrls.imgf}/>
        <Secondstorycard title={"photo/video"} imga = {imagesUrls.imgs}/>
        <Secondstorycard title={"feeling activity"} imga = {imagesUrls.imgt}/>
       </div>
    </div>
    <Storybig/>
    <Storybig/>
    </>
  );
};

export default Centersection;
