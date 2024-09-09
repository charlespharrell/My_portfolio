import React from 'react'
import Section from '../Component/Section'
import Heading from '../Component/Heading'
import { skills } from '../Constants'

const Skills = ({darkMode}) => {
  return (
    <Section darkMode={darkMode} >
         <div id='skills' className='text-[7rem] '>
             <Heading label='MY SKILLS' />

             <div className='grid grid-cols-auto-fix-minmax gap-[2rem] '>
                {skills.map((skill)=>(
                    <div key={skill.name} className={`p-2 flex flex-col rounded-2xl ${darkMode? 'shadow-dark':'shadow-light'}
                                    relative  overflow-hidden justify-center text-center
                                     hover:scale-105 
                                    transition-transform duration-300 
                                     ${darkMode ? 'hover:shadow-dark-inset':'hover:shadow-custom-inset'}`}>
                        <img className='w-[8rem] mb-[0rem]' src={skill.img} alt="" />
                        <h3 className='text-[2rem] pb-[1rem]'>{skill.name}</h3>
                    </div>
                ))}
             </div>
         </div>
    </Section>
   
  )
}

export default Skills
