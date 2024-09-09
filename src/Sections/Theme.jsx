import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'


const Theme = ({themeMode, openNavBar, darkMode}) => {

  return (
    <div>
    <div className={`fixed p-[.6rem] z-[999] w-[50px] block
      h-[50px] rounded-full m-[10px] right-0 cursor-pointer
       transition-[0.5s] text-blue text-center
     ${darkMode? 'bg-dark-mode':'bg-light-mode'}
     ${darkMode? 'shadow-dark':'shadow-light'}
     ${darkMode ? 'hover:shadow-dark-inset':'hover:shadow-custom-inset'}
    `}
    onClick={themeMode}>
      {openNavBar? <FaMoon className='w-[2rem]  h-[2rem]'/>:<FaSun className='w-[2rem] h-[2rem]'/>}
    </div>
    </div>
  )
}

export default Theme
