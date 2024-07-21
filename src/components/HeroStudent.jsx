import React from 'react'

// import Lottie from "lottie-react";
// import Main_Animations from "../assets/bgHero2.json";
// import heroVideo from '../assets/videoBG.mp4'
import '../App.css'
import HeroImg from '../assets/header-img.png'

//motion 
import {motion} from'framer-motion'
//variants
import {fadeIn} from '../variaants'

const HeroStudent = () => {
  return (
    <>
    <div className="relative w-full h-[70vh] bg-[#6e68c4] max-sm:h-[60vh]">      
         <div>
           <motion.div
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount: 0.7}}
           ><img  className="h-[67vh] w-[35vw] max-sm:w-[70vw] max-sm:h-[30vh]" src={HeroImg} /></motion.div>
        </div>       
        <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
        className="absolute inset-0 flex flex-col justify-end items-center md:flex-row max-sm:items-end ">
            <div className="flex flex-col items-center justify-start ml-28 md:w-1/2 mb-4 md:mb-2 max-sm:text-center max-sm:w-[70vw] max-sm:h-[27vh]">
                <h1 className="text-[#ffffff] font-bold text-4xl md:text-4xl leading-tight mb-2 max-sm:text-3xl ">مرحباً بك في معرض <span className='text-[#99dccb] font-extrabold'>طويق</span> للتوظيف</h1>
                <p className="text-[#ffffff] text-center font-regular text-xl mb-8 mt-4 w-[30vw] max-sm:w-[45vw] max-sm:text-base ">اكتشف فرص عمل جديدة وتابع طلباتك بفعالية وابحث عن أبرز الشركات بمجال اهتمامك</p>
            </div>
        </motion.div>
        <div className="custom-shape-divider-bottom-1721165418">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
     </div>
    </>


  )
}

export default HeroStudent