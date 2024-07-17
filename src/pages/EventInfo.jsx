import React from 'react'
import Nav from '../components/Nav'
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";



const EventInfo = () => {
  return (
    <>
<Nav/>
    <div className=' h-full w-full bg-[#F3F6FF]' dir='rtl'>
        <div className='flex max-sm:flex-wrap gap-5 p-10 bg-[#F3F6FF]'>
        <img src="https://static.sayidaty.net/styles/900_scale/public/2024-06/349805.jpg.webp" className='w-[30vw] h-[60vh]  max-sm:w-full' alt="" srcset="" />
        <div className='flex flex-col w-full bg-white  h-[60vh]  mr-4 p-3 max-sm:w-[90vw] max-sm:mr-0' >
        <p className='text-2xl font-bold'>معرض طويق التوظيفي </p>

        <div className='flex gap-2 mt-4'>
        <CiCalendar className='w-5 h-5' />
        <p className='text-base font-medium '> 01/01/2024</p>
        <p className='text-base font-medium '>الى 03/01/2024</p>
        </div>
        <div className='flex gap-2 mt-4'>
        <FaLocationDot className='w-5 h-5' />
        <p className='text-base font-medium '> كراج</p>
        </div>
        <div className='mt-4'>
            <p className=' text-lg font-semibold'>التفاصيل :</p>
            <p>تنتظرك +650 فرصة وظيفية في +80 جهة من مختلف القطاعات ..
نود تذكيرك بحضور (برنامج طويق للتوظيف) المقام خلال:

الأحد والإثنين 2-3 يونيو
من 4:00م إلى 8:00م
تسجيل الحضور: 3:00م

*الدعوة خاصة: يلزم إبراز الهوية للموظف المختص وإبراز باركود القبول من ملفك الشخصي عبر موقع أكاديمية طويق.

نتمنى لك التوفيق والنجاح.</p>
        </div>

<div className='flex mt-7 gap-4   '>
  <button>
  <FaEdit   style={{ color: 'black', fontSize: '28px' }}/>                                   
  </button>
  <button onClick={() => { document.getElementById('my_modal_4').showModal()}}>
  <RiDeleteBin6Line  style={{ color: 'red', fontSize: '28px' }}/>                                   
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
        <div className='flex justify-center bg-[#F3F6FF] w-[93%] mr-10'>
  <div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white">
    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white " aria-label="الشركات" defaultChecked/>
    <div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6">
      <p className='text-lg font-bold mb-5' > قائمة الشركات</p>
    <table className="w-full whitespace-nowrap max-sm:table-xs">
                        <tbody>
                        <tr className="focus:outline-none h-16 border border-base-100 rounded">
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
                                      <button onClick={() => { document.getElementById('my_modal_4').showModal()}}>
                                      <RiDeleteBin6Line  style={{ color: 'red', fontSize: '20px' }}/>
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
                            
                      
                              
                                <td>
                               
                                </td>
                            </tr>
                        </tbody>
                    </table>  
            </div>

    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white" aria-label="الطلاب"  />
    <div role="tabpanel" className="tab-content  bg-white border-base-100 rounded-box p-6">
    <p className='text-lg font-bold mb-5' > قائمة الطلاب</p>

    <table className="w-full whitespace-nowrap">
                        <tbody>
                        <tr className="focus:outline-none h-16 border border-base-100 rounded">
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
                                      <button onClick={() => { document.getElementById('my_modal_4').showModal()}}>
                                      <RiDeleteBin6Line  style={{ color: 'red', fontSize: '20px' }}/>  
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