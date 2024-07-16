import React from 'react'
import Nav from '../components/Nav'
import Elm from '../assets/elm.png'


const DetailsCompanies = () => {
  return (
    <>
    <Nav />
<div className='bg-[#f3f3f3] h-screen w-full flex justify-center '>
   <div className='flex  mt-10 flex-col'>
    <div className='flex gap-6'>
        <div className=''>
            <img className='h-[40vh] w-[25vw] rounded-lg' src={Elm} />
        </div>
        <div className=' bg-white w-[60vw] h-[40vh] rounded-lg'>
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
            <div className="flex justify-end items-center mt-4 ml-4">
                <p className="text-[#ffffff] font-bold text-[0.9rem] bg-[#99D2CB] hover:bg-[#a5ddd7] py-2 px-4 rounded-lg cursor-pointer">تقدم</p>
            </div>
        </div>      
    </div>

<div className='mt-16 bg-white rounded-md '>
    <div role="tablist" className="tabs tabs-lifted">
    <input type="radio" name="my_tabs_2" role="tab" className="tab text-[#5C59C2] hover:text-[#817ee4]" aria-label="الشواغر" />
    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        
    </div>

    <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-[#5C59C2] hover:text-[#817ee4] "
        aria-label="تقديمي"
        defaultChecked />
    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    
        </div>
        </div> 
    </div> 
    </div> 
                        
</div>
 
    </>
  )
}

export default DetailsCompanies