import React from 'react'
import {fblight} from '../assets/images'
import { fbdark } from '../assets/images'
import { navLinks } from '../Constants'
import Hamburger from './Hamburger'
import { useState } from 'react'


const NavBar = ({darkMode}) => {
  const [openNavBar, setOpenNavBar]= useState(false)

  const toggleNavBar=()=>{
    setOpenNavBar((prevState)=>!prevState)
  }

  const handleClick=()=>{
    setOpenNavBar((prevState)=>!prevState)
  }

  return (
   
       <nav className={` ${openNavBar?'max-lg:left-[0%] max-lg:w-full border-none':''}
                         flex top-0 left-0 flex-col p-[1rem] w-[19rem] fixed z-[999]
                        h-full text-center border border-solid  border-black border-y-0 
                        border-l-0 items-center  max-lg:left-[-110%] 
                        ${darkMode? 'bg-dark-mode':'bg-light-mode'}
                        ${darkMode? 'text-text4-black':'text-text4-white'}
                    `}>

                      <Hamburger openNavBar={openNavBar} darkMode={darkMode} toggleNavBar={toggleNavBar}/>

            <img src={`${darkMode ? fbdark:fblight }`} alt=""  
                        className={`m-[.5rem] border-[1rem] border-solid border-transparent 
                         rounded-full h-[12rem] ${darkMode ? 'shadow-dark': 'shadow-light'} w-[12rem]`}
                       />

            <h3 className=' text-[1.5rem]  font-bold'>CHARLES UDENWOKE</h3>
            <p className='text-blue text-[1rem] font-bold'>Frontend Software Engineer</p>
                
          <div className='flex flex-1 flex-col  w-full mt-[1rem] gap-3 text-2xl '>
             {
                navLinks.map((navlink)=>(
                  <a href={navlink.href} className={`rounded-3xl  py-[0.4rem] px-[5rem] hover:text-blue  
                      ${darkMode ? 'shadow-dark': 'shadow-light'}                 
                      ${darkMode? "hover:shadow-dark-inset":"hover:shadow-custom-inset"}
                      cursor-pointer`}
                   onClick={handleClick}
                   >                  
                    {navlink.label}
                  </a>
                ))
                
              }
          </div>
        
    </nav>
  )
}

export default NavBar
