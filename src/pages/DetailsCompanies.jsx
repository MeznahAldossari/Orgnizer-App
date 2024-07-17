import React from 'react'
import Nav from '../components/Nav'
import Elm from '../assets/elm.png'


const DetailsCompanies = () => {
  return (
    <>
    <Nav />
<div className='bg-[#f3f3f3] h-screen w-full flex justify-center '>
   <div className='flex mt-10 flex-col'>
    <div className='flex gap-6 max-sm:flex-col max-sm:items-center'>
        <div className=''>
            <img className='h-[40vh] w-[25vw] rounded-lg max-sm:w-[88vw]' src={Elm} />
        </div>
        <div className=' bg-white w-[66vw] h-[40vh] rounded-lg max-sm:w-[88vw] '>
            <h1 className='pt-6 pr-6 font-extrabold text-[#5C59C2] text-[1.5rem]'>شركة علم</h1>
            <h1 className='pr-6 pt-2 text-[#4b4b4b] text-[1rem]'>تقنية المعلومات</h1>
            <div className='pt-2 pr-5 flex gap-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[#99D2CB]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='text-[gray] text-[0.8rem] '>الرياض - السعودية</p>
            </div>
            <p className='pr-6 pt-2 text-[#202020] text-[0.9rem]'><span className='font-bold '>التفاصيل:</span> هي شركة مساهمة سعودية مدرجة في السوق المالية السعودية «تداول» ومركزها الرئيسي في العاصمة السعودية الرياض وتتنوع نشاطاتها في تقديم الحلول الرقمية كالمنصات والمنتجات، وتنفيذ المشاريع الرقمية، وحلول إسناد الأعمال المرتبطة بأعمال الشركة، مع تقديم الخدمات الاستشارية الداعمة في المجالات الرقمية ومجالات الأعمال المحيطة بها. </p>
            <div className='flex justify-end items-center'>
                <div className="flex justify-end items-center mt-4 ml-2">
                    <p className="w-[8vw] text-[#ffffff] font-bold text-[0.9rem] bg-[#99D2CB] hover:bg-[#a5ddd7] py-2 px-4 rounded-lg cursor-pointer text-center max-sm:text-[0.8rem] max-sm:w-[20vw] ">تقديم</p>
                </div>
                <div className="flex justify-end items-center mt-4 ml-6">
                    <p className="w-[8vw] text-[#ffffff] font-bold text-[0.9rem] bg-[#7c7c7c] hover:bg-[#919191] py-2 px-4 rounded-lg cursor-pointer text-center max-sm:text-[0.8rem] max-sm:w-[20vw]">العودة</p>
                </div>
            </div>
        </div>      
    </div>

<div className='mt-8 bg-white rounded-md '>
<div className='flex justify-center bg-[#5d6fa3] w-[93%] mr-10'>
  <div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white">
    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2] " aria-label="الشواغر" />
    <div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6">
      <p className='text-lg mb-5 font-extrabold text-[#5C59C2] text-[1.1rem]' > قائمة الشواغر</p>
    <table className="w-full whitespace-nowrap max-sm:table-xs">
            <tbody>
              <tr className="focus:outline-none h-16 border border-[#99D2CB] bg-[#fafafa] rounded">
              <th className="text-right p-3 px-5">المسمى الوظيفي</th>
              <th className="text-right p-3 px-5">المسؤوليات </th>
              <th className="text-right p-3 px-5">المهارات المطلوبة</th>
            </tr>
                 <tr tabindex="0" className="focus:outline-none h-16 border border-[#99D2CB] rounded">
                    {/* <td className="">
                        <div className="flex items-center pl-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk0IrfQt8yu8km4DYRG69OOhe2GQlK5NLvzIk23B3u77AjSRLJ3NLOqK9_W53M8jHV6Y&usqp=CAU" alt="" srcset="" className='w-[7vw] h-[7vh] mr-2' />
                        </div>
                    </td> */}
                    <td className="">
                        <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-5">   مطور ويب  </p>
                        </div>
                    </td>
                    <td className="">
                        <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2">  تطوير مواقع الويب وتطبيقات الويب باستخدام جافاسكربت </p>
                        </div>
                    </td>
                    <td className="">
                        <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2"> CSS - HTML - JavaSrcipt -React </p>
                        </div>
                    </td> 
                </tr>
            </tbody>
        </table>  
</div>
{/* تقديماتي */}
    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white hover:text-[#5C59C2]" aria-label="تقديماتي" defaultChecked />
    <div role="tabpanel" className="tab-content  bg-white border-base-100 rounded-box p-6">
    <p className='text-lg mb-5 font-extrabold text-[#5C59C2] text-[1.1rem]' > قائمة تقديماتي</p>
    <table className="w-full whitespace-nowrap max-sm:table-xs">
            <tbody>
            <tr className="focus:outline-none h-16 border border-[#99D2CB] bg-[#99d2cb38] rounded">
              <th className="text-right p-3 px-5">المسمى الوظيفي</th>
              <th className="text-right p-3 px-5">الحالة </th>
              <th className="text-right p-3 px-5"> الترتيب </th>
              <th className="text-right p-3 px-5"> انسحاب </th>
            </tr>
            <tr tabindex="0" className="focus:outline-none h-16 border border-[#99D2CB] rounded">
                    {/* <td className="">
                        <div className="flex items-center pl-5">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk0IrfQt8yu8km4DYRG69OOhe2GQlK5NLvzIk23B3u77AjSRLJ3NLOqK9_W53M8jHV6Y&usqp=CAU" alt="" srcset="" className='w-[7vw] h-[7vh] mr-2' />
                        </div>
                    </td> */}
                    <td className="">
                        <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-5">   مطور ويب  </p>
                        </div>
                    </td>
                    <td className="">
                        <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2">  <div className='flex gap-2'>
                        <span className="bg-yellow-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-700 dark:text-yellow-400 border border-yellow-400">انتظار</span>
                        </div> </p>
                        </div>
                    </td>
                    <td className="">
                        <div className="flex items-center pr-2">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2"> <div className='flex gap-2'>
                        <p className='text-[#5C59C2] text-[0.9rem]  border border-[#5C59C2] bg-[#5d59c24b] rounded text-center w-7'> 10 </p>
                        </div> </p>
                        </div>
                    </td>
                    <td className="">
                        <div className="flex items-center pr-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#c71919]">
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