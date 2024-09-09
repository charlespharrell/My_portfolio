/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :'class',
  theme: {
    extend: {

      boxShadow:{
        'light': '.4rem .4rem 1rem #ccc, -.4rem -.4rem 1rem #fff',
        'dark': '.4rem .4rem 1rem #111, -.4rem -.4rem 1rem #333',
        'custom-shadow': '.4rem .4rem 1rem #ccc, -.4rem -.4rem 1rem #fff',
        'custom-inset': '.4rem .4rem 1rem #ccc inset, -.4rem -.4rem 1rem #fff inset',
        'dark': '.4rem .4rem 1rem #111, -.4rem -.4rem 1rem #333',
        'dark-inset': '.4rem .4rem 1rem #111 inset, -.4rem -.4rem 1rem #333 inset',
      },
      
      backgroundColor:{
        'light-mode': '#e6e6e6',
        'dark-mode':'#222'
      },
      

      colors: {
      'blue':' rgb(45 45 160 )',
      'text4-white': '#444',
      'text4-black': '#fff',
      'light-text-color': '#777',
      'dark-text-color':'#ddd',
      'bg-color':' #e6e6e6',
      'border': '.1rem solid rgba(0,0,0,.',
     

    },
    active: {
      'black': '#fff',
    'light-color': '#ddd',
    'bg-color': '#222',
    'border': '.1rem solid rgba(0,0,0,.4)',
      },


      gridTemplateColumns:{
        'auto-fix-minmax': 'repeat(auto-fit, minmax(14rem, 1fr))',
         'auto-fix-minmat': 'repeat(auto-fit, minmax(9rem, 1fr))'
      }
    },
  },
 
  plugins: [],

}