import React from 'react'
import Heading from '../Component/Heading'
import Section from '../Component/Section'
import Button from '../Component/Button'
import { experiences } from '../Constants'

const About = ({darkMode}) => {
  return (
    <Section darkMode={darkMode}>
        <div id='about-me'>
             <Heading label ='About me'/>

            <div  className='flex flex-1 gap-[2rem] max-md:flex-col'>

            <div className='w-[50%] flex flex-col max-md:w-[100%] justify-start items-start
                max-sm:mb-[1.5rem]
            ' >
                <h2 className='text-start font-semibold mb-3 text-2xl max-sm:text-xl'>
                    My name is <span className='text-blue'>Charles Udenwoke</span>
                </h2>
                <p className={`text-start  mb-6 ${darkMode ? 'text-dark-text-color':'text-light-text-color'}`}>
                I am a Frontend Software Engineer with a vast array of knowledge in languages 
                and frameworks used in building, designing
                and making interractive
                and reponsive, web application programs. 
                My objective is simply to be the best Software Engineer that I can be and to contribute
                to the technology industry all that I know can do. 
                I am dedicated to perfecting my craft by
                learning from more seasoned engineers, remaining humble, and continuously making strides
                to learn all that I can about development.  
                </p>
                <div className='mt-[1rem]'>
                    <Button darkMode={darkMode} link='#home' label='Contact me'/>
                </div>
            </div>

            <div className='flex-1 flex flex-col w-full flex-wrap 
                justify-between h-[25rem] gap-1  '>
                {
                    experiences.map((index)=>(
                        <div className={` w-full max-md:w-[100%]
                        h-[6rem] pt-4 ${darkMode? 'text-text4-black':'text-text4-white'}
                         justify-center items-center
                        rounded-2xl  ${darkMode? 'bg-dark-mode':'bg-light-mode'} 
                        ${darkMode ? 'shadow-dark-inset':'shadow-custom-inset'}`}
                         key={index.experience}>
                            <h3 className='text-2xl font-bold '>{index.number}</h3>
                            <p className='text-xl'>{index.experience}</p>
                        </div>
                    ))
                }
            </div>

            </div>
        </div>
    </Section>
  )
}

export default About
