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
    <div className='bg-[#ffffff] h-full w-full flex justify-center '>
    <div className='flex flex-col justify-center items-start  mr-8 mb-8 ml-8 w-full h-full'>


<div className='bg-white w-full h-full rounded-lg'>
<div className='flex flex-wrap justify-start items-end w-full h-auto p-4'>
    <p className='font-semibold text-[1.3rem] mt-12 mr-4 pt-1 pr-1 text-[#5C59C2] mb-7 max-sm:text-[1rem] max-sm:text-center'>
        قائمة الشركات ذات الاهتمام بمجال تخصصك
    </p>
    <div className='flex gap-2 w-full sm:w-[10vw] h-auto mt-6 mr-6'>
        <div className="pt-2 relative mx-auto text-gray-600">
            {checkExists &&(
            <button onClick={()=>eventRegister(id)}>تسجيل</button>


            )}
            {/* <input

                className="border-2 border-[#99D2CB] bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                type="search" name="search" placeholder="البحث" 
            /> */}
            {/* <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <svg className="text-[#99D2CB] h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" xml:space="preserve"
                    width="512px" height="512px">
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </button> */}
        </div>
    </div>
</div>

    <div className="w-fit mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-32 mb-16 mt-10 max-sm:grid-cols-1 max-sm:gap-y-4">
        {/* card here */}
        {hisCompanies &&(
            <>
            {hisCompanies.map((item, index)=>(

<div className='flex flex-col items-center mt-6 bg-white w-full h-[45vh] rounded-lg shadow max-sm:h-[35vh]'>
<img className='mr-4 rounded-lg h-[20vh] w-[8vw] max-sm:w-[20vw] max-sm:h-[10vh] max-sm:mt-2' src={Elm} />
<div className='mr-4 flex flex-col gap-2'>
    <div className='flex justify-center gap-2'>
        <p className='font-bold pt-2 max-sm:pt-6  text-[1rem]'> {item.companyName} </p>
    </div>
    <div className='flex gap-1 mt-2'>
            <p className='text-[gray] text-[0.9rem]'> المجالات المطلوبة :</p>
            {item.jobPositions && item.jobPositions.length > 0 && (
                <>
                    {item.jobPositions.map((job, index) => (
                        <div className='flex' key={index}>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 dark:bg-yellow-700 dark:text-yellow-400 border border-[#eebf59] rounded-full">
                                {job}
                            </span>
                        </div>
                    ))}
                </>
            )}
            
    </div>
    <div className='flex pb-6 justify-center items-center h-[12vh]'>
       
        <div className="flex justify-end items-center mt-4 ml-2">
            <Link  to="/DetailsCompanies"  state={{companyID: item.id, eventIDs: id}}>
            <p  className={`w-[6vw] h-[3vw] text-[#ffffff] font-bold text-[0.9rem]  py-2 px-4 rounded-lg text-center ${checkExists ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#99D2CB] hover:bg-[#a5ddd7] cursor-pointer'}`}>المزيد</p>

            </Link>

                               </div>
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
  )
}

export default Companies