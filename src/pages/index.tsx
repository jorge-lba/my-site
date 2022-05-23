import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Clipboard from 'clipboard'
import { MakePersonPresentation } from '../components/MakePersonPresentation'
import { IconBox } from '../components/IconBox'

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
        <MakePersonPresentation 
          salutation='Olá, meu nome é'
          name='Jorge Alegretti'
          message='Sou desenvolvedor back-end.'
          description='Atualmente estou focado em construir aplicações bem estruturadas seguindo as melhores práticas de mercado, para você ter um negócio sustentável.'
        />              
        <IconBox/>
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
