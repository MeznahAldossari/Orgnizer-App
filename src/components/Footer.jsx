import React from 'react'
// import Logo from '../assets/.png'
import Facebook from '../assets/facebook.png'
import X from '../assets/x.png'
import Linkedin from '../assets/linkedin.png'


const Footer = () => {
  return (
    <div className='bg-[#ececec] flex flex-col items-center gap-[20px] py-2 px-2 pt-4   '>
        <div className="w-[100%] grid grid-cols-custom gap-[80px] max-sm:grid-cols-1 max-sm:gap-[40px]">
            <div className="flex flex-col items-center justify-center gap-[20px] max-sm:items-center mb-2">
                {/* <img className='w-[10vw] max-sm:w-[30vw]' src={Logo} alt="" /> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam vero nam labore eum, reprehenderit explicabo laborum facilis consequatur? Ducimus nihil exercitationem, blanditiis voluptas laborum alias deleniti ullam soluta tempora?</p> */}
                <div className='h-[8vh] flex flex-col gap-1 max-sm:h-[6vh]'>
                    <div className='flex justify-center'>للتواصل معنا</div>
                    <div className="flex justify-center w-[50vw] gap-2 cursor-pointer max-sm:w-[80vw] max-sm:justify-center">
                        <a href='https://x.com/Afnan117084'><img className='w-9 h-9 max-sm:w-8 max-sm:h-8' src={X} alt="x-icon" /></a>
                        {/* <img src={Facebook} alt="facebook-icon " /> */}
                        <a href="https://www.linkedin.com/in/%D9%86%D8%B8%D9%91%D9%85-526b73319/"><img className='w-9 h-9 max-sm:w-8 max-sm:h-8' src={Linkedin} alt="linkedin-icon" /></a>
                    </div>
                </div>
            </div>
        </div>
        <hr className='w-[100%] h-[2px] bg-[#797979] border-none max-sm:my-3' />
        <p className="footer-copy max-sm:text-sm">جميع الحقوق محفوظة © نظّم</p>
    </div>
)
}

export default Footer