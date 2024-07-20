
import React, { useEffect , useState} from 'react'
import Pic from '../assets/pic1.jpg'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

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
    <div className='flex max-sm:mt-14 flex-col w-full mt-32   bg-[#f7f6f5b3]'>
      <div className='flex'>
      {(getLocal !== undefined && getLocal && getLocal.role === "admin" &&
      <>
       <Link to='/AddEvents'>
       <button className='px-4 py-1 mt-6 max-sm:mt-0 text-white rounded-lg mr-12 bg-[#f39e4e]'>اضافة معرض</button>
       </Link>
       </>
       )}
       

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
      </div>
    </div>
  )}

export default Cards