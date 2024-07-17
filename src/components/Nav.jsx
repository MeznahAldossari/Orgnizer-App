import React from 'react'
import Logo from '../assets/nazzem-logo.png'

const Nav = () => {
  return (
    <>
    <nav className='h-16 shadow-md  w-full mb-6'>
      <div className='flex items-center h-full justify-between w-full'>
        <div>
        {/* <p className='pr-12 text-[1.7rem] font-medium text-[#6e68c4]'>نظم</p> */}
        <img className='w-[10vw] h-[12vh]' src={Logo} />

        </div>
        <div>
        <button className="rounded-lg text-white bg-[#f39e4e] py-1 px-3 ml-12">تسجيل الدخول</button>

        </div>
        
        

      </div>

    </nav>
    </>
    )
}

export default Nav