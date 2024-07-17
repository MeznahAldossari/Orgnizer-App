import React from 'react'

// import Lottie from "lottie-react";
// import Main_Animations from "../assets/bgHero2.json";
// import heroVideo from '../assets/videoBG.mp4'
import '../App.css'

const HeroStudent = () => {
  return (
    <>
<div className='bg-[#5C59C2] mt-[-2%] mainStudent h-[80vh] max-sm:h-[60vh]'>
   <div className="absolute grid grid-cols-2 top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2 text-white ">
       <div className='mr-12'>
       <h1 className="text-3xl font-bold">مرحباً بك في معرض التوظيف</h1>
        <p className="text-lg mt-2">اكتشف فرص عمل جديدة وتابع طلباتك بفعالية وابحث عن أبرز الشركات بمجال اهتمامك</p>
    
        </div>
        {/* <div className=''>
       <h1 className="text-4xl font-bold">مرحباً بك في معرض التوظيف</h1>
        <p className="text-lg mt-2">اكتشف فرص عمل جديدة وتابع طلباتك بفعالية وابحث عن أبرز الشركات بمجال اهتمامك</p>
    
        </div> */}

        
    </div>
    
</div>
<div className='bg-[#5c59c2] mainStudent'>
<div class="custom-shape-divider-bottom-1721224378">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>      
</div>
</>


  )
}

export default HeroStudent