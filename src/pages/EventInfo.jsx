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




const EventInfo = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate()

  
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
  
  const handleDelete = async () => {
    const confirmDelete = window.confirm('هل تريد حذف هذا المعرض ؟');
    if (confirmDelete) {
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
    }
  };
  const handleDeleteCompany = async (companyId) => {
    const confirmDelete = window.confirm('هل تريد حذف هذه الشركة؟');
    if (confirmDelete) {
      try {
        const companyDocRef = doc(db, 'EventDetails', eventId, 'myCompanies', companyId);
        await deleteDoc(companyDocRef);
        setCompanies(companies.filter(company => company.id !== companyId));
        console.log('Company deleted successfully');
      } catch (error) {
        console.error('Error deleting company:', error);
      }
    }
  };

  return (
    <>
<Nav/>
    <div className=' h-full w-full bg-[#F3F6FF]' dir='rtl'>
    <div className='flex max-sm:flex-wrap gap-5 p-10 bg-[#F3F6FF]'>
      <img src={event.imageUrl} className='w-[30vw] h-[60vh] max-sm:w-full' alt={event.eventName} />
      <div className='flex flex-col w-full bg-white h-[60vh] mr-4 p-3 max-sm:w-[90vw] max-sm:mr-0'>
        <p className='text-2xl font-bold'>{event.eventName}</p>
        <div className='flex gap-2 mt-4'>
          <CiCalendar className='w-5 h-5' />
          <p className='text-base font-medium'>{event.startDate} الى</p>
          <p className='text-base font-medium'>{event.endDate}</p>
        </div>
        <div className='flex gap-2 mt-4'>
        <svg className="w-5 h-5  text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V10a.5.5 0 01-.146.354l-2 2a.5.5 0 11-.708-.708L9.793 10H9V7.5a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
        <p className='text-base font-medium'>{event.startTime} الى</p>
          <p className='text-base font-medium'>{event.endTime}</p>
        </div>
        <div className='flex gap-2 mt-4'>
          <FaLocationDot className='w-5 h-5' />
          <p className='text-base font-medium'>{  JSON.stringify(event.position)}</p>
        </div>
        <div className='mt-4'>
          <p className='text-lg font-semibold'>التفاصيل :</p>
          <p>{event.details}</p>
        </div>
        <div className='mt-4'>
          <p className='text-lg  font-semibold'>الفئات المستهدفة :</p>
          <div className='flex flex-wrap gap-2'>
    {event.mainCategory.map((category, index) => (
      <p key={index} className='bg-gray-100 p-2 rounded'>{category}</p>
    ))}
  </div>        </div>
        <div className='flex mt-7 gap-4'>
        <button onClick={() => setIsModalOpen(true)}>
            <FaEdit style={{ color: 'black', fontSize: '28px' }} />
          </button>

          <button onClick={handleDelete}>
                <RiDeleteBin6Line style={{ color: 'red', fontSize: '28px' }} />
              </button>
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
        <div className='flex justify-center  bg-[#F3F6FF] w-[93%] mr-10 max-sm:mr-3 '>
  <div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white">
    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white " aria-label="الشركات" />
    <div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6">
      <p className='text-lg font-bold mb-5' > قائمة الشركات</p>
      <table className="w-full text-md bg-white shadow-md rounded mb-4   max-sm:text-xs max-sm:table-xs" >
          <tbody>
            <tr className="border-b">
            <th className="text-right p-3 px-5 max-sm:p-1">الصورة</th>
              <th className="text-right p-3 px-5 max-sm:p-1">الاسم</th>
              <th className="text-right p-3 px-5 max-sm:p-1">الإيميل</th>
              <th></th>
            </tr>
            {companies.map((company) => (
                    <tr key={company.id} className={`border-b hover:bg-slate-200`}>
                      <td className="p-3 px-5 max-sm:p-1">
                        <img src={company.logo}  className='w-[7vw] h-[7vh] mr-2' />
                      </td>
                      <td className="p-3 px-5 max-sm:p-1">
                        <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 mr-2">{company.companyName}</p>
                      </td>
                      <td className="p-3 px-5 max-sm:p-1">
                        <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 mr-2">{company.email}</p>
                      </td>
                    
                      <td className="p-3 px-5 flex max-sm:mt-3 justify-evenly max-sm:p-1">
                        <button>
                          <IoMdInformationCircleOutline style={{ color: 'black', fontSize: '20px' }} />
                        </button>
                        <button onClick={() => handleDeleteCompany(company.id)}>
        <RiDeleteBin6Line style={{ color: 'red', fontSize: '20px' }} />
      </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>

    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white " aria-label="الطلاب" defaultChecked />
    <div role="tabpanel" className="tab-content  bg-white border-base-100 rounded-box p-6  ">
    <p className='text-lg font-bold mb-5' > قائمة الطلاب</p>
    <table className="w-full text-md bg-white shadow-md rounded mb-4   max-sm:text-xs max-sm:table-xs" >
          <tbody>
            <tr className="border-b">
            <th className="text-right p-3 px-5 max-sm:p-1">الأسم</th>
              <th className="text-right p-3 px-5 max-sm:p-1">المعسكر</th>
              <th className="text-right p-3 px-5 max-sm:p-1">الإيميل</th>
              <th className="text-right p-3 px-5 max-sm:p-1">الحالة</th>
              <th></th>
            </tr>
              <tr  className={`border-b hover:bg-slate-200 `}>
                <td className="p-3 px-5 max-sm:p-1 ">
                <p className="text-base font-medium leading-none max-sm:text-xs text-gray-700 mr-2">زياد الصاعدي </p>
                </td>
                <td className="p-3 px-5 max-sm:p-1">
                <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 mr-2">معسكر تصميم واجهات  </p>
                </td>
                <td className="p-3 px-5 max-sm:p-1">
                <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 mr-2">ziad@gmail.com    </p>
                </td>
                <td className="p-3 px-5 max-sm:p-1 ">
                <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 mr-2">مقبول   </p>

                </td>
                <td className="p-3 px-5 flex max-sm:mt-3 justify-evenly max-sm:p-1">
                <button>
                                      <IoMdInformationCircleOutline style={{ color: 'black', fontSize: '20px' }} />                                   
                                      </button> 
                                      <button>
                                      <RiDeleteBin6Line  style={{ color: 'red', fontSize: '20px' }}/>  
                                      </button>     
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