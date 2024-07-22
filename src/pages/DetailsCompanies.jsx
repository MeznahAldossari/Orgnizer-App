import React, { useEffect,useState } from 'react'
import Nav from '../components/Nav'
import Elm from '../assets/elm.png'
import { Link, useParams } from 'react-router-dom'
import { auth, db, storage } from '../config/firebase';
import { getDoc, doc, collection, getDocs, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useLocation } from 'react-router-dom';


const DetailsCompanies = () => {
       // const {id} = useParams()
       const [applicationInfo, setApplicationInfo] = useState(null);

       const locationValue = useLocation()
       const {companyID, eventIDs} = locationValue.state
       const initialButtonState = { text: 'تقديم', color: '#99D2CB' };
       const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
       const [checkAppliedJob, setCheckAppliedJob] = useState([])
       const [hisApplication, setHisApplication] = useState([])
       const [applied, setApplied] = useState(false);
       const [company, setCompanyData] = useState({
           companyName: '',
           description: '',
           email: '',
           Location: '',
           logo:'',
           jobPositions: [],
           endDate:'',
           startDate:'',
           startTime:'',
           endTime:''
       });
       useEffect(()=>{
   
           getCompanyInfo()
           chechPositions()
           hisapplicationList()
           
   
       }, [applied])
   
   
       const getCompanyInfo = async()=>{
           
   
   
           const mainCompanyInfo = doc(db, "CompaniesData", companyID);
           console.log("##########################"+ companyID)
           const companyDocSnapshot = await getDoc(mainCompanyInfo);
   
           if (companyDocSnapshot.exists()) {
               console.log("##########################")
               
               const myCompaniesRef = doc(db, `EventDetails/${eventIDs}/myCompanies/${companyID}`);
               const userDocSnapshot = await getDoc(myCompaniesRef);
               if (userDocSnapshot.exists()) {
                   const eventJobs = userDocSnapshot.data()
                   console.log("hello in the check ")
                   const companyData = companyDocSnapshot.data();
                   console.log("helloqqqq" + companyData.companyName)
                   setCompanyData({
                       companyName: companyData.companyName,
                       description: companyData.description,
                       email: companyData.email,
                       Location: companyData.Location,  
                       logo: companyData.logo,
                       jobPositions: eventJobs.jobPositions,
                       endDate:companyData.endDate,
                       startDate:companyData.startDate,
                       startTime:companyData.startTime,
                       endTime:companyData.endTime
                      
                   });
   
               }
               
              
            
           }
          
          
        
       }
   
      
   
       const jobApplied = async (jobName, index) => {
        setApplied(false)
        const currentDate = new Date();

        const options = {
            timeZone: 'Asia/Riyadh',  // Middle East timezone, adjust as per your specific location
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        const localDate = currentDate.toLocaleString('en-US', options);
        

           try {
               const myCompaniesRef = doc(db, `users/${getLocal.id}/myEvents/${eventIDs}/appliedCompanies`, companyID);
               const userDocSnapshot = await getDoc(myCompaniesRef);
       
               if (userDocSnapshot.exists()) {
   
               const applicationInfo = userDocSnapshot.data();
   
               const positionExists = applicationInfo.allPositions.some(position => position.positionName === jobName);
   
               if (!positionExists) {
                const updatedPositions = [
                    { indexNo: index, company: companyID, positionName: jobName, status: "انتظار", appliedDate: localDate },
                    ...applicationInfo.allPositions  // Keep existing positions after the new one
                ];

                await updateDoc(myCompaniesRef, { allPositions: updatedPositions });
                setApplied(true);
            } else {
                console.error(`Position '${jobName}' already exists.`);
                setApplied(true);
            }
                   
                  
               } else {
                   const parentRef = doc(db, `users/${getLocal.id}/myEvents/${eventIDs}`);
                   const parentDocSnapshot = await getDoc(parentRef);
       
                   if (parentDocSnapshot.exists()) {
                       const appliedCompaniesRef = collection(db, `users/${getLocal.id}/myEvents/${eventIDs}/appliedCompanies`);
                       const docRef = doc(appliedCompaniesRef, companyID);
       
                       await setDoc(docRef, {
                           allPositions: [
                               {indexNo: index, company: companyID, positionName: jobName, status: "انتظار", appliedDate: localDate},
                           ]
                       });
                       setApplied(true)

                   } else {
                       console.error(`Parent document 'users/${getLocal.id}/myEvents/${eventIDs}' does not exist.`);
                       setApplied(true)
                    }
               }

               
           } catch (error) {
               console.error("Error fetching or updating document:", error);
               // Handle error appropriately
           }
       }

       const chechPositions = async()=>{
        try{
            
            const myCompaniesRef = doc(db, `users/${getLocal.id}/myEvents/${eventIDs}/appliedCompanies`, companyID);
            const userDocSnapshot = await getDoc(myCompaniesRef);
    
            if (userDocSnapshot.exists()) {
                const applicationInfo = userDocSnapshot.data();
                if(applicationInfo.allPositions){

                    const lists = applicationInfo.allPositions
                    let arr = []
                    lists.forEach(position => {
                       
                        arr.push({
                           company: position.company,
                           positionName: position.positionName,
                           status: position.status,
                           indexNo:arr.length
                        })
                        console.log("hhhhhhhhhhhhhi")
        
        
                        console.log(`Status of job: ${JSON.stringify(arr)}`);
                    });
    
                    setCheckAppliedJob(arr)
    

                }
               
            }

        }catch{

        }
      

       }

       const hisapplicationList =  async()=>{

        const myCompaniesRef = doc(db, `users/${getLocal.id}/myEvents/${eventIDs}/appliedCompanies`, companyID);
            const userDocSnapshot = await getDoc(myCompaniesRef);
    
            if (userDocSnapshot.exists()) {

                const applicationInfo = userDocSnapshot.data();
                if(applicationInfo.allPositions){

                    const lists = applicationInfo.allPositions
                    let arr = []
                    lists.forEach(position => {

                       
                        arr.push({
                           company: position.company,
                           positionName: position.positionName,
                           status: position.status,
                           indexNo: arr.length
                        })
                        console.log("hhhhhhhhhhhhhi")
        
        
                        console.log(`Status of job: ${JSON.stringify(arr)}`);
                    });

                    setHisApplication(arr)

                }}


       }

       const removeApplication = async(job, index)=>{
        console.log(job)
       
        const myCompaniesRef = doc(db, `users/${getLocal.id}/myEvents/${eventIDs}/appliedCompanies`, companyID);
            const userDocSnapshot = await getDoc(myCompaniesRef);
    
            if (userDocSnapshot.exists()) {
                const applicationInfo = userDocSnapshot.data();
                if(applicationInfo.allPositions){

                    const updatedPositions = applicationInfo.allPositions.filter(position => position.positionName !== job);
                
                await updateDoc(myCompaniesRef, {
                    allPositions: updatedPositions
                })

                hisapplicationList()
                chechPositions()
                




       }}}
   

  return (
    <>
<Nav />
<div className='bg-[#f7f7f7] h-screen w-full flex justify-center '>
   <div className='flex mt-10 flex-col'>
    <div className='flex gap-6 max-sm:flex-col max-sm:items-center'>
        <div className=''>
            <img className='h-[47vh] w-[25vw] rounded-lg object-cover max-sm:w-[88vw] max-sm:h-[45vh]' src={company.logo} />
        </div>
        <div className=' bg-white w-[66vw] h-[47vh] rounded-lg max-sm:w-[88vw] max-sm:h-[45vh] '>
            <h1 className='pt-6 pr-6 font-extrabold text-[#5C59C2] text-[1.5rem]'> {company.companyName}</h1>

            <div className='pt-2 pr-5 flex gap-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[#99D2CB]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='text-[gray] text-[0.8rem] '> {company.Location} </p>
            </div>
            <p className='pr-6 pt-2 text-[#202020] text-[0.9rem]'><span className='font-bold '>التفاصيل:</span> {company.description}</p>
            <div className='flex justify-end items-center'>
                {/* <div className="flex justify-end items-center mt-4 ml-2">
                    <p className="w-[8vw] text-[#ffffff] font-bold text-[0.9rem] bg-[#99D2CB] hover:bg-[#a5ddd7] py-2 px-4 rounded-lg cursor-pointer text-center max-sm:text-[0.8rem] max-sm:w-[20vw] ">تقديم</p>
                </div> */}
                <div className="flex justify-end items-end mt-4 ml-6 pb-4 h-[13vh]">
                    <Link to={`/Companies/${eventIDs}`}><p className="w-[8vw] text-[#ffffff] font-bold text-[0.9rem] bg-[#7c7c7c] hover:bg-[#919191] py-2 px-4  rounded-lg cursor-pointer text-center max-sm:w-[20vw] max-sm:mb-5">العودة</p>
                    </Link>
                </div>
            </div>
        </div>      
    </div>

<div className='mt-8 bg-white rounded-md w-full'>
<div className='flex justify-center bg-[#5d6fa3] w-[93%]'>
  <div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white">
    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2] " aria-label="الشواغر" defaultChecked/>
    <div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6  w-full max-sm:w-[90vw]">
      <p className='text-lg mb-5 font-extrabold text-[#5C59C2] text-[1.1rem]' > قائمة الشواغر</p>
        <table className="w-full text-md bg-white shadow-md rounded mb-4 max-sm:text-xs max-sm:table-xs">
            <tbody>
              <tr className="focus:outline-none h-16 border border-[#e4e6e6] bg-[#fafafa] rounded">
              <th className="text-right p-3 px-5 max-sm:p-1">المسمى الوظيفي</th>
              {/* <th className="text-right p-3 px-5">المسؤوليات </th>
              <th className="text-right p-3 px-5">المهارات المطلوبة</th> */}
              <th className="text-right p-3 px-5 max-sm:p-1">التقديم </th>
            </tr>
            {company.jobPositions && company.jobPositions.length > 0 && (
    <>
        {company.jobPositions.map((job, index) => (
            <tr key={index} className="focus:outline-none h-16 border border-[#e4e6e6] rounded">
                <td className="p-3 px-5 max-sm:p-1">
                    <div className="flex flex-wrap">
                        <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[10ch] break-words max-sm:w-[10ch]"> {job}</p>
                    </div>
                </td>
                <td className="p-3 px-5 max-sm:p-1">
                    <div className="flex flex-wrap">
                        <p className=" text-black text-xs font-medium me-2 px-4 py-1.5 rounded-full">
                        <span    onClick={()=> jobApplied(job,index)}
                        className=' text-gray-800 rounded-full text-xs font-medium me-2 px-4 py-0.5'
                        style={{
                        backgroundColor: checkAppliedJob.find((e)=> e.positionName === job && e.status) ? '#fce4b0' : 'blue', // Change color based on applied state
                        color: 'black',
                       
                        cursor: checkAppliedJob.find((e)=> e.positionName === job && e.status =="مرفوض")? 'not-allowed' : 'pointer', // Change cursor based on applied state
                        }}
                         // Disable button after first click
                         
                        >
                          {console.log(applied)}  
                          {checkAppliedJob.find((e)=> e.positionName === job && e.status)? 'تم التقديم' : 'تقديم'}

                            
                        
                        </span>
                        </p>
                    </div>
                </td>
            </tr>
        ))}
    </>
)}


     
        
            </tbody>
        </table>  
</div>
{/* تقديماتي */}
    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2]" aria-label="تقديماتي"  />
    <div role="tabpanel" className="tab-content  bg-white border-base-100 rounded-box p-6 w-full max-sm:w-[90vw]">
    <p className='text-lg mb-5 font-extrabold text-[#5C59C2] text-[1.1rem]' > قائمة تقديماتي</p>
    <table className="w-full text-md bg-white shadow-md rounded mb-4 max-sm:text-xs max-sm:table-xs">
            <tbody>
            <tr className="focus:outline-none h-16 border border-[#e4e6e6] bg-[#fafafa] rounded">
              <th className="text-right p-3 px-5 max-sm:p-1">المسمى الوظيفي</th>
              <th className="text-right p-3 px-5 max-sm:p-1">الحالة </th>
              <th className="text-right p-3 px-5 max-sm:p-1"> الترتيب </th>
              <th className="text-right p-3 px-5 max-sm:p-1"> انسحاب </th>
            </tr>
            {hisApplication.map((job, index) => (
                   <tr className="focus:outline-none h-16 border border-[#e4e6e6] rounded">
                   {/* <td className="">
                       <div className="flex items-center pl-5">
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk0IrfQt8yu8km4DYRG69OOhe2GQlK5NLvzIk23B3u77AjSRLJ3NLOqK9_W53M8jHV6Y&usqp=CAU" alt="" srcset="" className='w-[7vw] h-[7vh] mr-2' />
                       </div>
                   </td> */}
                   <td className="p-3 px-5 max-sm:p-1">
                       <div className="flex flex-wrap">
                           <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[10ch] break-words max-sm:w-[10ch]">    {job.positionName}  </p>
                       </div>
                   </td>
                   
                   <td className="p-3 px-5 max-sm:p-1">
                       <div className="flex flex-wrap">
                           <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[10ch] break-words max-sm:w-[10ch]">  
                               <div className='flex gap-2'>
                                   <span className="bg-[#fce4b0] text-black text-xs font-medium me-2 px-4 py-1.5 rounded-full">{job.status}</span>
                               </div> 
                           </p>
                       </div>
                   </td>
                   <td className="p-3 px-5 max-sm:p-1">
                       <div className="flex flex-wrap">
                           <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[10ch] break-words max-sm:w-[10ch]"> - </p>
                       </div>
                   </td>
                   <td className="p-3 px-5 max-sm:p-1">
                       <div className="flex flex-wrap">
                           <svg onClick={(()=>removeApplication(job.positionName, job.indexNo))} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#c71919] cursor-pointer">
                           <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                           </svg>
                       </div>
                   </td>
                   {/* <td className="">
                       <div className="flex items-center ">
                           <button>
                           </button>
                   </div>
                   </td> */}
               </tr>

            ))}
         
            </tbody>
        </table>  
    </div>
  </div>
</div> 
</div> 

</div> 
                        
</div>
 
    </>
  )
}

export default DetailsCompanies