import React, { useRef, useState } from 'react'
import {CircleUser, CircleX, Cross} from 'lucide-react';
import {NavLink,Link} from 'react-router-dom'
import '../assets/css/index.css'

const Navbar = () => {

   const navdata=[{
    title:'Home',
    path:'/'
   },{
    title:'Project',
    path:'/project'
   },
  {
    title:'Contact',
    path:'/contact'
  }]

  const [login, setlogin] = useState(false)

  const emailref=useRef(null)
  const passwordref=useRef(null)

  const handleLogin=(e)=>{
    e.preventDefault()
    console.log(emailref.current.value, passwordref.current.value)
  }
    
  return (
    <>
    <div className='bg-transparent bg-opacity-35 rounded-sm h-[4rem] w-full flex justify-around items-center absolute z-50 top-0'>
          <div className='h-full w-[95%] flex justify-center items-center '>
            <div className='flex h-full w-full justify-start items-center text-gray-200 '><h1 className='font-bold'><Link to='/'>Portfolio.</Link></h1></div>
           <div className='flex justify-end items-center h-full w-[50%]'>
            <ul className='h-full w-full list-none flex flex-row justify-center gap-1 items-center font-semibold '>
            {navdata.map((data,index)=>(
              <NavLink key={index} to={data.path} className='h-[100%] w-[40%]'><li className='border-2 rounded-lg border-transparent justify-center flex items-center text-zinc-100 h-full w-full hover:bg-opacity-30 transition hover:text-cyan-500'>{data.title}</li></NavLink>
            ))}
                {/* <li className='border-1 justify-center flex items-center h-[100%] w-[40%] hover:bg-slate-800 hover:text-white hover:bg-opacity-30'><Link to='/project'>Project</Link></li>
                <li className='border-1 justify-center flex items-center h-[100%] w-[40%] hover:bg-slate-800 hover:text-white hover:bg-opacity-30'><Link to='/contact'>Contact</Link></li> */}
            {/* <div className=' h-[100%] w-[18%] border-1 justify-center items-center flex'>
                <li className='border-2 cursor-pointer border-black rounded-full h-[32px] w-[32px] flex justify-start items-center' onClick={()=>{setlogin(true);console.log(login)}}><CircleUser size={32} /></li>
                </div> */}
                {/* <Link to='/home'><li className='border-2 border-black rounded-full h-[32px] w-[32px] flex justify-start items-center'><CircleUser size={32} /></li></Link> */}
            </ul>
            </div>
       </div> 
     </div>
     {
      login &&(
        <>
          <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                            <div className=" h-[40%] w-[30%] z-50 flex flex-col  bg-white  shadow-lg ">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-white bg-purple-500 text-xl font-bold ">
                                    <div className="w-1/2">
                                        Login
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <CircleX onClick={() => setlogin(!login)} />
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                        <input type="email" ref={emailref} name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required />
                                        {/* <input type="email" name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} />
                                        <input type="password" name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} /> */}
                                        <button type="submit" className="bg-green-500 p-3 text-white w-full rounded-sm text-lg font-bold">   Login</button>
                                    </form>
                                </div>
                             </div>                      
          </div>                      
        </>
      )
     }
     </>
  )
}

export default Navbar
