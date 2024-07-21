  import React, {useEffect, useState, useRef} from 'react'
  import Nav from './Nav'
  import '../App.css'
  import { jsPDF } from 'jspdf';
  // import jsPDF from 'jspdf'
  import autoTable from 'jspdf-autotable'
  // import '../Amiri-normal.js'
  
 
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
  import deleteStudent from '../assets/delete.png'
  import close from "../assets/close.png"
  import { IoIosAddCircle } from "react-icons/io";
  import MyqrCode from './MyqrCode';
  import { RiDownload2Fill } from "react-icons/ri";


 
  import { auth, db, storage } from '../config/firebase';
  import { getDoc, doc, collection, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { Link, useParams } from 'react-router-dom';
  import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


  function CompanyDetails() {
    const [qrValue, setQRValue] = useState('');

    const [showNewPositionInput, setShowNewPositionInput] = useState(false); 
    const [companyData, setCompanyData] = useState({
      companyName: '',
      description: '',
      email: '',
      Location: '',
      logo:'',
      jobPositions: [],
      EmpList:[]
  });

  const [companyupdated, setCompanyupdated] = useState({
    companyName: '',
    description: '',
    email: '',
    Location: '',
    logo:'',
    jobPositions: []
});

  

      const [checkEmp, setCheckEmp] = useState(false)
      const [checkPosition, setCheckPosition] = useState(false)
      const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
      const {id} = useParams()
      const qrRef = useRef(null);
      const [pdfUrl, setPdfUrl] = useState('');


      useEffect(()=>{
        getCompanyInfo()
        checkPositionAndEmp()
        
      }, [])

      const fetchData = async () => {
        const eventDetailsRef = doc(db, 'CompaniesData', getLocal.id);
        
        try {
          const eventDetailsSnapshot = await getDoc(eventDetailsRef);
          
          if (!eventDetailsSnapshot.exists()) {
            console.log('Event details document does not exist');
            return;
          }
      
          const eventDetailsData = eventDetailsSnapshot.data();
      
          const otherDocumentRef = eventDetailsData.companyName; 
      
          const qrDataURL = document.getElementById('qr-code').toDataURL();
          const pdfWidth = 100; 
          const pdfHeight = 130; 
          const pdf = new jsPDF({
              unit: 'mm',
              format: [pdfWidth, pdfHeight]
          });

          const qrSize = 20;
         
          const qrX = (pdfWidth - qrSize) / 2; // Center QR horizontally
          const qrY = (pdfHeight - qrSize) / 2; // Center QR vertically

          pdf.setFillColor('#E5D4FF'); 

          pdf.rect(0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight(), 'F');
          pdf.addImage(qrDataURL, 'JPEG', qrX, qrY, qrSize, qrSize);
          
          const title = "SAMI"; 
          pdf.setFontSize(20);
          pdf.setFont('Amiri', 'Amiri', 'normal');
          pdf.text(title, pdfWidth / 2, qrY + qrSize + 10, { align: 'center' });
          pdf.save('myPDFS.pdf');
          const pdfBlob = pdf.output('blob'); // Convert to Blob for upload
          uploadPDF(pdfBlob);
      
        } catch (error) {
          console.error('Error fetching document:', error);
        }
      };
      
      const uploadPDF = async(pdfFile) => {
        // const storageRef = firebase.storage().ref();
        // const storageRef = ref(storage, 'some-child');
        const eventDetailsRef = doc(db, 'CompaniesData', getLocal.id);
        
        
          const eventDetailsSnapshot = await getDoc(eventDetailsRef);
          
          if (!eventDetailsSnapshot.exists()) {
            console.log('Event details document does not exist');
            return;
          }
      
          const eventDetailsData = eventDetailsSnapshot.data();
      
          const otherDocumentRef = eventDetailsData.companyName
          const storageRef = ref(storage, `pdfsQR/myPDFS.pdf`);

        
        // const pdfRef = storageRef.child('pdfs/myPDF.pdf');
    
        uploadBytes(storageRef, pdfFile).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
      };
    
      const getCompanyInfo = async () => {
        try {
            const myCompaniesRef = doc(db, `EventDetails/${id}/myCompanies/${getLocal.id}`);
            const userDocSnapshot = await getDoc(myCompaniesRef);
            
            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                
                const mainCompanyInfo = doc(db, "CompaniesData", getLocal.id);
                const companyDocSnapshot = await getDoc(mainCompanyInfo);
    
                if (companyDocSnapshot.exists()) {
                    const companyData = companyDocSnapshot.data();
                    setCompanyData({
                        companyName: companyData.companyName,
                        description: companyData.description,
                        email: companyData.email,
                        Location: companyData.Location,  // Ensure casing matches Firestore document
                        logo: companyData.logo,
                        jobPositions: userData.jobPositions,
                        EmpList:userData.EmpList
                    });

                    setCompanyupdated({
                      companyName: companyData.companyName,
                      description: companyData.description,
                      email: companyData.email,
                      Location: companyData.Location,  // Ensure casing matches Firestore document
                      logo: companyData.logo,
                      jobPositions: userData.jobPositions,
                      EmpList:userData.EmpList
                  });
                } else {
                    console.error("Company data does not exist");
                }
            } else {
                console.error("User document does not exist");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleDescriptionChange = (event) => {
      setCompanyupdated({ ...companyupdated, description: event.target.value });
    };

    const handleLocationChange = (event) => {
      setCompanyupdated({ ...companyupdated, Location: event.target.value });
    };
    const handleLogoChange = async (event) => {
      const file = event.target.files[0];
    setCompanyupdated({
      ...companyupdated,
      logo: file
    });
    };

    const handlePositionsChange = (event) => {
      const positionsInput = event.target.value;
      const positionsArray = positionsInput.split(',').map(position => position.trim());
      setCompanyupdated({
          ...companyupdated,
          jobPositions: positionsArray
      });
    };
  

    const updateInfo = async (eventID, companyID) => {
      try {
        if (
          companyupdated.description !== "" &&
          companyupdated.Location !== "" &&
          companyupdated.logo !== "" &&
          companyupdated.jobPositions !== "" &&
          companyupdated.logo !== undefined &&
          companyupdated.jobPositions !== undefined &&
          companyupdated.jobPositions.length !== 0 &&
          companyupdated.description !== undefined &&
          companyupdated.Location !== undefined
        ) {
          const storageRef = ref(storage, `logoFolder/${companyupdated.logo.name}`);
          await uploadBytes(storageRef, companyupdated.logo);
    
          // Get download URL for the uploaded logo
          const logoURL = await getDownloadURL(storageRef);
    
          console.log("Updating company info for company ID: " + companyID);
          const mainCompanyInfo = doc(db, "CompaniesData", companyID);
          const companySnapshot = await getDoc(mainCompanyInfo);
          console.log(companySnapshot);
    
          if (companySnapshot.exists()) {
            await updateDoc(mainCompanyInfo, {
              description: companyupdated.description,
              Location: companyupdated.Location,
              logo: logoURL
            });
    
            // Update event company info
            const eventDetailsRef = doc(db, 'EventDetails', eventID);
            const eventDetailsSnapshot = await getDoc(eventDetailsRef);
    
            if (eventDetailsSnapshot.exists()) {
              const myCompaniesRef = collection(eventDetailsRef, 'myCompanies');
              const myCompanyDocRef = doc(myCompaniesRef, companyID);
              const myCompanySnapshot = await getDoc(myCompanyDocRef);
    
              if (myCompanySnapshot.exists()) {
                await updateDoc(myCompanyDocRef, {
                  jobPositions: companyupdated.jobPositions
                });
    
              } else {
                console.error('No such company document exists.');
              }
            } else {
              console.error('No such event details document exists.');
            }
          } else {
            console.error('No such company document exists for ID:', companyID);
          }
        } else {
          console.error('One or more required fields are missing or invalid.');
        }
      } catch (error) {
        console.error("Error updating company info:", error);
      }
    };
    


        const deletePosition =  (positionIndex) => {

          console.log("Deleting position at index:", positionIndex);
          const updatedPositions = [...companyupdated.jobPositions];
          updatedPositions.splice(positionIndex, 1);
          setCompanyupdated({
            ...companyupdated,
            jobPositions: updatedPositions
          });
         
        }

    const checkPositionAndEmp= async()=>{
     try{
      setCheckPosition(false)
      setCheckEmp(false)
      const eventDetailsRef = doc(db, 'EventDetails', id);
      const eventDetailsSnapshot = await getDoc(eventDetailsRef);

      if (eventDetailsSnapshot.exists()) {
        const myCompaniesRef = collection(eventDetailsRef, 'myCompanies');
        const myCompanyDocRef = doc(myCompaniesRef, getLocal.id);
        const myCompanySnapshot = await getDoc(myCompanyDocRef);

        if (myCompanySnapshot.exists()) {
          const companyData = myCompanySnapshot.data();
          if(companyData.jobPositions === undefined || companyData.jobPositions ===null){
            setCheckPosition(true)
          } 
        }

      }

      

     }catch(e){
      console.log(e)

     }
    }

    const addPosition = () => {
      setShowNewPositionInput(true); 
    };
  
    const handleNewPositionChange = (e) => {
      setNewPosition(e.target.value);
    };
  
    const handleSubmit = () => {
      if (newPosition.trim() !== '') {
        const initialJobPositions = companyupdated.jobPositions || [];
        
        const updatedPositions = [...initialJobPositions, newPosition];
        
        setCompanyupdated({
          ...companyupdated,
          jobPositions: updatedPositions
        });
        
        setNewPosition(''); 
        setShowNewPositionInput(false); 
      }
    };
  
    const [newPosition, setNewPosition] = useState('');

    const handleInputChange = (event) => {
      setQRValue(event.target.value);
    };
        

    return (
      <div>
          <div>
              <Nav/>
          </div>

          <div className='bg-[#f3f3f3] mt-[-1.3%] h-full w-full'>
          <div className='flex justify-start items-end w-full h-[10vh]'>
              <p className='font-semibold text-[1.5rem] mr-14'> مرحباً <span className='text-[#6e68c4] font-bold'>بكم</span> في معرض التوظيف  </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
           
              <div className='flex justify-between items-center mt-6 bg-white w-[91%] h-[20vh] rounded-lg'>
                 <div className='flex items-center '>
                 <img className='mr-4 rounded-full border-[1.5px] h-[15vh] object-cover w-[7vw] max-sm:w-[20vw] max-sm:h-[10vh]' src={companyData.logo} />
                  <div className='mr-4'>
                      <p className='font-bold text-[1.3rem]'>  {companyData.companyName}</p>
                  </div>
                 </div>
                  
                 {/* <div className='flex ml-12'>
                  <RiDownload2Fill size={20} className='cursor-pointer' />
                </div> */}
                <div>
                  {}
                <QRCode id="qr-code" value={companyData.companyName} className='hidden'></QRCode>
                <RiDownload2Fill size={20} className='cursor-pointer' onClick={fetchData}/>
              </div>

                {/* Container for PDF generation, hidden from view */}
                
              </div>
              

              
              <div className='grid pb-12  w-[91%]  grid-cols-3 gap-6 max-sm:grid-cols-1'>
                  <div className='mt-6 col-span-2 bg-white  h-[100vh] rounded-lg'>
                      <h1 className='pt-6 pr-6 font-extrabold text-[#6e68c4] text-[1.1rem]'>قائمة المتقدمين</h1>
                      <br />
                      <hr className='flex justify-center w-full' />
                      <div className='flex justify-center bg-[#F3F6FF] w-[93%] mt-4 mr-10'>
    <div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white max-sm:w-[80vw]">
      <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white " aria-label="المتقدمون"  defaultChecked/>
      <div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6">
        {/* <p className='text-lg font-bold mb-5' > قائمة الشركات</p> */}
        {!checkPosition && !checkEmp ? (
          <table className="w-[20vw] whitespace-nowrap max-sm:table-xs">
          <tbody>
            <tr className="focus:outline-none h-16 border border-[#e4e6e6] bg-[#fafafa] rounded">
            <th className="text-right p-3 px-5"> الأسم</th>
            <th className="text-right p-3 px-5">المعسكر </th>
            <th className="text-right p-3 px-5">الأيميل </th>
            <th className="text-right p-3 px-5">الحالة </th>
            <th className="text-right p-3 px-5 ">حذف </th>

          </tr>
              <tr tabindex="0" className="focus:outline-none h-16 border border-[#e4e6e6] rounded">
                  {/* <td className="">
                      <div className="flex items-center pl-5">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk0IrfQt8yu8km4DYRG69OOhe2GQlK5NLvzIk23B3u77AjSRLJ3NLOqK9_W53M8jHV6Y&usqp=CAU" alt="" srcset="" className='w-[7vw] h-[7vh] mr-2' />
                      </div>
                  </td> */}
                  <td className="">
                      <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-5">   نوره محمد  </p>
                      </div>
                  </td>
                  <td className="">
                      <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">   معسكر جافاسكربت  </p>
                      </div>
                  </td>
                  <td className="">
                      <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2"> Nora@hotmail.com</p>
                      </div>
                  </td>
                  <td className="">
                      <div className="flex items-center pl-5">
                          <p className="text-base px-4 bg-[#f7f8c8] py-1  rounded-md text-[#b9b9b7] font-medium leading-none cursor-pointer mr-2"> بالأنتظار</p>
                      </div>
                  </td> 

                  <td className="">
                      <div className="flex justify-center items-center pl-5">
                          <img src={deleteStudent} className='w-4 cursor-pointer' onClick={() => { document.getElementById('my_modal_1').showModal()}}/>
                          <dialog id="my_modal_1" className="modal ">
                            <div className="modal-box w-[35vw] max-w-5xl" >

                            <p className="py-4 text-[1.1rem]">هل انت متأكد من الغاء الطالب؟</p>
                            <div className="modal-action">
                            <form method="dialog" className='gap-6'>
                           
                            <button className="btn ml-1 bg-[#99D2CB] text-white" >نعم</button>
                           
                           
                            <button className="btn bg-[#99D2CB] text-white">لا</button>
                           

                            </form>
                            </div>
                            </div>
                        </dialog>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
          
        ):(
       
                  <p className='text-[1.2rem] mt-4 text-red-600 font-medium'> لعرض قائمة المتقدمين, يرجى التأكد من ادخال المسميات الوظيفية المطلوبة و اسماء الموظفين المشاركين</p>

        
        )}
        
              </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white" aria-label="مكتمل" />
      <div role="tabpanel" className="tab-content  bg-white border-base-100 rounded-box p-6">
      {/* <p className='text-lg font-bold mb-5' > قائمة الطلاب</p> */}
      {!checkPosition && !checkEmp ? (
         <table className="w-[48.6vw] whitespace-nowrap max-sm:table-xs">
         <tbody>
           <tr className="focus:outline-none h-16 border border-[#e4e6e6] bg-[#fafafa] rounded">
           <th className="text-right p-3 px-5"> الأسم</th>
           <th className="text-right p-3 px-5">المعسكر </th>
           <th className="text-right p-3 px-5">الأيميل </th>
           <th className="text-right p-3 px-5">الحالة </th>
         </tr>
             <tr tabindex="0" className="focus:outline-none h-16 border border-[#e4e6e6] rounded">
                 {/* <td className="">
                     <div className="flex items-center pl-5">
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk0IrfQt8yu8km4DYRG69OOhe2GQlK5NLvzIk23B3u77AjSRLJ3NLOqK9_W53M8jHV6Y&usqp=CAU" alt="" srcset="" className='w-[7vw] h-[7vh] mr-2' />
                     </div>
                 </td> */}
                 <td className="">
                     <div className="flex items-center pl-5">
                         <p className="text-base font-medium leading-none text-gray-700 mr-5">   نوره محمد  </p>
                     </div>
                 </td>
                 <td className="">
                     <div className="flex items-center pl-5">
                         <p className="text-base font-medium leading-none text-gray-700 mr-2">   معسكر جافاسكربت  </p>
                     </div>
                 </td>
                 <td className="">
                     <div className="flex items-center pl-5">
                         <p className="text-base font-medium leading-none text-gray-700 mr-2"> Nora@hotmail.com</p>
                     </div>
                 </td>
                 <td className="">
                     <div className="flex items-center pl-5">
                         <p className="text-base px-4 bg-[#ceefd4] py-1  rounded-md text-[#b9b9b7] font-medium leading-none  mr-2"> مكتمل</p>
                     </div>
                 </td> 

                 {/* <td className="">
                     <div className="flex items-center pl-5">
                         <img src={deleteStudent}> </img>
                     </div>
                 </td>  */}
             </tr>
         </tbody>
     </table>  
      ):(
        
                  <p className='text-[1.2rem] mt-4 text-red-600 font-medium'> لعرض قائمة المتقدمين, يرجى التأكد من ادخال المسميات الوظيفية المطلوبة و اسماء الموظفين المشاركين</p>

        
        )}
     
    
                        </div>
    </div>
    </div>
                      
              
            
                      
                  </div>
                  <div className='mt-6 bg-white h-[100vh] rounded-lg max-sm:h-[50vh] max-sm:w-[90vw]'>
                    <div className='flex items-center justify-between'>
                    <h1 className='pt-6 pr-6 font-extrabold text-[#6e68c4] text-[1.1rem]'>  تفاصيل الشركة </h1>
                    <button className="btn mt-6 rounded-lg text-white bg-[#f39e4e] py-1 px-3 ml-6" onClick={()=>document.getElementById('my_modal_4').showModal()}> تعديل</button>
                    <dialog id="my_modal_4" class="modal">
  <div className="modal-box w-[50vw] max-w-5xl flex flex-col p-4 py-2" style={{ maxHeight: '95vh', overflowY: 'auto' }}>
    <h3 className="font-bold text-lg py-4 text-[#6e68c4]">تعديل تفاصيل الشركة</h3>
   
    <label className="mt-4 font-bold">نبذه عن الشركة</label>
    <textarea className="py-2 mt-1 rounded-md resize-none overflow-y-auto" rows="8" cols="50" value={companyupdated.description} onChange={handleDescriptionChange}></textarea>
    <div className="flex items-center">
    <div className='flex flex-col'>
    <label className="font-bold  mt-4 mr-0">تحميل شعار الشركة:</label>
    <input className="py-1 mt-4 rounded-md" type="file" onChange={handleLogoChange}></input>
    </div>
      
    <div className='flex flex-col'>
    <label className="mt-4 font-bold">المنطقة</label>
    <input className="py-2 mt-4 w-[12vw] px-2 rounded-md" type="text" value={companyupdated.Location} onChange={handleLocationChange}></input>
    
    </div>
    </div>
    
    <div className='flex items-center  justify-between '>
    <label className="mt-4 font-bold">الوظائف المتاحة</label>
    <IoIosAddCircle size={23} fill='#6e68c4' className='mt-4 ' onClick={addPosition}/>


    </div>
    <div className='flex flex-wrap gap-4 w-full mt-4 rounded-md bg-slate-400 p-4'>
      {(companyupdated.jobPositions && companyupdated.jobPositions.length >0) &&(
        <>
          {companyupdated.jobPositions.map((positionName, index) => (
            <div className='rounded-md h-auto mt-2 px-4 flex gap-2 items-center' key={index}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="py-0 mt-2 w-auto flex-shrink-0 px-2 rounded-full pl-4 border-[1.2px] bg-purple-100 pr-8"
                  style={{ minWidth: '50px' }} // Adjust minimum width as needed
                  value={positionName}
                  onChange={(e) => handlePositionsChange(e, index)}
                  disabled // Assuming you want to disable editing for existing positions
                />
                <img
                  src={close}
                  className='w-5 h-4 ml-2 cursor-pointer'
                  onClick={() => deletePosition(index)}
                  alt="Delete"
                />
              </div>
            </div>
            
          ))}
          </>

      ) }


  {showNewPositionInput && (
    <div className='rounded-md h-auto mt-2 px-4 flex gap-2 items-center'>
      <input
        type="text"
        className="py-0 mt-1 w-auto px-2 rounded-full pl-4 border-[1.2px] bg-purple-100 pr-8"
        style={{ minWidth: '50px' }} // Adjust minimum width as needed
        placeholder="عنوان الوظيفة"
        value={newPosition}
        onChange={handleNewPositionChange}
      />
      <IoIosAddCircle size={23} fill='#6e68c4' className='cursor-pointer' onClick={handleSubmit} />
    </div>
  )}
</div>

    
    <div className="modal-action mt-4">
      <button className="btn" onClick={() => updateInfo(id, getLocal.id)}>حفظ</button>
    </div>
  </div>
</dialog>

                    </div>
                      <br />
                      <hr className='flex justify-center w-full' />
                      <div className="flex flex-col  justify-center w-full">
                        <p className='mr-6 font-bold mt-6 text-[1.04rem]'>نبذه عن الشركة:</p>
                        <p  className='border-non pr-6 pt-2 text-[#202020] ml-6  text-[0.9rem] text-justify' >{companyData.description}</p>
                        <div className='pt-2 pr-5 flex gap-1 mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[#99D2CB]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className='text-[gray] text-[0.8rem] '>{companyData.Location} </p>
                    </div> 

                    <p className='mr-6 font-bold mt-8 text-[1.04rem]'>الموظفين المشاركين:</p>
                    <div className='flex gap-2 mt-2'>
                    {
                      companyData && companyData.EmpList && companyData.EmpList.length > 0 ? (
                        <>
                          {companyData.EmpList.map((position, index) => (
                            <p key={index} className='px-2 mr-6 mt-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5]'>
                              {position}
                            </p>
                          ))}
                        </>
                      ) : (
                        <p className='text-[1rem] mr-[1.6rem] mt-2 text-gray-500'>لايوجد</p>
                      )
                    }
                                        
     

                    </div>
                    <p className='mr-6 font-bold mt-8 text-[1.04rem]'>الشواغر المتاحة:</p>

                    <div className='flex gap-2 mt-2'>
                    {
                      companyData && companyData.jobPositions && companyData.jobPositions.length > 0 ? (
                        <>
                          {companyData.jobPositions.map((position, index) => (
                            <p key={index} className='px-2 mr-6 mt-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5]'>
                              {position}
                            </p>
                          ))}
                        </>
                      ) : (
                        <p className='text-[1rem] mr-[1.6rem] mt-2 text-gray-500'>لايوجد</p>
                      )
                    }
                     
     

                    </div>
                  


               </div>
   
                      </div>
                  
              </div>
              {/* <div className='mt-12 bg-white w-[91%] h-[25vh] rounded-lg'>
                  <h1 className='pt-6 pr-6 font-bold text-[1.1rem] text-[#5C59C2]'> حسابات التواصل الاجتماعي </h1>
                  <br />
                  <hr className='flex justify-center w-full' />
                  <div className="bg-white w-full h-[5vh] py-8 flex items-center justify-center gap-40 flex-wrap">
                      <button className="group transition-all duration-500 hover:-translate-y-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                          <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#337FFF"/>
                          <path d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z" fill="white"/>
                          </svg>
                      </button>
                      <button className="group transition-all duration-500 hover:-translate-y-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                          <rect x="0.138672" width="91.5618" height="91.5618" rx="15" fill="black"/>
                          <path d="M50.7568 42.1716L69.3704 21H64.9596L48.7974 39.383L35.8887 21H21L40.5205 48.7983L21 71H25.4111L42.4788 51.5869L56.1113 71H71L50.7557 42.1716H50.7568ZM44.7152 49.0433L42.7374 46.2752L27.0005 24.2492H33.7756L46.4755 42.0249L48.4533 44.7929L64.9617 67.8986H58.1865L44.7152 49.0443V49.0433Z" fill="white"/>
                          </svg>
                      </button>
                      <button className="group transition-all duration-500 hover:-translate-y-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 93" fill="none">
                          <rect x="1.13867" y="1" width="91.5618" height="91.5618" rx="15" fill="#006699"/>
                          <path d="M37.1339 63.4304V40.9068H29.6473V63.4304H37.1346H37.1339ZM33.3922 37.8321C36.0023 37.8321 37.6273 36.1025 37.6273 33.9411C37.5785 31.7304 36.0023 30.0491 33.4418 30.0491C30.8795 30.0491 29.2061 31.7304 29.2061 33.9409C29.2061 36.1023 30.8305 37.8319 33.3431 37.8319H33.3916L33.3922 37.8321ZM41.2777 63.4304H48.7637V50.8535C48.7637 50.1813 48.8125 49.5072 49.0103 49.0271C49.5513 47.6815 50.7831 46.2887 52.8517 46.2887C55.5599 46.2887 56.644 48.354 56.644 51.3822V63.4304H64.1297V50.516C64.1297 43.598 60.4369 40.3787 55.5115 40.3787C51.4733 40.3787 49.6998 42.6357 48.7144 44.173H48.7643V40.9075H41.2781C41.3759 43.0205 41.2775 63.4312 41.2775 63.4312L41.2777 63.4304Z" fill="white"/>
                          </svg>
                      </button>
                  </div>
              </div> */}
          </div>

      </div>



          {/* <div className='flex mt-[-1.5%] justify-center'>
          <div className='w-full flex justify-between items-center h-[40vh] '>
          <div className=' flex flex-col'>
          <p className='text-[1.3rem] mr-12 font-medium text-[#6861a4]'>مرحبا <span className='text-[1.8rem] font-bold'>علم</span> في معرض التوظيف</p>
          <button className='px-2 w-[10vw] mr-12 mt-10 py-2 bg-[#f39e4e] rounded-lg text-white'>تعديل بياناتك</button>

          </div>
    <div  className=" h-[36vh] ml-12 flex  justify-center items-center  w-[20vw] overflow-hidden  rounded-[40%_60%_60%_40%/55%_73%_27%_45%] transition-all duration-500  drop-shadow-[0px_25px_6px_rgba(0000.20)]">
    <img src='https://autoware.org/wp-content/uploads/2023/10/LOGO.png' className='w-[25vw] rounded-full h-[25vh]'></img>

  </div>
          </div>

          </div>
          <div className='flex justify-center mt-24 w-full bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-30'>
        <div className='tab-section w-[95%] flex flex-col items-center  rounded-lg p-5 min-h-[400px] '>
          <div className='flex gap-1 bg-[#ededed] w-[40vw]'>
            <button
              className={`p-4 rounded-lg text-gray-700 font-bold flex-grow w-80 hover:bg-gray-300 hover:bg-opacity-40 ${activeTab === 'tab1' ? 'active-tab' : ''}`}
              onClick={() => handleTabClick('tab1')}
            >
              المتقدمون
            </button>
            <button
              className={`p-4 rounded-lg text-gray-700 font-bold flex-grow w-80 hover:bg-gray-300 hover:bg-opacity-40 ${activeTab === 'tab2' ? 'active-tab' : ''}`}
              onClick={() => handleTabClick('tab2')}
            >
              اكتمال
            </button>
          
          </div>

          <div className='mt-4  w-full'>
            <div id='tab1' className={`${activeTab === 'tab1' ? 'active-tab-content' : 'hidden-tab-content'}`}>
            <div className='flex justify-center w-full mt-12'>
    <div className='grid gap-y-0 w-[90%] grid-cols-4 '>

      <div class="text-gray-900">
        <div class=" flex items-center justify-center">
          <div class="bg-white h-[54vh] w-[19vw] rounded-lg overflow-hidden shadow-2xl">
            <div className="h-[0vh]"></div>
            <img class="h-[27vh] w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
            <div class="p-6">
              <div class="flex items-baseline">
              
              </div>
              <h4 class="mt-2 font-semibold text-lg leading-tight truncate">نوره الحربي</h4>

              <div class="mt-4">
                <span className='ml-2'>سنوات الخبرة:</span>
                <span class="text-gray-600 text-sm">2</span>
              </div>
              <div class="mt-2 flex items-center">
                <span class="text-teal-600 font-semibold">
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>
                </span>
                <span class="ml-2 text-gray-600 text-sm">انتظار</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-gray-900">
        <div class=" flex items-center justify-center">
          <div class="bg-white h-[54vh] w-[19vw] rounded-lg overflow-hidden shadow-2xl">
            <div className="h-[0vh]"></div>
            <img class="h-[27vh] w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
            <div class="p-6">
              <div class="flex items-baseline">
              
              </div>
              <h4 class="mt-2 font-semibold text-lg leading-tight truncate">نوره الحربي</h4>

              <div class="mt-4">
                <span className='ml-2'>سنوات الخبرة:</span>
                <span class="text-gray-600 text-sm">2</span>
              </div>
              <div class="mt-2 flex items-center">
                <span class="text-teal-600 font-semibold">
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>
                </span>
                <span class="ml-2 text-gray-600 text-sm">انتظار</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-gray-900">
        <div class=" flex items-center justify-center">
          <div class="bg-white h-[54vh] w-[19vw] rounded-lg overflow-hidden shadow-2xl">
            <div className="h-[0vh]"></div>
            <img class="h-[27vh] w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
            <div class="p-6">
              <div class="flex items-baseline">
              
              </div>
              <h4 class="mt-2 font-semibold text-lg leading-tight truncate">نوره الحربي</h4>

              <div class="mt-4">
                <span className='ml-2'>سنوات الخبرة:</span>
                <span class="text-gray-600 text-sm">2</span>
              </div>
              <div class="mt-2 flex items-center">
                <span class="text-teal-600 font-semibold">
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>
                </span>
                <span class="ml-2 text-gray-600 text-sm">انتظار</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-gray-900">
        <div class=" flex items-center justify-center">
          <div class="bg-white h-[54vh] w-[19vw] rounded-lg overflow-hidden shadow-2xl">
            <div className="h-[0vh]"></div>
            <img class="h-[27vh] w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
            <div class="p-6">
              <div class="flex items-baseline">
            
              </div>
              <h4 class="mt-2 font-semibold text-lg leading-tight truncate">نوره الحربي</h4>

              <div class="mt-4">
                <span className='ml-2'>سنوات الخبرة:</span>
                <span class="text-gray-600 text-sm">2</span>
              </div>
              <div class="mt-2 flex items-center">
                <span class="text-teal-600 font-semibold">
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>
                </span>
                <span class="ml-2 text-gray-600 text-sm">انتظار</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

            </div>
            <div id='tab2' className={`${activeTab === 'tab2' ? 'active-tab-content' : 'hidden-tab-content'}`}>
              <p>hello 1</p>
            </div>
            <div id='tab3' className={` ${activeTab === 'tab3' ? 'active-tab-content' : 'hidden-tab-content'}`}>
              <p>hello 2</p>
            </div>
          </div>
        </div>
      </div>

      
        */}
        <style jsx>{`
    input[type="radio"][role="tab"]:checked {
      background-color: white;
      color: black;
      border-color: #E5E7EB;
    }
  `}</style>
      </div>
    )
  }

  export default CompanyDetails
