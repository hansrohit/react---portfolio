import React from 'react'
import {CircleUser} from 'lucide-react';

const Navbar = () => {
  return (
    <div className='bg-slate-300 rounded-sm h-[4rem] w-full shadow-xl bg-opacity-60 flex justify-around items-center'>
          <div className='h-full w-[95%] flex justify-center items-center'>
            <div className='flex h-full w-full justify-start items-center '><h1 className='font-bold'>HANS ROHIT Y</h1></div>
           <div className='flex justify-end items-center h-full w-[50%]'>
            {/* <div className=' h-full w-full flex justify-end items-center'> */}
            <ul className='h-full w-full list-none flex flex-row justify-center gap-1 items-center font-semibold'>
                <li className='border-1  justify-center flex items-center h-[100%] w-[40%] hover:bg-black hover:text-white'>Home</li>
                <li className='border-1 justify-center flex items-center h-[100%] w-[40%] hover:bg-black hover:text-white'>Project</li>
                <li className='border-1 justify-center flex items-center h-[100%] w-[40%] hover:bg-black hover:text-white'>Contact</li>
            <div className=' h-[100%] w-[10%] border-1 justify-center items-center flex'>
                <li className='border-2 border-black rounded-full h-[32px] w-[32px] flex justify-start items-center'><CircleUser size={32} /></li>
                </div>
            </ul>
            </div>
            {/* </div> */}
       </div> 
                {/* <div className='border-2 border-black rounded-full h-[32px] w-[32px] flex justify-start items-center'><CircleUser size={32} /></div> */}
     </div>
  )
}

export default Navbar
