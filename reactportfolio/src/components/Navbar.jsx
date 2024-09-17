import React from 'react'
import {CircleUser} from 'lucide-react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-300 rounded-sm h-[4rem] w-full shadow-xl bg-opacity-60 flex justify-around items-center sticky'>
          <div className='h-full w-[95%] flex justify-center items-center'>
            <div className='flex h-full w-full justify-start items-center '><h1 className='font-bold'><Link to='/home'>HANS ROHIT Y</Link></h1></div>
           <div className='flex justify-end items-center h-full w-[50%]'>
            <ul className='h-full w-full list-none flex flex-row justify-center gap-1 items-center font-semibold'>
                <li className='border-1  justify-center flex items-center h-[100%] w-[40%] hover:bg-slate-800 hover:bg-opacity-30 hover:text-white'><Link to='/home'>Home</Link></li>
                <li className='border-1 justify-center flex items-center h-[100%] w-[40%] hover:bg-slate-800 hover:text-white hover:bg-opacity-30'><Link to='/project'>Project</Link></li>
                <li className='border-1 justify-center flex items-center h-[100%] w-[40%] hover:bg-slate-800 hover:text-white hover:bg-opacity-30'><Link to='/contact'>Contact</Link></li>
            <div className=' h-[100%] w-[18%] border-1 justify-center items-center flex'>
                <Link to='/home'><li className='border-2 border-black rounded-full h-[32px] w-[32px] flex justify-start items-center'><CircleUser size={32} /></li></Link>
                </div>
            </ul>
            </div>
       </div> 
     </div>
  )
}

export default Navbar
