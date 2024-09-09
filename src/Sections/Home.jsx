import React from 'react'
import Section from '../Component/Section'
import Button from '../Component/Button'
import { icons } from '../Constants'


const Home = ({darkMode}) => {
  return (
        <Section darkMode={darkMode} >
            <div id='home' className=' justify-center items-center flex flex-col'>
               <h3 className='text-[3.5rem]  mb-[0rem] font-bold
                mt-[5rem] '>CHARLES UDENWOKE</h3>

               <p className='text-xl text-blue pb-[0.5rem]'>I am a Frontend Software Engineer</p>
               <p className='mb-2 text-blue'>+2349067131362</p>
               <p className='text-blue'>charlesudenwoke011@gmail.com</p>

                <div className=' px-[2.5rem] py[1.5rem] my-[3rem]'>
                  <Button  darkMode={darkMode} label ='Download CV' 
                  link ='https://docs.google.com/document/d/1DFhpi2aHvOMTDRynhRaM0UysYLnnHTOq/edit'/>
                </div>

                <div className={`flex shadow-custom-box bg-bg-color mt-12 flex-1 py-6 px-5 w-[20rem]  items-center
                  rounded-2xl justify-center gap-[0.5rem]
                   ${darkMode? 'shadow-dark':'shadow-light'}
                    ${darkMode? 'bg-dark-mode':'bg-light-mode'}
                  `}>

                  {icons.map((icon)=>(
                    <div className={`w-[5rem] shadow-custom-box rounded-xl flex justify-center py-3
                    items-center p-[.5rem] hover:shadow-custom-inset hover:text-blue
                     ${darkMode? 'shadow-dark':'shadow-light'}
                      ${darkMode? 'bg-dark-mode':'bg-light-mode'}
                       ${darkMode ? 'hover:shadow-dark-inset':'hover:shadow-custom-inset'}
                    `} key={icon.src}>
                      <a href={icon.href}>{<icon.src className='h-[2rem] 1-[1.5rem]'/>}</a>
                    </div>
                  ))}
                </div>
           </div>
        </Section>
  )
}

export default Home
