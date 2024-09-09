import React, { useState } from 'react'
import Section from '../Component/Section'
import Heading from '../Component/Heading'
import { projects } from '../Constants'

const Projects = ({darkMode,}) => {

  return (
   
    <Section darkMode={darkMode}>
        <div id='project'>
            <Heading label='My Projects'/>

            <div className='grid grid-cols-auto-fix-minmax gap-[1.5rem]'>
            {
                projects.map((pro)=>(
                    <div key={pro.img} className={`p-2  h-[16rem] flex flex-col rounded-2xl 
                                     ${darkMode? 'shadow-dark':'shadow-light'}
                                    relative group overflow-hidden justify-center text-center border-[1rem] 
                                    border-solid border-transparent transition-transform duration-20 transform                                   
                                    `}>

                        <img src={pro.img} className='h-[100%] w-[100%] object-cover'  alt="" />
                        
                        <div className={`absolute z-50 top-0 left-0 h-[100%] w-[100%]
                        ${darkMode? 'bg-dark-mode':'bg-light-mode'} inset-0 
                        grid place-items-center transform scale-0 transition-transform
                        duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-100`}                      
                        >
                            <h3 className='text-[1.5rem] uppercase font-bold'>{pro.name}</h3>
                            <p className='text-[.9rem]'>{pro.highlight}</p>
                            <h4 className={ `font-bold `} >{pro.stack}</h4>
                            <a className='text-purple-500 underline' href={pro.href}>Visit demo</a>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
    </Section>
      )
}

export default Projects
