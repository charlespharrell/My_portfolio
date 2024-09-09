import NavBar from './Sections/NavBar'
import Home from './Sections/Home'
import Hamburger from './Sections/Hamburger'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'
import Theme from './Sections/Theme'

import { useState, useEffect } from 'react'

function App() {

    const [openNavBar, setOpenNavBar]= useState(false)
    const [darkMode, setdarkMode]=useState(false)

    useEffect(()=>{
      if (darkMode){
        document.documentElement.classList.add('dark');
      }
      else{
        document.documentElement.classList.remove('dark')
      }

    }, [darkMode])

    const themeMode=()=>{
        setOpenNavBar((prevState)=>!prevState)
        setdarkMode((prevState)=>!prevState)
    }
  
  return (
   
    <body  > 
      <NavBar darkMode={darkMode} />
      <Theme themeMode={themeMode} darkMode={darkMode} openNavBar={openNavBar}/>
      <Home darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </body>

   
  )
}

export default App
