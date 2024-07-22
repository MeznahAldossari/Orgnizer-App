import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logOutIcon from '../assets/logoutbutton.png'
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from "react-icons/ri";

import Logo from '../assets/nazzem-logo.png'

import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
  const [bool ,setBool] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{

  },[bool])
  const removeLocal = ()=>{
    setBool(false)
    localStorage.removeItem("loggedIn");
    setBool(true)


    navigate("/")

  }

  return (
    <>
<nav className='h-16 shadow-md w-full max-sm:mb-0 max-sm:overflow-x-hidden'>
    <div className='flex w-full justify-between md:hidden h-12' max-sm:overflow-x-hidden>
      <div className='mt-4 pl-2  w-[80%] float-right'>
    <Link to="/">
        <p className='pr-4 text-[1.3rem] font-medium text-[#6e68c4]'>نظم</p>
    </Link>
      </div>
    <div className="drawer flex justify-end  drawer-end float-left md:hidden  h-full z-50">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

    <div className="drawer-content flex flex-col mt-2  pl-4">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="drawer-button bg-white h-[3vh] z-40 btn border-none">
        <GiHamburgerMenu style={{ color: "black" }} />
      </label>
    </div>
    <div className="drawer-side mt-16">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className=" drawer-overlay"></label>
      <ul className="menu text-base-content w-full m-auto flex flex-col items-center pr-10 min-h-full p-4">
  {/* Sidebar content here */}
  <li className="mt-24 flex items-center text-[1.5rem] text-white">
    <Link to='/'>
      الرئيسية
    </Link>
  </li>
  {(getLocal === undefined || !getLocal) && (
    <>
      <li className='md:hidden flex items-center mt-1 text-white'>
        <Link to="/Login">
          <span className="rounded-lg text-white bg-[#f39e4e] py-1 px-3 ml-12">
            تسجيل الدخول
          </span>
        </Link>
      </li>
    </>
  )}

  {getLocal !== undefined && getLocal && getLocal.role === "student" && (
    <>
      <li className="rounded-lg md:hidden mt-4 flex items-center text-[1.5rem] text-white py-1 px-3 ml-4">
        <Link to="/Submissions">
          تقديمي
        </Link>
      </li>
      <li className="rounded-lg mt-4 flex items-center text-[1.5rem] text-white py-1 px-3 ml-4">
        <Link to="/StudentProfile">
          الملف الشخصي
        </Link>
      </li>
      {/* <li onClick={removeLocal} className="rounded-lg mt-4 flex items-center text-[1.5rem] text-white py-1 px-3 ml-4">
        تسجيل الخروج
      </li> */}
    </>
  )}

  {getLocal !== null  && (
    <li onClick={removeLocal} className="rounded-lg mt-4 flex items-center text-[1.5rem] text-white py-1 px-3 ml-4">
      تسجيل الخروج
    </li>
  )}
</ul>

    </div>
  </div>
</div>
      <div className='flex items-center h-full justify-between w-full max-sm:hidden'>

        <div>
        {/* <p className='pr-12 text-[1.7rem] font-medium text-[#6e68c4]'>نظم</p> */}
        <Link to='/'>
        <img className='w-[10vw] h-[12vh]' src={Logo} />
    </Link>
    

        </div>
        {getLocal ==undefined && !getLocal &&(
        <div>
          <Link to="/login"><button className="rounded-lg text-white bg-[#f39e4e] py-1 px-3 ml-7 mb-1">تسجيل الدخول</button>
          </Link>
        </div>
        
        )}

      {getLocal !==undefined && getLocal && getLocal.role === "student" &&(
        <>
        {console.log("hello")}
        <div className='flex gap-2 items-center'>
          
      
         <div>
         <Link to="/Submissions"> <p className="rounded-lg text-[#6e68c4] hover:text-[#f39e4e] py-1 px-3 ">  تقديمي</p>
         </Link>

       </div>
       <div className=''>
          <Link to="/StudentProfile"> <p className="rounded-lg text-[#6e68c4] hover:text-[#f39e4e] py-1 px-3 ml-4"> الملف الشخصي</p>
          </Link>
        </div>
       

        </div>
</>
        
        
        )}

{getLocal !== null  && (
    <li onClick={removeLocal} className="rounded-lg flex items-center cursor-pointer text-[1.2rem] text-[#6e68c4] hover:text-[#f39e4e] py-1 px-3 ml-4 ">
      <RiLogoutCircleLine fill='#6e68c4' size={27} className='mb-1 cursor-pointer' />
    </li>
  )}
  {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box">
        <div className='flex flex-col justify-center items-center gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 512 512">
            <path fill="#32BEA6" d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"></path><path fill="#FFF" d="M392.6,172.9c-5.8-15.1-17.7-12.7-30.6-10.1c-7.7,1.6-42,11.6-96.1,68.8c-22.5,23.7-37.3,42.6-47.1,57c-6-7.3-12.8-15.2-20-22.3C176.7,244.2,152,229,151,228.4c-10.3-6.3-23.8-3.1-30.2,7.3c-6.3,10.3-3.1,23.8,7.2,30.2c0.2,0.1,21.4,13.2,39.6,31.5c18.6,18.6,35.5,43.8,35.7,44.1c4.1,6.2,11,9.8,18.3,9.8c1.2,0,2.5-0.1,3.8-0.3c8.6-1.5,15.4-7.9,17.5-16.3c0.1-0.2,8.8-24.3,54.7-72.7c37-39.1,61.7-51.5,70.3-54.9c0.1,0,0.1,0,0.3,0c0,0,0.3-0.1,0.8-0.4c1.5-0.6,2.3-0.8,2.3-0.8c-0.4,0.1-0.6,0.1-0.6,0.1l0-0.1c4-1.7,11.4-4.9,11.5-5C393.3,196.1,397,184.1,392.6,172.9z"></path>
            </svg>
          <h3 className="font-bold text-lg">هل انت متأكد من تسجيل الخروج؟ </h3>
        </div>
        <div className="modal-action">
          <form method="dialog" className='gap-6'>               
            <button className="btn ml-1 bg-[#99D2CB] text-white" >نعم</button>
            <button className="btn bg-[#99D2CB] text-white">لا</button>
          </form>
        </div>
      </div>
  </dialog>      */}
        

      </div>

    </nav>
    </>
    )
}

export default Nav