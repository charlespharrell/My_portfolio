import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'


const Hamburger = ({openNavBar, toggleNavBar, darkMode}) => {

  return (
    <div>
      <div 
      className={`size-[2rem] hidden max-lg:block
        fixed top-[.5rem] left-[1rem] p-2 z-[999]
       h-[3rem] w-[3rem]  rounded-full cursor-pointer
       text-center text-blue 
       ${darkMode? 'bg-dark-mode':'bg-light-mode'}
     ${darkMode? 'shadow-dark':'shadow-light'}
     ${darkMode ? 'hover:shadow-dark-inset':'hover:shadow-custom-inset'}
      `}
      onClick={toggleNavBar}>
        {openNavBar? <AiOutlineClose className=' w-[2rem] h-[2rem]'/>:<GiHamburgerMenu className='w-[2rem] h-[2rem]'/>}
      </div>
    </div>
  )
}

export default Hamburger
