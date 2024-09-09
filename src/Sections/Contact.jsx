import React, { useState } from 'react'
import Section from '../Component/Section';
import Heading from '../Component/Heading';
import Button from '../Component/Button';

const Contact = ({darkMode}) => {
  return (  
    <Section darkMode={darkMode}>
      <div id='contact'>
         <Heading label='CONTACT'/>
         <form action="" className={`flex justify-start flex-col gap-[0rem] m-auto max-w-[45rem] h-[28rem] rounded-2xl
              ${darkMode? 'shadow-dark':'shadow-light'} p-[0.5rem] px-[2rem]`}>
            <p className='mb-[0rem]' >+2349067131362</p>
            <p>charlesudenwoke011@gmail.com</p>

            <input type="email" placeholder=" Enter your email" className={`px-[1rem] py-[0.5rem]
            w-[100%] bg-none text-black my-[0.5rem] shadow-custom-box rounded-xl
             ${darkMode? 'shadow-dark':'shadow-light'}
             ${darkMode? 'bg-dark-mode':'bg-light-mode'}
            `} 
            />

            <input type="text" placeholder="Subject" className={`px-[1rem] py-[0.5rem]
            w-[100%] bg-none text-black my-[0.5rem] shadow-custom-box rounded-xl
            ${darkMode? 'shadow-dark':'shadow-light'}
            ${darkMode? 'bg-dark-mode':'bg-light-mode'}
            `} />

            <textarea
              name=""
              className={`rounded-xl my-[1rem] p-[1rem]
               ${darkMode? 'shadow-dark':'shadow-light'}
            ${darkMode? 'bg-dark-mode':'bg-light-mode'}
              `}
              placeholder="Your message"
              id=""
              cols="30"
              rows="7"
            ></textarea>
         <Button darkMode={darkMode} label='Send message'/>
          </form>
      </div>


     
    </Section>
  )
}

export default Contact
