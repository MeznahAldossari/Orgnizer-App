
import React, { useEffect , useState} from 'react'
import Pic from '../assets/pic1.jpg'
import Lottie from "lottie-react";
import { json, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//motion 
import {motion} from'framer-motion'
//variants
import {fadeIn} from '../variaants'

import { auth, db } from '../config/firebase';
import { getDoc, doc, collection, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Cards = () => {
    const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
    // const [checkRole, setCheckRole] = useState('')
    const [bool ,setBool] = useState(false)
    const [studentCategory,setStudentCategory] = useState([])
    const navigate = useNavigate()

    const [companyCard, setCompanyCard] = useState([])
    const [adminCard, setadminCard] = useState([])
    const [defaultCard, setDefaultCard] = useState([])


    useEffect(()=>{
        getEvents()
        
        if(getLocal ===undefined || !getLocal || getLocal ===null){
            setBool(true)

        }
    },[])

//     useEffect(()=>{
//         getEvents()
// }, [])

const getEvents = async () => {
    let arr = []
    try {

        if(!getLocal || getLocal === undefined || getLocal=== null){
           
                const eventCollectionRef = collection(db, "EventDetails");
                const snapshot = await getDocs(eventCollectionRef);
    
                const allEvents = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setDefaultCard(allEvents)
            }
       else if(getLocal){
            if(getLocal.role ==="company"){

                const eventCollectionRef = collection(db, "EventDetails");
                const snapshot = await getDocs(eventCollectionRef);
                // setadminCard(JSON.stringify(snapshot))
               
        
                const allEvents = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // console.log(JSON.stringify(allEvents))
        
                for (const event of allEvents) {
                    const myCompaniesRef = collection(db, `EventDetails/${event.id}/myCompanies`);
                    const myCompaniesSnapshot = await getDocs(myCompaniesRef);
        
                    const myCompanies = myCompaniesSnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
        
        
                    const companyFound = myCompanies.find(company => company.id === getLocal.id);
                    console.log("hiiiiiiii"+ JSON.stringify(companyFound))
                    if (companyFound) {
                        arr.push({
                            "EventId":event.id,
                            "eventName": event.eventName,
                            "imageUrl": event.imageUrl,
                            "details":event.details,
                            "startDate":event.startDate,
    
                            
                        })
                        console.log(`Company found in event ${event.id}`);
                    }
                }
                setCompanyCard(arr)
    
    
    
            }else if(getLocal.role ==="student"){

                
    
                const eventDetailsRef = doc(db, 'users', getLocal.id);
                const eventDetailsSnapshot = await getDoc(eventDetailsRef);
          
                if (eventDetailsSnapshot.exists()) {
                    const studentInfo = eventDetailsSnapshot.data()
                    const splitCategory = studentInfo.category.split(" ");
                    console.log("####"+ splitCategory[1])
                    
                    const eventCollectionRef = collection(db, "EventDetails");
                    const snapshot = await getDocs(eventCollectionRef);
                    const allEvents = snapshot.docs
                    .filter(doc => {
                      const eventData = doc.data();
                      console.log("@@@@"+ eventData.mainCategory)
                      if(eventData.mainCategory && eventData.mainCategory.length>0){
                        const joiningValues = eventData.mainCategory.join()
                        const splitCategoyEvent = joiningValues.split(",");
                        let findCategory = splitCategoyEvent.find((e)=> e.includes(splitCategory[1]))
                        return findCategory;
                      }
                    
                      
                    })
                    .map(doc => ({
                      id: doc.id,
                      ...doc.data()
                    }));
                    setStudentCategory(allEvents)

                    console.log("hello"+ JSON.stringify(allEvents))
                    
                }
            }else if (getLocal.role === "admin"){
                const eventCollectionRef = collection(db, "EventDetails");
                const snapshot = await getDocs(eventCollectionRef);
    
                const allEvents = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log(JSON.stringify(allEvents))
                setadminCard(allEvents)
            }

        }
       
     
    } catch (error) {
        console.error("Error fetching events:", error);
        // Handle errors appropriately
    }
};


    const NavToDetails= ()=>{
       
            if(!bool){
                navigate("/EventInfo")
            }
        
     

    }



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

    <div className='flex justify-center mt-4'>
      <div className='grid mt-12 mb-16 w-[90%] grid-cols-3 place-items-center gap-y-16 max-sm:grid-cols-1 max-sm:gap-6 '>

      {getLocal ? (
    <>
        {/* {console.log(JSON.stringify(adminCard))} */}
        {getLocal.role === "admin" && Array.isArray(adminCard) ? (
            adminCard.map((item, index) => (
                <div key={index} className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw] max-sm:h-[50vh]'>
                    <img src={item.imageUrl} className='max-sm:h-[28vh] w-[100%] h-[33vh] rounded-t-md' />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">{item.eventName}</h3>
                        <div className="flex flex-col justify-start items-start gap-3 pt-2">
                            <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                                <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 5H4v10h12V7z" clipRule="evenodd"></path></svg>
                                <span>التاريخ:   {item.startDate}</span>
                            </div>
                            <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                                <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V10a.5.5 0 01-.146.354l-2 2a.5.5 0 11-.708-.708L9.793 10H9V7.5a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                                <span>الوقت: 6:00 مساءً</span>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-4">
                          <Link to={`/EventInfo/${item.id}`}>

                          <p className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}>
                                التفاصيل
                            </p>
                          </Link>
                           
                        </div>
                    </div>
                </div>
            ))
        ) : getLocal.role === "company" ? (
            <>
                {companyCard !== undefined && (
                    companyCard.map((item, index) => (
                        <div key={index} className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw] max-sm:h-[50vh]'>
                            <img src={item.imageUrl} className='max-sm:h-[28vh] w-[100%] h-[33vh] rounded-t-md' />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">{item.eventName}</h3>
                                <div className="flex flex-col justify-start items-start gap-3 pt-2">
                                    <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                                        <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 5H4v10h12V7z" clipRule="evenodd"></path></svg>
                                        <span>التاريخ:   {item.startDate}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                                        <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V10a.5.5 0 01-.146.354l-2 2a.5.5 0 11-.708-.708L9.793 10H9V7.5a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                                        <span>الوقت: 6:00 مساءً</span>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center mt-4">
                                    <Link to={`/companyInfo/${item.EventId}`}>
                                        <p className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}>
                                            التفاصيل
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </>
        ) : getLocal.role === "student" ? (
            <>
            {studentCategory !== undefined && (
                    studentCategory.map((item, index) => (
                        <div key={index} className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw] max-sm:h-[50vh]'>
                            <img src={item.imageUrl} className='max-sm:h-[28vh] w-[100%] h-[33vh] rounded-t-md' />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">{item.eventName}</h3>
                                <div className="flex flex-col justify-start items-start gap-3 pt-2">
                                    <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                                        <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 5H4v10h12V7z" clipRule="evenodd"></path></svg>
                                        <span>التاريخ:   {item.startDate}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                                        <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V10a.5.5 0 01-.146.354l-2 2a.5.5 0 11-.708-.708L9.793 10H9V7.5a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                                        <span>الوقت: 6:00 مساءً</span>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center mt-4">
                                    <Link to={`/Companies/${item.id}`}>
                                        <p  className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}>
                                            التفاصيل
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
               
            </>
        ) : (
            <>
                {/* Render default content if none of the roles match */}
            </>
        )}
    </>
) : (
    // Render fallback or loader if localStorage item 'getLocal' is not available
    <>
        {defaultCard.map((item, index) => (
            <div key={index} className='rounded-lg h-[67vh] w-[23vw] border-2 shadow-lg bg-white max-sm:w-[90vw] max-sm:h-[50vh]'>
                <img src={item.imageUrl} className='max-sm:h-[28vh] w-[100%] h-[33vh] rounded-t-md' />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">{item.eventName}</h3>
                    <div className="flex flex-col justify-start items-start gap-3 pt-2">
                        <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                            <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 5H4v10h12V7z" clipRule="evenodd"></path></svg>
                            <span>التاريخ:   {item.startDate}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                            <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V10a.5.5 0 01-.146.354l-2 2a.5.5 0 11-.708-.708L9.793 10H9V7.5a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                            <span>الوقت: 6:00 مساءً</span>
                        </div>
                    </div>
                    <div className="flex justify-end items-center mt-4">
                        <p  className={`text-[#ffffff] font-bold text-[0.9rem] ${bool ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'} py-2 px-4 rounded-lg`}>
                            التفاصيل
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </>
)}

   

         
      </div>
    </div>
</div>

  )}

export default Cards