import { DockertIcon, ESLintIcon, ExpressIcon, GitIcon, JavascriptIcon, TypescriptIcon } from "../../icons"

const svgStyle = 'hover:fill-[#37d5ff] fill-[#217a92] hover:stroke-[#37d5ff] stroke-[#217a92] stroke-[0] pb-5 hover:animate-pulse'

export const IconBox = () => {
    return (
        <div className='flex flex-row'>
          <JavascriptIcon className={svgStyle}/>
          <TypescriptIcon className={svgStyle}/>          
          <ExpressIcon className={svgStyle}/>
          <DockertIcon className={svgStyle}/>
          <ESLintIcon className={svgStyle}/>
          <GitIcon className={svgStyle}/>
        </div>
    )
}