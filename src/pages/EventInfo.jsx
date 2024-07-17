import React from 'react'
import Nav from '../components/Nav'
import { CiCalendar } from "react-icons/ci";
// import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";



const EventInfo = () => {
  return (
    <>
<Nav/>
    <div className=' h-full w-full bg-[#F3F6FF]' dir='rtl'>
        <div className='flex max-sm:flex-wrap gap-5 p-10 bg-[#f3f3f3]'>
        <img src="https://static.sayidaty.net/styles/900_scale/public/2024-06/349805.jpg.webp" className='w-[30vw] h-[60vh] rounded-lg  max-sm:w-full' alt="" srcset="" />
        <div className='flex flex-col w-full bg-white rounded-lg  h-[60vh]  mr-4 p-3 max-sm:w-[90vw] max-sm:mr-0' >
        <p className='pt-6 pr-6 font-extrabold text-[#5C59C2] text-[1.5rem]'>معرض طويق التوظيفي </p>

        <div className='flex gap-2 mt-4 pt-2 pr-5'>
        <CiCalendar className='w-5 h-5 ' />
        <p className='text-base font-medium '> 01/01/2024</p>
        <p className='text-base font-medium '>الى 03/01/2024</p>
        </div>
        <div className='pt-2 pr-5 flex gap-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[#99D2CB]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='text-[gray] text-[0.8rem] '> كراج</p>
            </div>
        <div className='mt-4'>
        <p className='pr-6 pt-2 text-[#202020] text-[0.9rem]'><span className='font-bold '>التفاصيل:</span> نتظرك +650 فرصة وظيفية في +80 جهة من مختلف القطاعات ..
نود تذكيرك بحضور (برنامج طويق للتوظيف) المقام خلال:

الأحد والإثنين 2-3 يونيو
من 4:00م إلى 8:00م
تسجيل الحضور: 3:00م

*الدعوة خاصة: يلزم إبراز الهوية للموظف المختص وإبراز باركود القبول من ملفك الشخصي عبر موقع أكاديمية طويق.

نتمنى لك التوفيق والنجاح.</p>

            {/* <p>ت</p> */}
        </div>

<div className='flex mt-7 gap-4   '>
  <button>
  <FaEdit   style={{ color: 'black', fontSize: '28px' }}/>                                   
  </button>
  <button>
  <RiDeleteBin6Line  style={{ color: 'red', fontSize: '28px' }}/>                                   
  </button>


</div>


        </div>
        
        </div>
        <div className='flex justify-center bg-[#F3F6FF] w-[93%] mr-10'>
  <div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white">
    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2] " aria-label="الشركات" />
    <div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6">
      <p className='text-lg mb-5 font-extrabold text-[#5C59C2] text-[1.1rem]' > قائمة الشركات</p>
    <table className="w-full whitespace-nowrap max-sm:table-xs">
                        <tbody>
                        <tr className="focus:outline-none h-16 border  rounded border-[#99D2CB] bg-[#fafafa]">
              <th className="text-right p-3 px-5">الصورة</th>
              <th className="text-right p-3 px-5">الاسم </th>
              <th className="text-right p-3 px-5">الإيميل</th>
              <th className="text-right p-3 px-5">المجال</th>


              <th></th>
            </tr>
                            <tr tabindex="0" className="focus:outline-none h-16 border border-base-100 rounded">
                               
                                <td className="">
                                    <div className="flex items-center pl-5">
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk0IrfQt8yu8km4DYRG69OOhe2GQlK5NLvzIk23B3u77AjSRLJ3NLOqK9_W53M8jHV6Y&usqp=CAU" alt="" srcset="" className='w-[7vw] h-[7vh] mr-2' />
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">  شركة سدايا  </p>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">SADIAI@gmail.com    </p>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">تقنية معلومات   </p>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center ">
                                      <button>
                                      <IoMdInformationCircleOutline style={{ color: 'black', fontSize: '20px' }} />                                   
                                      </button>

                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center ">
                                      <button>
                                      <RiDeleteBin6Line  style={{ color: 'red', fontSize: '20px' }}/>
                                      </button>
                               </div>
                                </td>
                            
                      
                              
                                <td>
                               
                                </td>
                            </tr>
                        </tbody>
                    </table>  
            </div>

    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2]" aria-label="الطلاب" defaultChecked />
    <div role="tabpanel" className="tab-content  bg-white border-base-100 rounded-box p-6">
    <p className='text-lg mb-5 font-extrabold text-[#5C59C2] text-[1.1rem]' > قائمة الطلاب</p>

    <table className="w-full whitespace-nowrap">
                        <tbody>
                        <tr className="focus:outline-none h-16 border rounded border-[#99D2CB] bg-[#fafafa]">
              <th className="text-right p-3 px-5">الأسم</th>
              <th className="text-right p-3 px-5">المعسكر</th>
              <th className="text-right p-3 px-5">الإيميل</th>
              <th className="text-right p-3 px-5">الحالة</th>


              <th></th>
            </tr>
                            <tr tabindex="0" className="focus:outline-none h-16 border border-base-100 rounded">
                               
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">زياد الصاعدي </p>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">معسكر تصميم واجهات  </p>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">ziad@gmail.com    </p>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">مقبول   </p>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center ">
                                      <button>
                                      <IoMdInformationCircleOutline style={{ color: 'black', fontSize: '20px' }} />                                   
                                      </button>

                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                      <button>
                                      <RiDeleteBin6Line  style={{ color: 'red', fontSize: '20px' }}/>  
                                      </button>
                                  </div>
                                </td>
                            
                      
                              
                                <td>
                               
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