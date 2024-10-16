import React, {useState, useEffect} from 'react'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/nazzem-logo.png'
import { auth, db } from '../config/firebase';
import { getDoc, doc, collection } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import BgLogin from '../assets/bg-login.png';

function Login() {
  const [user, setUser] = useState({
    
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const [err, setErr]= useState('')
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');


  const changeName=  (e)=>{

    setUser({...user, "email": e.target.value})
    setErr('')
    setEmailErr('');

  }

  const changePassword =(e)=>{
    setUser({...user, "password": e.target.value})
    setErr('')
    setPasswordErr('');
  }

  const loginData = async () => {
    let hasError = false;

    if (!user.email) {
      setEmailErr('الرجاء إدخال البريد الإلكتروني.');
      hasError = true;
    }
    if (!user.password) {
      setPasswordErr('الرجاء إدخال كلمة المرور.');
      hasError = true;
    }
    if (hasError) {
      setErr(''); 
      return;
    }

    try {
      const userInfo = await signInWithEmailAndPassword(auth, user.email, user.password);
      console.log("User info:", userInfo);

      const userDocRef = doc(db, "users", userInfo.user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        console.log("User data:", userData);

        let obj = {
          id: userInfo.user.uid,
          role: userData.role
        };

        localStorage.setItem("loggedIn", JSON.stringify(obj));
        navigate('/');
      } else {
        const companyDocRef = doc(db, "CompaniesData", userInfo.user.uid);
        const companyDocSnapshot = await getDoc(companyDocRef);

        if (companyDocSnapshot.exists()) {
          const companyData = companyDocSnapshot.data();
          console.log("Company data:", companyData);

          let obj = {
            id: userInfo.user.uid,
            role: companyData.role
          };

          localStorage.setItem("loggedIn", JSON.stringify(obj));
          navigate('/');
        } else {
          console.log("Document does not exist.");
          // Handle case where neither user nor company document exists
        }
      }
    } catch (error) {
      setErr('تعذر تسجيل الدخول. البريد الإلكتروني أو كلمة المرور غير صحيحة.');
    }
  };


  return (
    <div>

    
    <img className='fixed hidden lg:block inset-0 h-full w-full ' src={BgLogin} />
	<div className='w-full h-screen flex flex-col  justify-center items-center'>
    <div className='relative flex flex-col mt-6 items-center gap-3 w-[35%] bg-white rounded-lg shadow-lg h-[75vh] max-sm:w-[90%]'>
      <img className="w-[20vw] mt-6 " src={Logo} />
      
      <div className='w-[80%] flex  flex-col items-center '>
        <i className='fa fa-user   text-purple-800 text-lg'></i>
          <input type='email' value={user.email} onChange={changeName} placeholder='البريد الالكتروني' className='pr-1 w-[90%] border-b-2 focus:outline-none focus:border-[#99d2cb]  ' />
          {emailErr && <span className='text-red-500 text-end text-[0.7rem] '>{emailErr}</span>}

      </div>

      <div className=' mt-4 w-[80%] flex flex-col items-center'>
        <i className='fa fa-lock  text-purple-800 text-lg'></i>
          <input type='password' value={user.password} onChange={changePassword} placeholder='كلمة المرور' className='pr-1 border-b-2 w-[90%] focus:outline-none focus:border-[#99d2cb] ' />
          {passwordErr && <span className='text-red-500 text-end text-[0.7rem]'>{passwordErr}</span>}

      </div>
      
    
      <div className='flex justify-end w-[20vw] max-sm:w-[65vw]'>
      </div>
      {err && (
            <span className='text-red-500 text-center w-full text-[0.7rem]'>{err}</span>
        )}
      <button onClick={loginData} className='py-3 px-20 bg-[#99d2cb] rounded-lg text-white font-bold uppercase text-lg my-6 transform hover:translate-y-1 transition-all duration-500'> تسجيل دخول</button>
      
    </div>
  </div>

  </div>





  //   // 
  //   <div className='flex justify-center items-center bg-[#f1f0f0] h-screen'>
  //       <div className='flex flex-col items-center  w-[35%] bg-white shadow-lg h-[80vh] max-sm:w-[90%]'> 
  //   <img src={Logo} className='w-[20vw] mt-[10%]' />
  // <input type='email' value={user.email} onChange={changeName} placeholder='البريد الألكتروني' className='pr-2  bg-[#f2f2f2]  pl-10 px-4 py-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'>
  // </input>
 
            
  
  //           <input type='password' value={user.password} onChange={changePassword} placeholder='كلمة المرور' className='pr-2  bg-[#f2f2f2]  pl-10 px-4 py-1 mt-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'></input>
  //           <Link to='/signup' className='w-[80%]  mt-1'>
  //           <p className='text-[0.8rem] text-start '>ليس لديك حساب؟
  //           <span className='pr-2 underline text-[0.8rem]'>تسجيل جديد</span>
  //           </p>
            
  //           </Link>

  //        <button onClick={loginData} className='text-white w-[80%] py-1 rounded-lg mt-6  bg-[#99D2CB]'>تسجيل الدخول</button>
       
  //       </div>
      
  //   </div>
  )
}

export default Login