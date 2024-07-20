import React from 'react'
import Nav from '../components/Nav'
import HeroStudent from '../components/HeroStudent'

import Elm from '../assets/elm.png'
import { Link } from 'react-router-dom'

const Companies = () => {
  return (
    <>
    <Nav />
    <HeroStudent />
    <div className='bg-[#ffffff] h-full w-full flex justify-center '>
    <div className='flex flex-col justify-center items-start  mr-8 mb-8 ml-8 w-full h-full'>


<div className='bg-white w-full h-full rounded-lg'>
<div className='flex flex-wrap justify-start items-end w-full h-auto p-4'>
<div className='flex w-full justify-between items-center'>
    <p className='font-semibold text-[1.5rem] mt-12 mr-4 pt-1 pr-1 text-[#5C59C2] mb-7 max-sm:text-[1.3rem] max-sm:text-center max-sm:mb-0 max-sm:mr-0'>
        قائمة الشركات ذات الاهتمام بمجال تخصصك
    </p>
    {/* search start here */}

    <div className='ml-5 mt-8'>
        <div className="pt-2 relative mx-auto text-gray-600">
            <input className="border-2 border-[#919191] bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="البحث" />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg className="text-[#c0c0c0] h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" xml:space="preserve"
                width="512px" height="512px">
                <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
            </button>
        </div>
        {/* filter icon */}
        {/* <div className='flex flex-col justify-center mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#5C59C2]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
        </div> */}
    </div>
</div>
    {/* search end here */}


    <div className='flex gap-2 w-full sm:w-[10vw] h-auto mt-6 mr-6'>
        <div className="pt-2 relative mx-auto text-gray-600">
            {/* <input
                className="border-2 border-[#99D2CB] bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                type="search" name="search" placeholder="البحث" 
            /> */}
            {/* <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                <svg className="text-[#99D2CB] h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" xml:space="preserve"
                    width="512px" height="512px">
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
            </button> */}
        </div>
    </div>
</div>

    <div className="w-fit mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-32 mb-16 mt-10 max-sm:grid-cols-1 max-sm:gap-y-6 ">
        {/* card here */}
        {/* <div className='flex flex-col items-center mt-6  bg-white w-full h-full rounded-lg shadow max-sm:h-[35vh]'>
            <img className='mr-4 rounded-lg h-[20vh] w-[8vw] max-sm:w-[20vw] max-sm:h-[10vh] max-sm:mt-2' src={Elm} />
            <div className='mr-4 flex flex-col gap-2'>
                <div className='flex justify-center gap-2 mt-2'>
                    <p className='font-bold text-[1.3rem] pt-2 max-sm:pt-6 '>  شركة علم </p>
                </div>
                <div className='flex flex-wrap gap-1 mt-2'>
                        <p className='text-[gray] text-[0.9rem]'> المجالات المطلوبة :</p>
                        <div className='flex flex-wrap gap-1'>
                            <p className='px-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5] '>مطور برامج</p>
                            <p className='px-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5]'>محلل برامج</p>
                            <p className='px-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5]'> مهندس برمجيات</p>
                        </div>
                </div>
                <div className='flex pb-4 justify-center items-center h-full '>
                    <div className="flex justify-end items-center mt-4 ml-2">
                        <p className="w-[6vw] h-[3vw] text-[#ffffff] font-bold text-[0.9rem] bg-[#99D2CB] hover:bg-[#a5ddd7] py-2 px-4 rounded-lg cursor-pointer text-center">تقديم</p>
                    </div>
                    <div className="flex justify-end items-center mt-4 ml-2">
                    <Link to="/DetailsCompanies">
                        <p className="w-[6vw] h-[3vw] text-[#ffffff] font-bold text-[0.9rem] bg-[#5C59C2] hover:bg-[#7b78d8] py-2 px-4 rounded-lg cursor-pointer text-center">المزيد</p>

                        </Link></div>
                </div>
            </div>
        </div> */}
        {/* card end here */}

       {/* card start here */} 
    <div className='w-80 overflow-hidden rounded-md bg-[#fafafa] shadow-[0_0_1rem_rgb(0,0,0,0.1)]'>
        <div className='card_cover'></div>

        <div className='flex flex-col items-center justify-center gap-2'>
            <div className='mt[3.5rem] flex flex-col items-center justify-center px-8 py-4 pt-0 '>
                <div className='absolute mb-12 h-[6rem] w-[6rem] overflow-hidden rounded-full border-4 border-[3px_soild_#fafafa] shadow-[0_0_1rem_rgba(0,0,0,0.2)]'>
                    <img className='h-full w-full object-cover' src={Elm} />
                </div>
            </div>
            <h1 className='mt-[1.5rem] text-center '>
                <div className='text-[1.6rem] font-bold'>شركة علم</div>
                <div className='text-[1rem] font-medium text-[#8a8a8a]'>المجالات المطلوبة</div>
                <div className='flex justify-center flex-wrap gap-1 mt-2 '>
                    <p className='px-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5] '>مطور برامج</p>
                    <p className='px-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5]'>محلل برامج</p>
                    <p className='px-2 py-1 rounded-full w-fit text-[0.8rem] bg-[#eee6f5]'> مهندس برمجيات</p>
                    
                </div>    
            </h1>
            <div className='flex gap-4 mb-8 mt-6 pb-4'>
                {/* <button className='border font-bold bg-[#99D2CB] hover:bg-[#a5ddd7] text-white rounded-md p-[4px] w-[100px] grid place-items-center'> المزيد</button> */}
                <Link to="/DetailsCompanies"><button className='border font-bold border-[#5C59C2] text-[#5C59C2] hover:bg-[#5C59C2] hover:text-white rounded-md p-[4px] w-[100px] flex justify-center items-end gap-1'>
                    المزيد<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg></button></Link>
            </div>
        </div>
    </div>
    {/* card end here */} 


    



    </div>               
</div>
    
</div>
</div>

    
    </>
  )
}

export default Companies