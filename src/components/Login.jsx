import React, {useState, useEffect} from 'react'
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const [err, setErr]= useState('')


  const changeName= (e)=>{

    setUser({...user, "name": e.target.value})
    setErr('')

  }

  const changePassword =(e)=>{
    setUser({...user, "password": e.target.value})
    setErr('')
  }

  const loginData = ()=>{
    setErr('')
    if(user.name.trim() !=='' && user.password.trim() !==''){
        axios.get('https://665736969f970b3b36c8658a.mockapi.io/form')
      .then(function (response) {
        // handle success
        const getUser = response.data.find((userData)=>userData.email === user.name && userData.password === user.password )
        if(getUser){
          let obj= {
            "id": getUser.id,
            "role":getUser.role
          }
          localStorage.setItem("loggedIn", JSON.stringify(obj))
          navigate('/')
        }else{
          setErr('Please, Make Sure to Enter Correct Data')
        }
        
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
      }else{
        setErr('Please, Fill All Field')
      }
}


  return (
    <div className='flex justify-center items-center bg-[#f1f0f0] h-screen'>
        <div className='flex flex-col justify-center items-center  w-[35%] bg-white shadow-lg h-[80vh] max-sm:w-[90%]'> 
    
  <input type='email' placeholder='البريد الألكتروني'  onChange={changeName} className='pr-2  bg-[#f2f2f2]  pl-10 px-4 py-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'>
  </input>
 
            
  
            <input type='password' onChange={changePassword} placeholder='كلمة المرور' className='pr-2  bg-[#f2f2f2]  pl-10 px-4 py-1 mt-1 max-sm:w-[90%]  border border-gray-300 rounded-lg w-[80%]'></input>
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
