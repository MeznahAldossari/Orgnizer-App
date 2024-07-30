import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logOutIcon from '../assets/logoutbutton.png'
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/nazzem-logo.png'

import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";

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
      <Link to={`/StudentProfile/${getLocal.id}`}>
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
       <Link to={`/StudentProfile/${getLocal.id}`}> <p className="rounded-lg text-[#6e68c4] hover:text-[#f39e4e] py-1 px-3 ml-4"> الملف الشخصي</p>
          </Link>
        </div>
       

        </div>
</>
        
        
        )}

{getLocal !== null && (
  <li
    onClick={() => document.getElementById('my_modal_10').showModal()}
    className="rounded-lg flex items-center cursor-pointer text-[1.2rem] text-black py-1 px-3 ml-4"
  >
    <RiLogoutCircleLine fill='#6e68c4' size={23} className='mb-1 cursor-pointer' />
    <dialog id="my_modal_10" className="modal modal-bottom sm:modal-middle">
     

        <div className="modal-box h-[30vh] flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center items-center gap-4'>
  <h3 className="font-bold text-lg">هل انت متأكد من تسجيل الخروج؟</h3>
          

          
          <form method="dialog" className='flex justify-center items-center gap-2 w-full '>
            <button
              type="button"
              onClick={() => {
                removeLocal();
                document.getElementById('my_modal_10').close();
              }}
              className="rounded-lg bg-red-600 text-white hover:bg-red-500 w-[5vw] h-[6vh] max-sm:w-[12vw] max-sm:h-[4vh]"
            >
              نعم
            </button>
            <button className="rounded-lg  text-black border border-[#a3a3a3] hover:bg-[#f0f0f0] w-[5vw] h-[6vh] max-sm:w-[12vw] max-sm:h-[4vh]">لا</button>

          </form>
        </div>
      </div>
    </dialog>
  </li>
  )}
        
        

      </div>

    </nav>
    </>
    )
}

export default Nav