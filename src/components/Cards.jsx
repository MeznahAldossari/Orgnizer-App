
import React, { useEffect , useState} from 'react'
import Pic from '../assets/pic1.jpg'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

//motion 
import {motion} from'framer-motion'
//variants
import {fadeIn} from '../variaants'

const Cards = () => {
    const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
    const [checkRole, setCheckRole] = useState('')
    const [bool ,setBool] = useState(false)
    const navigate = useNavigate()
    const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'EventDetails'));
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

    useEffect(()=>{
        console.log("hello"+ bool)
        console.log("hello 2"+ getLocal)
        if(getLocal ===undefined || !getLocal || getLocal ===null){
            setBool(true)

        }
    },[bool])
    const NavToDetails = (eventId) => {
        navigate(`/EventInfo/${eventId}`);
      };



  return (
<div className='flex flex-col w-full bg-[#ffffff]'>
    <div className='flex'>
      {(getLocal !== undefined && getLocal && getLocal.role === "admin" &&
      <>
       <Link to='/AddEvents'>
       <button className='px-4 py-1 mt-6 max-sm:mt-0 text-white rounded-lg mr-12 bg-[#f39e4e] flex'>اضافة معرض
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mt-1 ">
         <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
       </svg>
       </button>
       </Link>
       </>
       )}
    </div>

      </div>
      <div className='flex justify-center mt-4'>
        <div className='grid mt-12 w-[90%] grid-cols-3 place-items-center max-sm:grid-cols-1 max-sm:gap-6'>
          {events.map(event => (
            <div key={event.id} className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw] max-sm:h-[50vh]'>
              <img src={event.imageUrl} alt={event.eventName} className='max-sm:h-[28vh] w-[100%] h-[33vh] rounded-t-md' />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">{event.eventName}</h3>
                <div className="flex flex-col justify-start items-start gap-3 pt-2">
                <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                    <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 5H4v10h12V7z" clipRule="evenodd"></path></svg>
                    <span>تاريخ المعرض: {event.startDate}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V10a.5.5 0 01-.146.354l-2 2a.5.5 0 11-.708-.708L9.793 10H9V7.5a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                <span>الوقت: {event.startTime} - {event.endTime} </span>
            </div>
           
                </div>
                <div className="flex justify-end items-center mt-4">
                <p onClick={() => NavToDetails(event.id)} className={`text-[#ffffff] font-bold text-[0.9rem] bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer py-2 px-4 rounded-lg`}>
                    التفاصيل
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    <div className='flex justify-center mt-4'>
      <div className='grid mt-12 mb-16 w-[90%] grid-cols-3 place-items-center gap-y-16 max-sm:grid-cols-1 max-sm:gap-6 '>

        {/* div card start here */}
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}

        className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw] max-sm:h-[50vh]'>
           <img src='https://media.licdn.com/dms/image/D4D0BAQESPMoQfW3MFA/company-logo_200_200/0/1719256028341/tuwaiqacademy_logo?e=2147483647&v=beta&t=QbYFSW5ik2LK_h7dq2LCrH5ZcMYIbbditOU3TVi1dKo' className='max-sm:h-[28vh] w-[100%] h-[33vh] object-cover rounded-t-md'></img>
           <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">معرض طويق للتوظيف  </h3>
                <div className="flex flex-col justify-start items-start gap-3 pt-2">
                    <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                        <path fillRule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clipRule="evenodd" />
                        </svg>
                        <span> 20 يوليو 2024 - 23 يوليو 2024</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                        <span> 4:00 م - 8:00 م</span>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-4 pb-4 ">
                    <p onClick={NavToDetails} className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}
                    >التفاصيل</p>
                </div>
            </div>
        </motion.div>
        {/* div card end here */}

        {/* div card start here */}
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
        className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw]  max-sm:h-[50vh]'>
           <img src='https://media.licdn.com/dms/image/D4D0BAQESPMoQfW3MFA/company-logo_200_200/0/1719256028341/tuwaiqacademy_logo?e=2147483647&v=beta&t=QbYFSW5ik2LK_h7dq2LCrH5ZcMYIbbditOU3TVi1dKo' className='max-sm:h-[28vh] w-[100%]  h-[33vh] rounded-t-md'></img>
           <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">معرض طويق للتوظيف  </h3>
                <div className="flex flex-col justify-start items-start gap-3 pt-2">
                    <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                        <path fillRule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clipRule="evenodd" />
                        </svg>
                        <span> 20 يوليو 2024 - 23 يوليو 2024</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                        <span> 4:00 م - 8:00 م</span>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-4">
                    <p onClick={NavToDetails} className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}
                    >التفاصيل</p>
                </div>
            </div>
        </motion.div>
        {/* div card end here */}

        {/* div card start here */}
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
        className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw]  max-sm:h-[50vh]'>
           <img src='https://media.licdn.com/dms/image/D4D0BAQESPMoQfW3MFA/company-logo_200_200/0/1719256028341/tuwaiqacademy_logo?e=2147483647&v=beta&t=QbYFSW5ik2LK_h7dq2LCrH5ZcMYIbbditOU3TVi1dKo' className='max-sm:h-[28vh] w-[100%]  h-[33vh] rounded-t-md'></img>
           <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">معرض طويق للتوظيف  </h3>
                <div className="flex flex-col justify-start items-start gap-3 pt-2">
                    <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                        <path fillRule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clipRule="evenodd" />
                        </svg>
                        <span> 20 يوليو 2024 - 23 يوليو 2024</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                        <span> 4:00 م - 8:00 م</span>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-4">
                    <p onClick={NavToDetails} className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}
                    >التفاصيل</p>
                </div>
            </div>
        </motion.div>
        {/* div card end here */}

        {/* div card start here */}
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
        className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw]  max-sm:h-[50vh]'>
           <img src='https://media.licdn.com/dms/image/D4D0BAQESPMoQfW3MFA/company-logo_200_200/0/1719256028341/tuwaiqacademy_logo?e=2147483647&v=beta&t=QbYFSW5ik2LK_h7dq2LCrH5ZcMYIbbditOU3TVi1dKo' className='max-sm:h-[28vh] w-[100%]  h-[33vh] rounded-t-md'></img>
           <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">معرض طويق للتوظيف  </h3>
                <div className="flex flex-col justify-start items-start gap-3 pt-2">
                    <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                        <path fillRule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clipRule="evenodd" />
                        </svg>
                        <span> 20 يوليو 2024 - 23 يوليو 2024</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                        <span> 4:00 م - 8:00 م</span>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-4">
                    <p onClick={NavToDetails} className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}
                    >التفاصيل</p>
                </div>
            </div>
        </motion.div>
        {/* div card end here */}

        {/* div card start here */}
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.7}}
        className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw]  max-sm:h-[50vh]'>
           <img src='https://media.licdn.com/dms/image/D4D0BAQESPMoQfW3MFA/company-logo_200_200/0/1719256028341/tuwaiqacademy_logo?e=2147483647&v=beta&t=QbYFSW5ik2LK_h7dq2LCrH5ZcMYIbbditOU3TVi1dKo' className='max-sm:h-[28vh] w-[100%]  h-[33vh] rounded-t-md'></img>
           <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">معرض طويق للتوظيف  </h3>
                <div className="flex flex-col justify-start items-start gap-3 pt-2">
                    <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                        <path fillRule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clipRule="evenodd" />
                        </svg>
                        <span> 20 يوليو 2024 - 23 يوليو 2024</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-6 h-6 mr-1">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                        <span> 4:00 م - 8:00 م</span>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-4">
                    <p onClick={NavToDetails} className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}
                    >التفاصيل</p>
                </div>
            </div>
        </motion.div>
        {/* div card end here */}

      </div>
    </div>
</div>
  )}

export default Cards