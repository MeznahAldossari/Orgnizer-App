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
    <div className=' h-full w-full bg-[#f7f7f7]' dir='rtl'>
        <div className='flex max-sm:flex-wrap w-full gap-5 p-10 ml-6 bg-[#f7f7f7] max-sm:w-full'>
        <img src="https://static.sayidaty.net/styles/900_scale/public/2024-06/349805.jpg.webp" className='w-[30vw] h-[60vh] rounded-lg object-cover max-sm:w-[82vw] max-sm:h-[45vh]' alt="صورة المعرض" srcSet="" />
        <div className='flex flex-col w-[58vw] bg-white rounded-lg h-[60vh] mr-4 p-3 max-sm:w-[82vw] max-sm:h-[45vh] max-sm:mr-0' >
        <p className='pt-6 pr-4 font-extrabold text-[#5C59C2] text-[1.5rem]'>معرض طويق التوظيفي </p>

        <div className='flex gap-2 mt-4 pt-2 pr-5'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#99D2CB]">
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
        </svg>

        <p className='text-[gray] text-[0.9rem] '> 01/01/2024</p>
        <p className='text-[gray] text-[0.9rem] '>- 03/01/2024</p>
        </div>
        <div className='pt-2 pr-5 flex gap-8'>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[#99D2CB]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='text-[gray] text-[0.9rem] '> كراج</p>
            </div>
            <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[#99D2CB]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className='text-[gray] text-[0.9rem] '> 4:00 م - 8:00 م</p>
            </div>
        </div>
        <div className='mt-4'>
        <p className='pr-6 pt-2 text-[#202020] text-[0.9rem]'><span className='font-bold  '>التفاصيل:</span> نتظرك +650 فرصة وظيفية في +80 جهة من مختلف القطاعات ..
نود تذكيرك بحضور (برنامج طويق للتوظيف) المقام خلال:

الأحد والإثنين 2-3 يونيو
من 4:00م إلى 8:00م
تسجيل الحضور: 3:00م

*الدعوة خاصة: يلزم إبراز الهوية للموظف المختص وإبراز باركود القبول من ملفك الشخصي عبر موقع أكاديمية طويق.

 نتمنى لك التوفيق والنجاح.</p>

            {/* <p>ت</p> */}
        </div>

<div className='flex mt-7 gap-2 justify-end items-end pb-1 h-[30vh] mb-2 '>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#6060af] h-7 w-7 max-sm:h-6 max-sm:w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  </button>
  <button onClick={() => { document.getElementById('my_modal_4').showModal()}}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#d33232] h-7 w-7 ml-2 max-sm:h-6 max-sm:w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>                                
  </button>
    <dialog id="my_modal_4" className="modal ">
        <div className="modal-box w-[35vw] max-w-5xl">
            <p className="py-4 text-[1.1rem]">هل انت متأكد من حذف المعرض</p>
            <div className="modal-action">
                <form method="dialog" className='gap-6'>
                    <button className="btn ml-1 bg-[#99D2CB] text-white" >نعم</button>
                    <button className="btn bg-[#99D2CB] text-white">لا</button>
                </form>
            </div>
        </div>
    </dialog>
</div>


        </div>
        
        </div>
        
<div className='flex justify-center bg-[#f7f7f7] w-[93%] mr-10  max-sm:mr-0 max-sm:w-full'>
<div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white rounded-lg">
<input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2] " aria-label="الشركات" defaultChecked/>
<div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6">
<p className='text-lg mb-5 font-extrabold text-[#5C59C2] ' > قائمة الشركات</p>

<table className="w-full text-md bg-white shadow-md rounded mb-4 max-sm:text-xs max-sm:table-xs">
    <tbody>
        <tr className="focus:outline-none h-16 border border-[#e4e6e6] bg-[#fafafa] rounded">
            <th className="text-right p-3 px-5 max-sm:p-1">الصورة</th>
            <th className="text-right p-3 px-5 max-sm:p-1">الاسم </th>
            <th className="text-right p-3 px-5 max-sm:p-1">الإيميل</th>
            <th className="text-right p-3 px-5 max-sm:p-1">المجال</th>
            <th className="text-right p-3 px-5 max-sm:p-1">حذف</th>
        </tr>
        <tr className='focus:outline-none h-16 border border-[#e4e6e6] rounded' >
            <td className="p-3 px-5 max-sm:p-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk0IrfQt8yu8km4DYRG69OOhe2GQlK5NLvzIk23B3u77AjSRLJ3NLOqK9_W53M8jHV6Y&usqp=CAU" alt="" srcSet="" className='w-[7vw] h-[10vh] mr-2 object-cover max-sm:h-[5vh] max-sm:w-full ' />
            </td>
            
            <td className="p-3 px-5 max-sm:p-1">
                <div className='flex flex-wrap'>
                    <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[10ch] break-words max-sm:w-[10ch]">
                        شركة  سدايا 
                    </p>
                </div>
            </td>

            <td className="p-3 px-5 max-sm:p-1">
                <div className='flex flex-wrap'>
                    <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch]">SADIAI@gmail.com </p>
                </div>
            </td>
            <td className="p-3 px-5 max-sm:p-1">
                <div className='flex flex-wrap'>
                    <p className="text-base font-medium max-sm:text-xs leading-none text-gray-700 w-[15ch] break-words max-sm:w-[10ch] ">تقنية معلومات   </p>
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
                <div className="flex items-center ">
                    <button onClick={() => { document.getElementById('my_modal_4').showModal()}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#d33232]">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <dialog id="my_modal_4" className="modal ">
                        <div className="modal-box w-[35vw] max-w-5xl">
                        <p className="py-4 text-[1.1rem]">هل انت متأكد من حذف هذه الشركة</p>
                            <div className="modal-action">
                                <form method="dialog" className='gap-6'>
                                    <button className="btn ml-1 bg-[#99D2CB] text-white">نعم</button>
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