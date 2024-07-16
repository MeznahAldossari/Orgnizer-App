import React from 'react'

import Lottie from "lottie-react";
import Main_Animations from "../assets/bgHero2.json";


const Hero = () => {
  return (
    <div className='h-[65vh] flex justify-center items-center '>
      <div className='grid grid-cols-2 w-[100%]'>
      {/* <svg viewBox="0 0 170 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#6E68C4" d="M42.4,-39.7C55.3,-29.4,66.5,-14.7,67.5,1C68.5,16.7,59.3,33.4,46.3,46.5C33.4,59.7,16.7,69.3,2.4,66.9C-12,64.6,-23.9,50.2,-36.6,37.1C-49.3,23.9,-62.7,12,-65.7,-3C-68.7,-17.9,-61.2,-35.9,-48.5,-46.1C-35.9,-56.4,-17.9,-59,-1.6,-57.4C14.7,-55.8,29.4,-49.9,42.4,-39.7Z" transform="translate(100 100)" />
</svg> */}
<div className='mt-[20%] mr-12'>
  <p className='text-[2rem] font-bold text-[#6e68c4] w-[60%]'>نظم معارض التوظيف بسهولة واحترافيه</p>
  <p className='text-[1.2rem] w-[85%] mt-10'>منصة متكاملة لأدارة وتنظيم معارض التوظيف. وتسهيل التواصل بين الشركات والطلاب</p>
</div>

<div className='mt-12  ml-0 justify-center flex  items-start mr-4 h-auto'>
<Lottie animationData={Main_Animations} style={{width:"85%"}}/>


</div>

  </div>
    

    </div>

  )
}

export default Hero