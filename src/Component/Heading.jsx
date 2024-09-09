import React from 'react'

const Heading = ({label}) => {
  return (
  <h1 className={`text-[4rem] uppercase my-4 font-serif text-blue max-sm:text-[3rem]

  `}>
        {label}
    </h1>
  )
}

export default Heading
