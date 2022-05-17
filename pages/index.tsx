import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Clipboard from 'clipboard'

const svgStyle = 'hover:fill-[#37d5ff] fill-[#217a92] hover:stroke-[#37d5ff] stroke-[#217a92] stroke-[0] pb-5 hover:animate-pulse'

const Home: NextPage = () => {
  const contactOptions = {
    github: {
      key: 'GitHub',
      value: 'github.com/jorge-lba',
      href: 'https://github.com/jorge-lba'
    },
    linkedin: {
      key: 'Linkedin',
      value: 'linkedin.com/in/jorge-alegretti',
      href: 'https://linkedin.com/in/jorge-alegretti'
    },
    email: {
      key: 'Email',
      value: 'jorgeluiz.b.alegretti@gmail.com',
      href: 'mailto:jorgeluiz.b.alegretti@gmail.com'
    }
  }
  const [contactSelected, setContactSelected] = useState(contactOptions.github)
  const [isCoped, setIsCoped] = useState(false)

  useEffect(() => {
    if(isCoped) setTimeout(() => {
      setIsCoped(false)
    }, 3000)
  }, [isCoped])

  return (
    <>
    <header className='bg-slate-800/60 backdrop-blur-sm drop-shadow-menu p-1 fixed w-full'>
      <nav className='px-10 w-full flex flex-row justify-between align-middle p-3'>
        <a href='#init' className='text-xl font-mono text-[#37d5ff] align-middle'>
          JA Dev
        </a>
        <div className='text-lg font-mono text-[#37d5ff] h-full flex align-baseline'>
          <ul>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <div className='w-7 fixed bottom-0 right-60'>
    </div>
    <main className='bg-slate-800'>
      <section id='init' className='container max-w-3xl md:max-w-4xl lg:max-w-5xl h-screen m-auto m- px-1 flex flex-col justify-center items-start'>
        <header>
          <span className='text-lg font-mono text-[#37d5ff]'>Olá, meu nome é</span>
          <h2 className='text-5xl md:text-6xl lg:text-7xl py-2 font-sans font-black text-slate-300'>
            Jorge Alegretti.
          </h2>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-sans font-black pb-8 text-slate-400'>
            Sou desenvolvedor back-end.
          </h1>
        </header>
        <div className='flex mb-8'>
          <div className='container max-w-xl text-base'>
            <span className='mt-10 text-slate-400'>
              Atualmente estou focado em construir aplicações bem estruturadas 
              seguindo as melhores do mercado para você ter um negócio sustentável.
            </span>          
          </div>
        </div>
        <div className='flex flex-row'>
          <svg className={svgStyle} viewBox="0 0 128 128" height={56} width={56}>
              <path d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
          </svg>
          <svg className={svgStyle} viewBox="0 0 128 128" height={56} width={56}>
            <path d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
          </svg>
          <svg className={svgStyle} viewBox="0 0 128 128" height={56} width={56}>
            <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
          </svg>
          <svg className={svgStyle} viewBox="0 0 128 128" height={56} width={56}>
            <path d="M86 118.4c0-.3.1-.6 0-.9-.2-.3-.3-.5-.5-.7-.5-.6-1-1.1-1.6-1.7l-5.9-6 4.6-4.7 2.5-2.7c.4-.4.9-1.2.9-1.8v-.4c0-.9-.4-1.4-1.3-1.6l.2.1h-.7c-.6 0-2.3 1.6-2.7 2.1-1.5 1.5-2.5 2.9-4.5 4.4V92.6c0-1.1-.6-1.6-1.7-1.6H75c-1.1 0-2 .5-2 1.6v25.9c0 1.1.9 1.5 2 1.5h.3c1.1 0 1.7-.5 1.7-1.5v-4.6l3 2.9c.9.9 1.8 1.5 2.6 2.3.4.4 1.2.9 1.8.9h.3c1 0 1.3-.5 1.5-1.3l-.2.1v-.4zM125.1 98h-.4c-2.2 0-4.2.6-6 1.9-3 2.2-4.7 5.1-4.7 8.9v9.8c0 1.1.4 1.4 1.5 1.4h.3c1.1 0 2.2-.4 2.2-1.4v-9.2c0-2 .4-3.9 1.9-5.4 1.2-1.2 2.7-2.2 4.4-2.2 1.3 0 2.8-.3 2.8-1.9 0-1.2-.9-1.9-2-1.9zm-15.4 5c-1.1-1.8-2.6-3.2-4.5-4.1-3.5-1.7-7.2-1.9-10.6.1l-.5.3c-1.4.8-2.6 1.8-3.5 3.1-2.6 3.8-2.9 8.1-.6 12.1l.2.4c1 1.7 2.3 3.1 4 4 3.6 2 7.5 2.2 11.1.2l.3-.2c1-.6 1.2-1.6.7-2.6-.2-.4-.6-.7-1-.9h-.2c-.7-.1-2.6.7-3.3 1-1.4.2-3 .3-4.4-.2l7.6-6.6c1.1-1 2.3-2.1 3.5-3 1-.8 2-1.9 1.2-3.3v-.3zm-6.9 3.6l-8.5 7.3c-.3-.3-.5-.7-.7-1-.6-1-1-2.2-1-3.4-.1-3 1-5.5 3.7-7 2-1.2 4.2-1.4 6.4-.6 1.1.4 2.4 1.1 3.1 2.1-1 .9-2.1 1.7-3 2.6zM22 91h-.3c-1.1 0-1.7.4-1.7 1.5v8.1c-2-1.8-4.4-2.5-7.2-2.5H12c-1.9 0-3.7.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.4v.8c0 1.9.5 3.5 1.5 5.2 2.1 3.6 5.4 5.4 9.5 5.4h.8c1.9 0 3.9-.3 5.5-1.2 3.6-2.1 5.7-5.2 5.7-9.3v-17c0-1.3-.9-1.7-2-1.7zm-3.1 21.8c-1.5 2.5-3.7 3.9-6.6 3.9-1.2 0-2.4-.3-3.4-.9-2.6-1.4-4.1-3.7-4.1-6.7 0-1.1.2-2.1.7-3.1 1.4-2.9 3.7-4.5 6.9-4.5 1.6 0 3 .5 4.2 1.4 2.1 1.5 3.3 3.5 3.3 6.1.1 1.4-.3 2.6-1 3.8zM37.6 98H37c-1.9 0-3.8.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.4v.8c0 1.9.5 3.5 1.5 5.2 2.1 3.6 5.4 5.4 9.6 5.4h.8c1.9 0 3.8-.3 5.5-1.2 3.6-2.1 5.7-5.2 5.7-9.3v-.8c0-1.8-.6-3.3-1.4-4.8-2.2-4-5.7-6-10.1-6zm6.4 14.8c-1.5 2.4-3.6 3.9-6.5 3.9-1.3 0-2.6-.3-3.8-1-2.5-1.5-3.9-3.6-3.9-6.5 0-1.1.2-2.1.7-3.1 1.4-2.9 3.7-4.5 6.9-4.5 1.5 0 2.8.4 4 1.2 2.2 1.5 3.5 3.6 3.5 6.3.1 1.2-.2 2.5-.9 3.7zm24.5-13.4l-.1.1c-1.7-1.1-3.6-1.5-5.6-1.5H62c-1.9 0-3.8.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.3v.8c0 1 .2 1.9.4 2.9 1.6 5.5 5.9 8.6 11.7 8.2 1.6-.1 5.9-.6 5.9-3v-.4c0-.9-.7-1.7-1.5-1.9l-.1-.2h-.7l-.2.3c-.9.4-2.4 1.2-3.4 1.2-1.2 0-2.5 0-3.6-.6-2.9-1.4-4.6-3.7-4.6-6.9 0-1.1.2-2.1.7-3.1 1.4-2.8 3.7-4.6 6.9-4.5.6 0 1.7.3 2.3.6.5.2 1.8 1 2.4 1h.2l.1-.2c.9-.2 1.6-.9 1.6-1.8v-.4c0-.4-.2-.7-.4-1l-.2-.2zM5.8 68.2l.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.8-1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.3 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V32H66V7H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.2 2.2zM66 35h11v11H66V35zM53 9h11v11H53V9zm0 13h11v11H53V22zm0 13h11v11H53V35zM40 22h11v11H40V22zm0 13h11v11H40V35zm1.1 31.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zM28 22h10v11H28V22zm0 13h10v11H28V35zm-13 0h11v11H15V35zm2.4 38c1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8l-3.5.1c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.1 6 .1zM38 68.4c1.2 0 2.2-1 2.2-2.2 0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9 0-.3.2-.6.4-.8-.1-.1-.4-.2-.7-.2-1.2 0-2.2 1-2.2 2.2.1 1.2 1 2.2 2.2 2.2z"></path>
          </svg>
          <svg className={svgStyle} viewBox="0 0 128 128" height={56} width={56}>
            <path d="M39.5 49.2L63 35.6c.6-.3 1.3-.3 1.9 0l23.6 13.6c.6.3 1 1 1 1.6V78c0 .7-.4 1.3-1 1.7L65 93.3c-.6.3-1.3.3-1.9 0L39.5 79.7c-.6-.3-1-1-1-1.7V50.8c0-.6.4-1.3 1-1.6"></path><path d="M125.2 61.6l-28.1-49c-1-1.8-2.9-3.1-5-3.1H35.9c-2 0-3.9 1.3-5 3.1L2.8 61.5c-1 1.8-1 4 0 5.8l28.1 48.6c1 1.8 2.9 2.7 5 2.7h56.3c2 0 3.9-.9 5-2.6l28.1-48.6c1-2 1-4.1-.1-5.8m-23.3 23.5c0 .7-.4 1.4-1.1 1.7L65 107.5c-.6.4-1.4.4-2 0L27.1 86.9c-.6-.4-1.1-1-1.1-1.7V43.7c0-.7.4-1.4 1.1-1.7L63 21.3c.6-.4 1.4-.4 2 0L100.9 42c.6.4 1.1 1 1.1 1.7v41.4z"></path>
          </svg>
          <svg className={svgStyle} viewBox="0 0 128 128" height={56} width={56}>
            <path d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
          </svg>
        </div>
      </section>
        <hr className='w-[30%] relative -top-10 left-[35%] right-[35%] border-t-2 border-[#217a9270]' />
      <section id='contact' className='container max-w-3xl md:max-w-4xl lg:max-w-5xl h-screen m-auto m-px-1 flex flex-col justify-center items-center'>
        <h2 className='text-5xl py-2 font-sans font-black text-slate-300'>Entre em contato</h2>
        <p className='mt-6 text-slate-400'>Fique a vontade para entrar em contato</p>
        <div className='w-auto flex space-x-6 mt-8'>
          <a className='w-10'  target="_blank" rel="noreferrer" onClick={() => setContactSelected(contactOptions.github)} aria-label={contactOptions.github.key}>
            <svg className="hover:stroke-[#37d5ff] stroke-[#217a92] stroke-[1.5] pb-5 hover:animate-pulse" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a className='w-10' target="_blank" rel="noreferrer" onClick={() => setContactSelected(contactOptions.linkedin)} aria-label={contactOptions.linkedin.key}>
            <svg className="hover:stroke-[#37d5ff] stroke-[#217a92] stroke-[1.5] pb-5 hover:hover:animate-pulse" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a className='w-10'  target="_blank" rel="noreferrer" onClick={() => setContactSelected(contactOptions.email)} aria-label={contactOptions.email.key}>
            <svg className="hover:fill-[#37d5ff] fill-[#217a92] hover:stroke-[#37d5ff] stroke-[#217a92] stroke-[0.3] pb-5 hover:hover:animate-pulse" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 46 46" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 40Q5.8 40 4.9 39.1Q4 38.2 4 37V11Q4 9.8 4.9 8.9Q5.8 8 7 8H41Q42.2 8 43.1 8.9Q44 9.8 44 11V37Q44 38.2 43.1 39.1Q42.2 40 41 40ZM24 24.9 7 13.75V37Q7 37 7 37Q7 37 7 37H41Q41 37 41 37Q41 37 41 37V13.75ZM24 21.9 40.8 11H7.25ZM7 13.75V11V13.75V37Q7 37 7 37Q7 37 7 37Q7 37 7 37Q7 37 7 37Z"></path></svg>
          </a>
        </div> 
        <div className='w-auto flex align-middle justify-center space-x-2'>
          <code className='bg-slate-900/40 w-96 px-2 rounded-md text-center'>
            <a href={contactSelected.href} target="_blank" className='text-slate-400 hover:text-slate-200 inline-block align-middle py-1' rel="noreferrer" aria-label={contactSelected.key}>{contactSelected.value}</a>
          </code>
          <button className='w-8 h-8 p-1 bg-slate-900 hover:bg-slate-900/50 rounded-md' onClick={() => {
            Clipboard.copy(contactSelected.href)
            setIsCoped(true)
          }} aria-label='Copiar'>
            {isCoped  
            ? <svg className="fill-[#27b132] stroke-[#27b132] stroke-[0.3] pb-5" xmlns="http://www.w3.org/2000/svg"role="img" viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q27.75 4 31 5.2Q34.25 6.4 36.85 8.5L34.7 10.65Q32.5 8.9 29.8 7.95Q27.1 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 31.25 11.875 36.125Q16.75 41 24 41Q31.25 41 36.125 36.125Q41 31.25 41 24Q41 22.5 40.775 21.075Q40.55 19.65 40.1 18.3L42.4 16Q43.2 17.85 43.6 19.85Q44 21.85 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM21.05 33.1 12.8 24.8 15.05 22.55 21.05 28.55 41.75 7.85 44.05 10.1Z"/></svg>
            : <svg className="hover:fill-[#37d5ff] fill-[#217a92] hover:stroke-[#37d5ff] stroke-[#217a92] stroke-[0.3] pb-5" xmlns="http://www.w3.org/2000/svg"role="img" viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 37.95Q13.8 37.95 12.9 37.05Q12 36.15 12 34.95V6.95Q12 5.75 12.9 4.85Q13.8 3.95 15 3.95H37Q38.2 3.95 39.1 4.85Q40 5.75 40 6.95V34.95Q40 36.15 39.1 37.05Q38.2 37.95 37 37.95ZM15 34.95H37Q37 34.95 37 34.95Q37 34.95 37 34.95V6.95Q37 6.95 37 6.95Q37 6.95 37 6.95H15Q15 6.95 15 6.95Q15 6.95 15 6.95V34.95Q15 34.95 15 34.95Q15 34.95 15 34.95ZM9 43.95Q7.8 43.95 6.9 43.05Q6 42.15 6 40.95V10.8H9V40.95Q9 40.95 9 40.95Q9 40.95 9 40.95H32.7V43.95ZM15 6.95Q15 6.95 15 6.95Q15 6.95 15 6.95V34.95Q15 34.95 15 34.95Q15 34.95 15 34.95Q15 34.95 15 34.95Q15 34.95 15 34.95V6.95Q15 6.95 15 6.95Q15 6.95 15 6.95Z"/></svg>}
          </button>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home
