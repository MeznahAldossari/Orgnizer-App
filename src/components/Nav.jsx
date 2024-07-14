import React from 'react'
import Logo from '../assets/Logo.png'

const Nav = () => {
  return (
    <>
    <nav className="sticky top-0 z-10 w-full px-4 py-2 text-white bg-[#ffffff] border rounded-none shadow-md bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
            <img src={Logo} className='w-[11vw] h-[6vh] max-sm:w-[20vw]' alt="Logo" />
          <div className="flex items-center gap-4">
            <button className="bg-[#3763e0] relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center font-sans text-xs font-medium uppercase text-inherit transition-all lg:hidden" type="button">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </span>
            </button>
            <div className={`flex-col lg:flex-row lg:items-center lg:gap-6 lg:flex`}>
              {/* Uncomment and adjust these lines if needed */}
              {/* <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-[#000000] hover:text-[#3763e0]">
                  <a href="#" className="flex items-center">Pages</a>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-[#000000] hover:text-[#3763e0]">
                  <a href="#" className="flex items-center">Account</a>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-[#000000] hover:text-[#3763e0]">
                  <a href="#" className="flex items-center">Blocks</a>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-[#000000] hover:text-[#3763e0]">
                  <a href="#" className="flex items-center">Docs</a>
                </li>
              </ul> */}
              <div className="flex items-center gap-x-1">
                  <button
                    className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span>Log In</span>
                  </button>
                  <button
                    className="select-none rounded-lg bg-gradient-to-tr from-[#3763e0] to-[#4473f3] py-2 px-4 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span>Sign In</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
    )
}

export default Nav