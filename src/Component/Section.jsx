import React, { Children } from 'react'

const Section = ({children, darkMode, openNavBar}) => {
  return (
        <section className={` flex flex-col flex-1 justify-center min-w-full overflow-hidden
         px-[4rem] mt-0 text-center min-h-[100vh] max-sm:px-[2rem] max-sm:pl-[2rem]
          pl-[23rem] max-lg:pl-[4rem]  pb-[2rem] z-[-999] 
          ${darkMode? 'bg-dark-mode':'bg-light-mode'}  ${darkMode? 'text-text4-black':'text-text4-white'}
          `}>
            {children}

       
        </section>
  )
}

export default Section
