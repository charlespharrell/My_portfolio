import React from 'react'

const Footer = ({darkMode}) => {
  return (
 
      <div className={`pl-[19rem] px-2rem bg-bg-color border-t border-solid border-black
      border-x-0 border-b-0 text-center py-6 max-lg:pl-[0rem] max-lg:text-sm
       ${darkMode? 'bg-dark-mode':'bg-light-mode'}
       ${darkMode? 'text-text4-black':'text-text4-white'}
       `} >
        Created by <span> Mr Charles Udenwoke </span> | All right reserved
      </div>
  )
}

export default Footer
