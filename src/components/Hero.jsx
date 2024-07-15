import React from 'react'
import HeroImg from '../assets/hero-img.png'
const Hero = () => {
  return (
    <>
    <section className="bg-[#F3F6FF] py-10 sm:py-16 lg:py-24 h-[80vh]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-start grid-cols-1 gap-10 lg:grid-cols-2">
                <div className='w-[35vw] pl-6 max-sm:w-[90vw]'>
                    <h1 className="text-4xl font-bold text-[#5C59C2] max-sm:text-3xl">نظّم معارض التوظيف بسهولة واحترافية</h1>
                    <p className="mt-8 text-base text-black sm:text-md">منصة متكاملة لإدارة وتنظيم معارض التوظيف, تسهل التواصل بين الشركات والطلاب </p>
                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        {/* <p title="" className="flex items-center justify-center w-[10vw] h-[8vh] px-10 py-4 text-lg font-bold text-[#ffffff] transition-all duration-200 bg-[#99D2CB] hover:bg-[#a5ddd7] rounded-full max-sm:w-[50vw] max-sm:h-[8vh] max-sm:text-sm" role="button"> ابدأ الآن </p> */}
                    </div>
                </div>
                <div>
                    <img className="w-full h-full" src={HeroImg} alt="header-image" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero