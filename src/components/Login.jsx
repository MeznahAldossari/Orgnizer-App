import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='flex justify-center items-center bg-[#f1f0f0] h-screen'>
        <div className='flex flex-col justify-center items-center  w-[35%] bg-white shadow-lg h-[80vh] max-sm:w-[90%]'> 
    
  <input type='text' placeholder='البريد الألكتروني' className='pr-2  bg-[#f2f2f2]  pl-10 px-4 py-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'>
  </input>
 
            
  
            <input type='password' placeholder='كلمة المرور' className='pr-2  bg-[#f2f2f2]  pl-10 px-4 py-1 mt-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'></input>
            <Link to='/signup' className='w-[80%]  mt-1'>
            <p className='text-[0.8rem] text-start '>ليس لديك حساب؟
            <span className='pr-2 underline text-[0.8rem]'>تسجيل جديد</span>
            </p>
            
            </Link>

         <button className='text-white w-[80%] py-1 rounded-lg mt-6  bg-[#99D2CB]'>تسجيل الدخول</button>
       
        </div>
      
    </div>
  )
}

export default Login
