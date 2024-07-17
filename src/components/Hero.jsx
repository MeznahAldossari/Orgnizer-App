
import React from 'react'

import Lottie from "lottie-react";
import Main_Animations from "../assets/bgHero2.json";
import heroVideo from '../assets/videoBG.mp4';
import '../App.css'

const Hero = () => {
  return (
    <div className='h-[90vh] mt-[-1.5%] bg-slate-400 flex justify-center '>
  <div className='mainHero border-none relative w-full'>
    <div className='h-[90vh] bg-black relative overflow-hidden'>
        <video className='absolute top-0 left-0 min-w-full min-h-full object-cover' autoPlay muted loop>
            <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay color */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#6e68c4] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl font-bold">نظم معارض التوظيف بسهولة واحترافية</h1>
        <p className="text-lg">Additional text or description</p>
    </div>
    </div>

    <div className="custom-shape-divider-bottom-1721165418">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
    </div>
</div>


     
      {/* <div className='grid grid-cols-2 w-[100%]'>
     
<div className='mt-[20%] mr-12'>
  <p className='text-[2rem] font-bold text-[#6e68c4] w-[60%]'>نظم معارض التوظيف بسهولة واحترافيه</p>
  <p className='text-[1.2rem] w-[85%] mt-10'>منصة متكاملة لأدارة وتنظيم معارض التوظيف. وتسهيل التواصل بين الشركات والطلاب</p>
</div>

<div className='mt-12  ml-0 justify-center flex  items-start mr-4 h-auto'>
<Lottie animationData={Main_Animations} style={{width:"85%"}}/>


</div>

  </div> */}
    

    </div>

  )
}

export default Hero