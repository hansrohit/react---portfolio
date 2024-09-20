import React from 'react'
import '../assets/css/index.css'
import jinju from '../assets/img/hans rohit(pic).jpg'
import jinju1 from '../assets/img/jinju1.jpg'
import jinju2 from '../assets/img/jinju2.jpg'
import jinju3 from '../assets/img/jinju3.jpg'
import { Github,LinkedinIcon, MailPlus } from 'lucide-react';

const home = () => {
 
  const icons=[{title:"LinkedinIcon",id:"https://www.linkedin.com/feed/"},{title:"GitBranch",id:"https://github.com/hansrohit"},{title:"MailPlus",id:"hansrohit031@gmail.com"}]

  return (
    <>
     <div className='h-[100%] w-full fixed flex justify-center items-center'>
      <div className='text-white justify-start flex items-center h-[80%] w-[95%]'>
        <div className='flex flex-col justify-end items-start h-[90%] w-[60%]'>
          {/* <div className='border-2 h-[12%] flex justify-start items-center font-bold text-xl w-full'>Hello, It's me</div> */}
          <div className='h-[12%] w-full flex justify-start items-center font-bold text-4xl'>Hello, I'm Hans Rohit</div>
          <div className='h-[12%] flex justify-start items-center w-full font-extrabold text-xl'><span className='text-2xl font-extrabold text-cyan-400'>MERN Stack Developer</span></div>
          <div className='h-[40%] text-justify flex justify-center items-start w-full font-thin text-xl'>A dedicated MERN stack developer specializing in building dynamic and responsive web applications using MongoDB, Express, React, and Node.js. I thrive on creating seamless user experiences and tackling complex challenges. I’m passionate about learning new technologies and constantly improving my skills. Open to collaborating on exciting projects and bringing innovative ideas to life!</div>
          <div className='h-[16%] w-full flex justify-center gap-20 items-end'>
            <a href="www.linkedin.com" className=''><LinkedinIcon/></a>
            <a href="www.linkedin.com"><Github/></a>
            <a href="www.linkedin.com"><MailPlus/></a>
          </div>
        </div>
        <div className='h-[90%] w-[40%]  flex justify-center items-center'>
          <div className='h-[90%] w-[80%] flex justify-center items-center rounded-full'><img src={jinju} alt="" className='border-2 h-[100%] w-[100%] rounded-full hover:animate-pulse' /></div>
        </div>
      </div>
     </div>
    </>
  )
}

export default home
