import React from 'react'

const Button = ({label, link, darkMode}) => {
  return (
    <a href={link}className={` rounded-3xl py-[1.5rem] px-[4rem]
     text-black  hover:text-blue max-sm:text-[.6rem]
     ${darkMode? 'bg-dark-mode':'bg-light-mode'}
     ${darkMode? 'shadow-dark':'shadow-light'}
     ${darkMode ? 'hover:shadow-dark-inset':'hover:shadow-custom-inset'}
     ${darkMode? 'text-text4-black':'text-text4-white'}
    `}
     >
        {label}
    </a>
  )
}

export default Button
