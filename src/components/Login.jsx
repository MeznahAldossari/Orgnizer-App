import React, {useState, useEffect} from 'react'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/nazzem-logo.png'
import { auth, db } from '../config/firebase';
import { getDoc, doc, collection } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import BgLogin from '../assets/bg-login.png'

function Login() {
  const [user, setUser] = useState({
    
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const [err, setErr]= useState('')


  const changeName=  (e)=>{

    setUser({...user, "email": e.target.value})
    setErr('')

  }

  const changePassword =(e)=>{
    setUser({...user, "password": e.target.value})
    setErr('')
  }

  const loginData = async () => {
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
      // Handle error gracefully
    }
  };
  

  return (
    <div className='flex justify-center items-center bg-[#f1f0f0] h-screen'>
        <div className='flex flex-col items-center  w-[35%] bg-white shadow-lg h-[80vh] max-sm:w-[90%]'> 
    <img src={Logo} className='w-[20vw] mt-[10%]' />
  <input type='email' value={user.email} onChange={changeName} placeholder='البريد الألكتروني' className='pr-2  bg-[#f2f2f2]  pl-10 px-4 py-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'>
  </input>
 
            
  
            <input type='password' value={user.password} onChange={changePassword} placeholder='كلمة المرور' className='pr-2  bg-[#f2f2f2]  pl-10 px-4 py-1 mt-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'></input>
            <Link to='/signup' className='w-[80%]  mt-1'>
            <p className='text-[0.8rem] text-start '>ليس لديك حساب؟
            <span className='pr-2 underline text-[0.8rem]'>تسجيل جديد</span>
            </p>
            
            </Link>

         <button onClick={loginData} className='text-white w-[80%] py-1 rounded-lg mt-6  bg-[#99D2CB]'>تسجيل الدخول</button>
       
        </div>
      
    </div>
  )
}

export default Login