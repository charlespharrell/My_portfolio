import { bootstrap, css, git, html, javascript, jquery, react, tailwind, typescript } from "../assets/images";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { brainwave, nike, guessing, snakegame, ecommerce, country } from "../assets/images";

export const navLinks = [
    {href: '#home', label: 'Home'},
    {href: '#about-me', label: "About me" },
    {href: '#skills', label: 'Skills'},
    {href: '#project', label: 'Project'},
    {href: '#contact', label: 'Contact'},
];

export const experiences =[
    {
        number:' 2+',
        experience: 'Years of experience'
    },
    {
        number:' 40+',
        experience: 'Projects'
    },
    {
        number:' 100+',
        experience: 'Working hours'
    },
    {
        number:' 02',
        experience: 'Companies worked'
    }
]
export const skills= [
    {
        img: html,
        name: 'HTML',
    },
    {
        img: css,
        name: 'CSS',
    },
    {
        img: jquery,
        name: 'JQuery',
    },
    {
        img: bootstrap,
        name: 'Bootstrap',
    },
    {
        img: javascript,
        name: 'JavaScript',
    },
    {
        img: react,
        name: 'React',
    },
    {
        img: typescript,
        name: 'TypeScript',
    },
    {
        img: tailwind,
        name: 'Tailwind',
    },
    {
        img: git,
        name: 'Git',
    }
]

export const icons= [
    { src: FaFacebook,
      href: 'https://www.facebook.com/charlesemeka.udenwoke'
    },
   
    {src: FaGithub,
     href: 'https://github.com/charlespharrell'
    },

    { src: FaInstagram,
      href: 'https://www.instagram.com/charlespharrell/'
     },

    {src: FaTwitter,
      href: 'https://twitter.com/charlespharrell' 
     },

    { src: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/udenwoke-charles-238142188/'
      }

]
export const projects =[
    {
        img: brainwave,
        name: 'Brainwave with AI',
        highlight: 'An application that enhances the power of chatting using Artificial Intelligence',
        stack: 'ReactJs, Vite, Tailwind',
        href:'https://brainwave-7h9qdmh9q-charlespharrells-projects.vercel.app/'

    },
    {
        img: snakegame,
        name: 'Snake Game',
        highlight: 'This web game is just like the regular snake game we play on our phone where the snake moves to eat its food, and if it hits itself, its gameover',
        stack: 'JavaScript, CSS',
         href:'https://snake-game-sayg.vercel.app/'

    },
    {
        img: ecommerce,
        name: 'Ecommerce Shoes-website',
        highlight: 'A website where one can shop for shoes, and  add them to the cart. The shoes can be sorted out in different categories based on proces, colors, and even shoe type',
        stack: 'ReactJs, CSS',
         href:'https://shoe-website-theta.vercel.app/'

    },
   
    {
        img: country,
        name: 'Search Country',
        highlight: 'This is an web application where you can search for any country in the world with some other details about the country like its population, etc.',
        stack: 'ReactJs, CSS',
         href:'https://country-search-phi.vercel.app/'

    },
    {
        img: nike,
        name: 'Nike Collections',
        highlight: 'A Landing Page where you can shop and get updates on Nike shoes ',
        stack: 'ReactJs, Vite, Tailwind',
         href:'https://nike-webpage-iota.vercel.app/'

    },
    {
        img: guessing,
        name: 'Guessing game',
        highlight: 'An application where you can guess between the numbers 1-50 and then the aplication tells you if you are right or wrong',
        stack: 'JavaScript CSS',
         href:'https://guess-dnumber.netlify.app/'

    }

]