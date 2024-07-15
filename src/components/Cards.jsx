import React from 'react'
import Pic from '../assets/pic1.jpg'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
<>
<div className="px-6 mt-10 mr-10 sm:px-0 max-w-sm">
    <Link to='/AddEvent'><button type="button" className="text-white w-[15vw]  bg-[#5C59C2] hover:bg-[#5C59C2]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
أضف معرض<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg></button></Link>
</div>
<div className="w-fit mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-20 mt-10 mb-5">
{/* here start map */}
<div className="max-w-sm w-[20vw] bg-white rounded-lg shadow-md overflow-hidden md:max-w-md lg:max-w-lg duration-500 hover:scale-105 hover:shadow-xl">
    <img className="w-full h-48 object-cover" src={Pic} alt="Event Image" />
    <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-[#4e4e4e]">العنوان </h3>
        <div className="flex flex-col justify-start items-start gap-3 pt-2">
            <div className="flex items-center text-gray-500 font-semibold gap-2 text-sm">
                <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 5H4v10h12V7z" clipRule="evenodd"></path></svg>
                <span>التاريخ: 20 يوليو 2024</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm font-semibold gap-2">
                <svg className="w-5 h-5 mr-1 text-[#5C59C2]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V10a.5.5 0 01-.146.354l-2 2a.5.5 0 11-.708-.708L9.793 10H9V7.5a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                <span>الوقت: 6:00 مساءً</span>
            </div>
        </div>
        <div className="flex justify-end items-center mt-4">
            <p className="text-[#ffffff] font-bold text-[0.9rem] bg-[#99D2CB] hover:bg-[#a5ddd7] py-2 px-4 rounded-full cursor-pointer">التفاصيل</p>
        </div>
    </div>
    
</div>

    {/* end map */}

    </div>
</>
)
}

export default Cards