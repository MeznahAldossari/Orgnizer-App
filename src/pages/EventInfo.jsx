import React from 'react'
import Nav from '../components/Nav'
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../config/firebase';
import { doc, getDoc, collection, query, where, getDocs,deleteDoc  } from 'firebase/firestore';
import EditEventModal from '../components/EventEdit';
import { updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';




const EventInfo = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate()
  const today = new Date();

  
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventDoc = await getDoc(doc(db, 'EventDetails', eventId));
        if (eventDoc.exists()) {
          setEvent(eventDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    const fetchCompanies = async () => {
      try {
        const companiesCollection = collection(doc(db, 'EventDetails', eventId), 'myCompanies');
        const querySnapshot = await getDocs(companiesCollection);
        const companyIds = querySnapshot.docs.map(doc => doc.id);

        const companiesDataPromises = companyIds.map(id => {
          return getDoc(doc(db, 'CompaniesData', id)).then(companyDoc => ({
            id,
            ...companyDoc.data(),
          }));
        });
        const companiesList = await Promise.all(companiesDataPromises);
        setCompanies(companiesList);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchEvent();
    fetchCompanies();
  }, [eventId]);



  if (!event) {
    return <p>Loading...</p>;
  }

 const handleSave = async (updatedEvent) => {
    try {
      const eventRef = doc(db, 'EventDetails', eventId);
      await updateDoc(eventRef, updatedEvent);
      setEvent(updatedEvent);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
  const eventEndDate = new Date(event.endDate);
  

  const handleDelete = async () => {
    try {
      const eventDocRef = doc(db, 'EventDetails', eventId);
      console.log('Attempting to delete document with ID:', eventId);
      await deleteDoc(eventDocRef);
      console.log('Document deleted successfully');
      alert('Document deleted successfully');
      navigate('/');
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleDeleteCompany = async (companyId) => {
    try {
      const companyDocRef = doc(db, 'EventDetails', eventId, 'myCompanies', companyId);
      await deleteDoc(companyDocRef);
      setCompanies(companies.filter(company => company.id !== companyId));
      console.log('Company deleted successfully');
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };
  const exportToExcel = () => {
    const filteredCompanies = companies.map(({ companyName,Location, description, email }) => ({
      Location,
      companyName,
      description,
      email
  }));
    const worksheet = XLSX.utils.json_to_sheet(filteredCompanies);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Companies");
    XLSX.writeFile(workbook, "Companies.xlsx");
  }

  return (
    <>
<Nav/>
    <div className=' h-full w-full bg-[#f7f7f7]' dir='rtl'>
        <div className='flex max-sm:flex-wrap w-full gap-5 p-10 ml-6 bg-[#f7f7f7] max-sm:w-full'>
        <img src={event.imageUrl} className='w-[30vw] h-[60vh] rounded-lg object-cover max-sm:w-[82vw] max-sm:h-[45vh]' alt={event.eventName} srcSet="" />
        <div className='flex flex-col w-[58vw] bg-white rounded-lg h-[60vh] mr-4 p-3 max-sm:w-[82vw] max-sm:h-[45vh] max-sm:mr-0' >
        <p className='pt-6 pr-4 font-extrabold text-[#5C59C2] text-[1.5rem]'>{event.eventName}</p>

        <div className='flex gap-2 mt-4 pt-2 pr-5'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#99D2CB]">
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
        </svg>

        <p className='text-[gray] text-[0.9rem] '> {event.startDate}</p>
        <p className='text-[gray] text-[0.9rem] '>- {event.endDate}</p>
        </div>
        <div className='pt-2 pr-5 flex gap-8'>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[#99D2CB]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='text-base font-medium'>{event.placename}</p>
                </div>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[#99D2CB]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className='text-[gray] text-[0.9rem] '>{event.startTime} - {event.endTime} </p>
            </div>
        </div>
        <div className='mt-4'>
        <p className='pr-6 pt-2 text-[#202020] text-[0.9rem]'><span className='font-bold  '>التفاصيل:</span>{event.details}</p>

            {/* <p>ت</p> */}
        </div>
        <div className='mt-4'>
          <p className='text-lg  font-semibold'>الفئات المستهدفة :</p>
          <div className='flex flex-wrap gap-2'>
    {event.mainCategory.map((category, index) => (
      <p key={index} className='bg-gray-100 p-2 rounded'>{category}</p>
    ))}
  </div>  
  </div>

  <div className='mt-4'>

  <p className='text-lg  font-semibold'>حالة المعرض  :</p>
  <div className='flex flex-wrap gap-2'>

  {today > eventEndDate ? <p className='bg-gray-100 p-2 rounded'>منتهي</p>
 :   <p className='bg-gray-100 p-2 rounded'>متاح</p>
 
            }
              </div>  

          </div>

        <div className='flex mt-3 gap-4'>
   
          <button onClick={() => setIsModalOpen(true)} disabled={today > eventEndDate}>
                <FaEdit style={{ color: today > eventEndDate ? 'gray' : 'black', fontSize: '28px' }} />
              </button>

        
              <td className="p-3 px-5 max-sm:p-1">
                  
                  <button disabled={today > eventEndDate} onClick={() => {
document.getElementById('my_modal_8').showModal();
}}>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#d33232]">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                      </svg>
</button>
<dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
  <div className='flex flex-col justify-center items-center gap-4'>
    <h3 className="font-bold text-[1.3rem]">هل انت متأكد من حذف المعرض</h3>
  </div>
  <div className="modal-action">
    <form method="dialog" className='flex justify-center w-full gap-2'>
      <button className="btn w-[5vw]" onClick={handleDelete}>نعم</button>
      <button className="btn w-[5vw]">لا</button>
    </form>
  </div>
</div>
</dialog>
           
          </td>
        </div>
 
      </div>
    </div>
    {isModalOpen && (
        <EditEventModal
          event={event}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
   
        
<div className='flex justify-center bg-[#f7f7f7] w-[93%] mr-10  max-sm:mr-0 max-sm:w-full'>
<div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white rounded-lg">
<input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2] " aria-label="الشركات" defaultChecked/>
<div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6">
<p className='text-lg mb-5 font-extrabold text-[#5C59C2] ' > قائمة الشركات</p>
<button
            className="flex justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            onClick={exportToExcel}
          >
            Export 
          </button>
<table className="w-full text-md bg-white shadow-md rounded mb-4 max-sm:text-xs max-sm:table-xs">
    <tbody>
        <tr className="focus:outline-none h-16 border border-[#e4e6e6] bg-[#fafafa] rounded">
            <th className="text-right p-3 px-5 max-sm:p-1">الصورة</th>
            <th className="text-right p-3 px-5 max-sm:p-1">الاسم </th>
            <th className="text-right p-3 px-5 max-sm:p-1">الإيميل</th>
            <th className="text-right p-3 px-5 max-sm:p-1">حذف</th>
        </tr>
        {companies.map((company) => (

        <tr key={company.id} className='focus:outline-none h-16 border border-[#e4e6e6] rounded' >
            <td className="p-3 px-5 max-sm:p-1">
                <img  src={company.logo}  className='w-[7vw] h-[10vh] mr-2 object-cover max-sm:h-[5vh] max-sm:w-full ' />
            </td>
            
            <td className="p-3 px-5 max-sm:p-1">
                <div className='flex flex-wrap'>
                    <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[10ch] break-words max-sm:w-[10ch]">
                    {company.companyName}
                                        </p>
                </div>
            </td>

            <td className="p-3 px-5 max-sm:p-1">
                <div className='flex flex-wrap'>
                    <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch]">{company.email} </p>
                </div>
            </td>
         
            <td className="p-3 px-5 max-sm:p-1">
      <button disabled={today > eventEndDate} onClick={() => {
        document.getElementById(`my_modal_9_${company.id}`).showModal();
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#d33232]">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
      </button>
      <dialog id={`my_modal_9_${company.id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className='flex flex-col justify-center items-center gap-4'>
            <h3 className="font-bold text-[1.3rem]">هل انت متأكد من حذف الشركة</h3>
          </div>
          <div className="modal-action">
            <form method="dialog" className='flex justify-center w-full gap-2'>
              <button type="button" className="btn w-[5vw]" onClick={() => handleDeleteCompany(company.id)}>نعم</button>
              <button type="button" className="btn w-[5vw]" onClick={() => document.getElementById(`my_modal_9_${company.id}`).close()}>لا</button>
            </form>
          </div>
        </div>
      </dialog>
    </td>
        </tr>
                          ))}

    </tbody>
</table>  
</div>

    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2]" aria-label="الطلاب" defaultChecked />
    <div role="tabpanel" className="tab-content  bg-white border-base-100 rounded-box p-6 ">
    <p className='text-lg mb-5 font-extrabold text-[#5C59C2] text-[1.1rem]' > قائمة الطلاب</p>

    <table className="w-full text-md bg-white shadow-md rounded mb-4  max-sm:text-xs max-sm:table-xs overflow-y-auto">
        <tbody>
            <tr className="focus:outline-none h-16 border border-[#e4e6e6] bg-[#fafafa] rounded">
              <th className="text-right p-3 px-5 max-sm:p-1 ">الاسم</th>
              <th className="text-right p-3 px-5 max-sm:p-1">المعسكر</th>
              <th className="text-right p-3 px-5 max-sm:p-1">الإيميل</th>
              <th className="text-right p-3 px-5 max-sm:p-1">الحالة</th>
              <th className='text-right p-3 px-5 max-sm:p-1'>حذف</th>
            </tr>
                <tr className='focus:outline-none h-16 border border-[#e4e6e6] rounded'>
                
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch]">زياد الصاعدي </p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch]">معسكر تصميم واجهات  </p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[9ch]">ziad@gmail.com</p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[6ch]">مقبول</p>
                        </div>
                    </td>
                    {/* <td className="p-3 px-5 flex max-sm:mt-3 justify-evenly max-sm:p-1"> */}
                        {/* <div className="flex items-center "> */}
                        {/* <button>
                        <IoMdInformationCircleOutline style={{ color: 'black', fontSize: '20px' }} />                                   
                        </button> */}

                        {/* </div> */}
                    {/* </td> */}
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className="flex items-center pl-5">
                            <button onClick={() => { document.getElementById('my_modal_4').showModal()}} disabled={today > eventEndDate}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#d33232]">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                </svg>  
                            </button>
                            <dialog id="my_modal_4" className="modal ">
                                <div className="modal-box w-[35vw] max-w-5xl">
                                    <p className="py-4 text-[1.1rem]">هل انت متأكد من حذف الطالب؟</p>
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

                <tr className='focus:outline-none h-16 border border-[#e4e6e6] rounded'>
                
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch]">زياد الصاعدي </p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch]">معسكر تصميم واجهات  </p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[9ch]">ziad@gmail.com</p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[6ch]">مقبول</p>
                        </div>
                    </td>
                    {/* <td className="p-3 px-5 flex max-sm:mt-3 justify-evenly max-sm:p-1"> */}
                        {/* <div className="flex items-center "> */}
                        {/* <button>
                        <IoMdInformationCircleOutline style={{ color: 'black', fontSize: '20px' }} />                                   
                        </button> */}

                        {/* </div> */}
                    {/* </td> */}
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className="flex items-center pl-5">
                            <button onClick={() => { document.getElementById('my_modal_4').showModal()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#d33232]">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                </svg>  
                            </button>
                            <dialog id="my_modal_4" className="modal ">
                                <div className="modal-box w-[35vw] max-w-5xl">
                                    <p className="py-4 text-[1.1rem]">هل انت متأكد من حذف الطالب؟</p>
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

                <tr className='focus:outline-none h-16 border border-[#e4e6e6] rounded'>
                
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch]">زياد الصاعدي </p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch]">معسكر تصميم واجهات  </p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[9ch]">ziad@gmail.com</p>
                        </div>
                    </td>
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className='flex flex-wrap'>
                            <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[6ch]">مقبول</p>
                        </div>
                    </td>
                    {/* <td className="p-3 px-5 flex max-sm:mt-3 justify-evenly max-sm:p-1"> */}
                        {/* <div className="flex items-center "> */}
                        {/* <button>
                        <IoMdInformationCircleOutline style={{ color: 'black', fontSize: '20px' }} />                                   
                        </button> */}

                        {/* </div> */}
                    {/* </td> */}
                    <td className="p-3 px-5 max-sm:p-1">
                        <div className="flex items-center pl-5">
                            <button onClick={() => { document.getElementById('my_modal_4').showModal()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#d33232]">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                </svg>  
                            </button>
                            <dialog id="my_modal_4" className="modal ">
                                <div className="modal-box w-[35vw] max-w-5xl">
                                    <p className="py-4 text-[1.1rem]">هل انت متأكد من حذف الطالب؟</p>
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
    </div>
  </div>
</div>

<style jsx>{`
  input[type="radio"][role="tab"]:checked {
    background-color: white;
    color: black;
    border-color: #E5E7EB;
  }
`}</style>



    </div>
    </>
  )
}

export default EventInfo