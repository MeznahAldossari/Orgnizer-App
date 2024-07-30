import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import HeroStudent from '../components/HeroStudent'

import Elm from '../assets/elm.png'
import { Link, useParams } from 'react-router-dom'
import { auth, db } from '../config/firebase';
import { getDoc, doc, collection, getDocs,setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'

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
                    <div className='flex justify-between items-center w-full h-auto p-4 pr-0 '>
                        <div>
                        <p className='font-semibold text-[1.6rem] mt-12  pt-1 pr-1 text-[#5C59C2] mb-7 max-sm:text-[1rem] max-sm:text-center'>
                            قائمة الشركات ذات الاهتمام بمجال تخصصك
                        </p>
                        </div>
                        
                        <dialog id="my_modal_11" className="modal modal-bottom sm:modal-middle">
    <div className="modal-box">
        <div className="flex flex-col justify-center items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 512 512">
                <path fill="#32BEA6" d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"></path>
                <path fill="#FFF" d="M392.6,172.9c-5.8-15.1-17.7-12.7-30.6-10.1c-7.7,1.6-42,11.6-96.1,68.8c-22.5,23.7-37.3,42.6-47.1,57c-6-7.3-12.8-15.2-20-22.3C176.7,244.2,152,229,151,228.4c-10.3-6.3-23.8-3.1-30.2,7.3c-6.3,10.3-3.1,23.8,7.2,30.2c0.2,0.1,21.4,13.2,39.6,31.5c18.6,18.6,35.5,43.8,35.7,44.1c4.1,6.2,11,9.8,18.3,9.8c1.2,0,2.5-0.1,3.8-0.3c8.6-1.5,15.4-7.9,17.5-16.3c0.1-0.2,8.8-24.3,54.7-72.7c37-39.1,61.7-51.5,70.3-54.9c0.1,0,0.1,0,0.3,0c0,0,0.3-0.1,0.8-0.4c1.5-0.6,2.3-0.8,2.3-0.8c-0.4,0.1-0.6,0.1-0.6,0.1l0-0.1c4-1.7,11.4-4.9,11.5-5C393.3,196.1,397,184.1,392.6,172.9z"></path>
            </svg>
            <h3 className="font-bold text-lg">تم تسجيل حضورك بنجاح</h3>
        </div>
        <div className="modal-action">
            <form method="dialog">
                {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
            </form>
        </div>
    </div>
</dialog>

<div className="pt-2 ml-[-1%] w-[50%] flex justify-end mx-auto text-gray-600 ">
    {checkExists && (
        <button
            className="cursor-pointer w-[12vw] gap-2 px-1 py-3 max-sm:mt-0 text-white justify-center items-center rounded-lg font-bold text-[0.8rem] bg-[#f39e4e] flex"
            onClick={() => {
                eventRegister(id);
                document.getElementById('my_modal_11').showModal();
                setTimeout(() => {
                    document.getElementById('my_modal_11').close();
                }, 2000);
            }}
        >
            تأكيد حضورك
        </button>
    )}
</div>

                    </div>

                    <div className="w-full  mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-32 mb-16 mt-10 max-sm:grid-cols-1 max-sm:gap-y-8 ">
                        {/* Cards here */}
                        {hisCompanies && (
                            <>
                                {hisCompanies.map((item, index) => (
                                    <div key={index} className='w-[25vw] h-[80vh] overflow-hidden rounded-md bg-[#fafafa] shadow-[0_0_1rem_rgb(0,0,0,0.1)] max-sm:w-full max-sm:h-full'>
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
        <div>
            <Footer />
        </div>
    </>
);
}
export default Companies