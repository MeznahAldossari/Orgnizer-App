import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import HeroStudent from '../components/HeroStudent'

import Elm from '../assets/elm.png'
import { Link, useParams } from 'react-router-dom'
import { auth, db } from '../config/firebase';
import { getDoc, doc, collection, getDocs,setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Companies = () => {
  const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
  const [hisCompanies, setHisCompanies] = useState([])
  const {id} = useParams()
  const [checkExists, setCheckExists] =useState(false)
  const navigate = useNavigate()


  useEffect(() =>{
    getUserCompanies()
    checkRegister()
  }, [])



  const getUserCompanies = async()=>{

    const userDetailsRef = doc(db, 'users', getLocal.id)
    const userDetailsSnapshot = await getDoc(userDetailsRef);
    if (!userDetailsSnapshot.exists()) {
        console.log("User details not found");
        return; // Handle the case where userDetailsSnapshot is missing
    }

    const studentInfo = userDetailsSnapshot.data();
    const studentFav = studentInfo.favorites; // Assuming favorites is an array

    // Check if favorites array exists in studentInfo
    if (studentFav && studentFav.length > 0) {
        const eventDetailsRef = doc(db, 'EventDetails', id);
        const eventDetailsSnapshot = await getDoc(eventDetailsRef);

      
    if (!eventDetailsSnapshot.exists()) {
        console.log("EventDetails not found for ID:", id);
        return; 
    }

    const myCompaniesRef = collection(eventDetailsRef, 'myCompanies');
    const myCompanyDocRef = await getDocs(myCompaniesRef);

    const categories = myCompanyDocRef.docs.map(doc => {
        if (doc.exists) {
            const jobPositions = doc.data().jobPositions;
            if (jobPositions && jobPositions.length > 0) {
                const commonCategories = jobPositions.find(category =>
                    studentFav.includes(category)
                );
                if (commonCategories) {
                    return { id: doc.id, jobPositions: jobPositions };
                }
            }
        }
    }).filter(category => category !== undefined);
    console.log("KKKKKK"+JSON.stringify(categories))

    getCompanies(categories)

 
    if (myCompanyDocRef.empty) {
        console.log("No documents found in myCompanies subcollection");
        return; 
    }

 
} else {
    console.log("Student favorites not found or empty");
}


  }

  const getCompanies = async (companyData) =>{
    const eventCollectionRef = collection(db, "CompaniesData");
    const snapshot = await getDocs(eventCollectionRef);
    let arr = []

    const allCompanies = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));

    const filteredCompanies = allCompanies.filter(company => {
        return companyData.some(data => {
            if (data.id === company.id) {
                company.jobPositions = data.jobPositions;
                return true;
            }
            return false;
        });
    });
    console.log("XXXX"+JSON.stringify(filteredCompanies))

    setHisCompanies(filteredCompanies);



  }

  const checkRegister = async()=>{
    setCheckExists(false)

    const myCompaniesRef = doc(db, `users/${getLocal.id}/myEvents/${id}`);
    const userDocSnapshot = await getDoc(myCompaniesRef);
    if (!userDocSnapshot.exists()) {
        console.log("hello in the check ")

        setCheckExists(true)
        return;
    }
  
    
  

  }

  const NavToDetailsCompanies = (companyID)=>{

    if(!checkExists){
        //DetailsCompanies
        navigate(`/DetailsCompanies/${companyID}`)
    }

  }
  const eventRegister = async(eventID)=>{
    const myEventsRef = collection(db, `users/${getLocal.id}/myEvents`);
    
    const eventDocRef = doc(myEventsRef, eventID);
    setCheckExists(false)
    
    await setDoc(eventDocRef, {});
  

  }

  return (
    <>
        <Nav />
        <HeroStudent />
        <div className='bg-[#ffffff] h-full w-full flex justify-center'>
            <div className='flex flex-col justify-center items-start mr-8 mb-8 ml-8 w-full h-full'>

                <div className='bg-white w-full h-full rounded-lg'>
                    <div className='flex flex-wrap justify-start  items-end w-full h-auto p-4 pr-0'>
                        <p className='font-semibold text-[1.6rem] mt-12  pt-1 pr-1 text-[#5C59C2] mb-7 max-sm:text-[1rem] max-sm:text-center'>
                            قائمة الشركات ذات الاهتمام بمجال تخصصك
                        </p>
                        <div className='flex gap-2 w-full sm:w-[10vw] h-auto mt-6 mr-6'>
                            <div className="pt-2 relative mx-auto text-gray-600">
                                {checkExists && (
                                    <button onClick={() => eventRegister(id)}>تسجيل</button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="w-full  mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-32 mb-16 mt-10 max-sm:grid-cols-1 max-sm:gap-y-4">
                        {/* Cards here */}
                        {hisCompanies && (
                            <>
                                {hisCompanies.map((item, index) => (
                                    <div key={index} className='w-[25vw] h-[80vh] overflow-hidden rounded-md bg-[#fafafa] shadow-[0_0_1rem_rgb(0,0,0,0.1)]'>
                                        <div className='card_cover'></div>
                                        <div className='flex flex-col items-center justify-center gap-2'>
                                            <div className='mt-[0.5rem] bg-white flex flex-col items-center justify-center px-8 py-4 pt-0 '>
                                                <div className='absolute bg-white mb-12 h-[6rem] w-[6rem] overflow-hidden rounded-full border-4 border-[3px_soild_#fafafa] shadow-[0_0_1rem_rgba(0,0,0,0.2)]'>
                                                    <img className='h-full w-full object-cover' src={item.logo} alt="Company Logo" />
                                                </div>
                                            </div>
                                            <h1 className='mt-[1.5rem] text-center'>
                                                <div className='text-[1.6rem] font-bold'> {item.companyName}</div>
                                                <div className='text-[1rem] font-medium text-[#8a8a8a]'>المجالات المطلوبة</div>
                                                <div className='flex justify-center flex-wrap gap-1 mt-2'>

                                                {item.jobPositions && item.jobPositions.length > 0 && (
                                                    <>
                                                        {item.jobPositions.map((job, index) => (
                                                            <div className='flex' key={index}>
                                                                                        <p className='px-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5]'> 
                                                                                        {job}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </>
                                                )}



                                                </div>
                                            </h1>
                                            <div className='flex gap-4 mb-8 mt-6 pb-4'>
                                            <Link  to="/DetailsCompanies"  state={{companyID: item.id, eventIDs: id}}>
                                                    <button className='border cursor-pointer font-bold border-[#5C59C2] text-[#5C59C2] hover:bg-[#5C59C2] hover:text-white rounded-md p-[4px] w-[100px] flex justify-center items-end gap-1'>
                                                        المزيد
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                                        </svg>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>
);
}
export default Companies