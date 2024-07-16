import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className='flex justify-center items-center bg-[#f4f4f4] h-screen'>
        <div className='flex flex-col justify-center items-center  w-[35%] bg-white shadow-lg h-[80vh]'> 
        <input type='text' placeholder='الأسم' className='pr-2  bg-[#f6f6f6] pl-10 px-4 py-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'></input>

  <input type='text' placeholder='البريد الألكتروني' className='pr-2  bg-[#f6f6f6]  pl-10 px-4 py-1 max-sm:w-[90%] mt-1 border border-gray-300 rounded-lg w-[80%]'>
  </input>
 
            
  
            <input type='password' placeholder='كلمة المرور' className='pr-2  bg-[#f6f6f6]  pl-10 px-4 py-1 mt-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'></input>
            <Link to='/signup' className='w-[80%]  mt-1'>
            <p className='text-[0.8rem] text-start '> لديك حساب؟
            <span className='pr-2 underline text-[0.8rem]'>تسجيل الدخول</span>
            </p>
            
            </Link>

         <button className='text-white w-[80%] py-1 rounded-lg mt-10  bg-[#99D2CB]'>تسجيل جديد</button>
       
        </div>
      
    </div>
  )
}

export default SignUp
