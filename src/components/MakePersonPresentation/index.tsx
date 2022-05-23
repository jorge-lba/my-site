export const MakePersonPresentation = (props: PropsMakePersonPresentation) => {
  return (
    <header>
      <span className='text-lg font-mono text-[#37d5ff]'>{props.salutation}</span>
      <h2 className='text-5xl md:text-6xl lg:text-7xl py-2 font-sans font-black text-slate-300'>
        {props.name}
      </h2>
      <h1 className='text-5xl md:text-6xl lg:text-7xl font-sans font-black pb-8 text-slate-400'>
        {props.message}
      </h1>
      <div className='flex mb-8'>
          <div className='container max-w-xl text-base'>
            <span className='mt-10 text-slate-400'>
              {props.description}
            </span>          
          </div>
      </div>
    </header>
  )
}

type PropsMakePersonPresentation = {
  salutation: string
  name: string
  message: string
  description: string
}