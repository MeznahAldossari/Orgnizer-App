
import React from 'react'

import Lottie from "lottie-react";
import Main_Animations from "../assets/bgHero2.json";
import heroVideo from '../assets/videoBG.mp4';
import '../App.css'

//motion 
import {motion} from'framer-motion'
//variants
import {fadeIn} from '../variaants'

const Hero = () => {
  return (
    <div className='h-[90vh] border-b-none bg-[#f7f6f5b3] max-sm:h-[50vh] flex justify-center'>
      <div className='mainHero border-b-none bg-[#f7f6f5b3] max-sm:h-[50vh] border-none relative w-full'>
        <div className='h-[90vh] border-b-none max-sm:h-[50vh] border-none relative overflow-hidden '>
            <video className='absolute top-0 left-0 border-none min-w-full min-h-full object-cover' autoPlay muted loop>
                <source src={heroVideo} type="video/mp4" />
            </video>
            {/* Overlay color */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#6e68c4] opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount: 0.7}}>
                <h1 className="text-4xl max-sm:text-2xl font-bold">نظم معارض التوظيف بسهولة واحترافية</h1>
                <div className="flex justify-center items-center">
                  <p className="text-lg mt-5 w-[38vw] max-sm:w-[75vw] ">سواء كنت طالبًا تبحث عن فرص وظيفية، شركة تبحث عن المواهب، اداري يدير الفعاليات، نحن هنا لتلبية احتياجاتك. انضم إلينا واستكشف فرص العمل وادارة معرض التوظيف في مكان واحد</p>
                </div>
              </motion.div>
            </div>
        </div>

        <div className="custom-shape-divider-bottom-1721165418">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
      </div>
    </div>

  )
}

export default Hero