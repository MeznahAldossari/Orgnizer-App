import React from 'react'
// import Logo from '../assets/.png'
import Facebook from '../assets/facebook.png'
import X from '../assets/x.png'
import Linkedin from '../assets/linkedin.png'


const Footer = () => {
  return (
    <div className='bg-[#ececec] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px] max-sm:px-[4vw] max-sm:pt-[40px] max-sm:mt-[50px] '>
        <div className="w-[100%] grid grid-cols-custom gap-[80px] max-sm:grid-cols-1 max-sm:gap-[40px]">
            <div className="flex flex-col items-center justify-center gap-[20px] max-sm:items-center max-sm:">
                {/* <img className='w-[10vw] max-sm:w-[30vw]' src={Logo} alt="" /> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam vero nam labore eum, reprehenderit explicabo laborum facilis consequatur? Ducimus nihil exercitationem, blanditiis voluptas laborum alias deleniti ullam soluta tempora?</p> */}
                <div className='h-[8vh]'>
                <div className="flex justify-center  w-[50vw] mr-[15px] gap-8 cursor-pointer max-sm:w-[80vw] max-sm:justify-center ">
                    <img src={X} alt="x-icon " />
                    <img src={Facebook} alt="facebook-icon " />
                    <img src={Linkedin} alt="linkedin-icon " />
                </div>
                </div>
            </div>
        </div>
        <hr className='w-[100%] h-[2px] my-5 bg-[#797979] border-none max-sm:my-3' />
        <p className="footer-copy max-sm:text-sm">جميع الحقوق محفوظة © نظّم</p>
    </div>
)
}

export default Footer