import React from 'react'
import Nav from '../components/Nav'
import Tamkeen from '../assets/tamkeen tech.png'
import Elm from '../assets/elm.png'
import Wadaie from '../assets/wadaie.png'
import { Link } from 'react-router-dom';



const Submissions = () => {
  return (
    <>
    <Nav />
    {/* search here */}
    {/* <div className='flex gap-2 w-[10vw] h-[10vh] mt-6 mr-6'>
        <div className="pt-2 relative mx-auto text-gray-600">
            <input className="border-2 border-[#99D2CB] bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="البحث" />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <svg className="text-[#99D2CB] h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" xml:space="preserve"
                width="512px" height="512px">
                <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
            </button>
        </div> */}
        {/* filter icon */}
        {/* <div className='flex flex-col justify-center mb-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#5C59C2]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
        </div>
    </div> */}
    {/* search end here */}

<div className='bg-[#f7f7f7] h-full w-full flex justify-center items-center '>
    
    <div className='flex flex-col justify-center items-start mt-8 mr-8 mb-8 ml-8 w-full h-full '>
    <div className='bg-white w-full h-full rounded-lg'>
        <div className='flex justify-between items-end w-full h-[10vh]'>
            <p className='font-semibold text-[1.5rem] mr-16 pt-6 pr-1 text-[#5C59C2]'> تقديماتي </p> 
            {/* <div className='relative mr-16 pt-6 pr-1'>
                <p className='font-semibold text-[1.5rem] text-[#5C59C2]'> تقديماتي </p>
                <span className='absolute left-0 right-0 bottom-0 h-[2px] bg-[#5C59C2]'></span>
            </div> */}
            <div className='flex gap-2'>
                <Link to='/'><button className="rounded-lg text-white bg-[#999999] hover:bg-[#b1b1b1]  py-1 px-3 ml-16"> عودة</button></Link>
            </div>
        </div>

<div className="w-[90%] mx-auto grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-28 mt-1 mb-16 max-sm:grid-cols-1 max-sm:gap-y-10">
  {/* card one */}
  <div className='flex items-center mt-6 bg-white w-[30vw] h-full rounded-lg shadow-lg'>
    <img className='mr-4 rounded-full h-full w-[10vw] object-cover max-sm:w-[20vw] max-sm:h-[15vh]' src={Tamkeen} />
    <div className='mr-4 flex flex-col justify-center items-center gap-4 w-full '>
      <div className='w-full'>
        <div className='flex gap-2'>
            <span className="mt-3 relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5fd47c]"></span>
            </span>
          <p className='font-bold text-[1.2rem]'>شركة تمكين للتقنيات تقنيات </p>
        </div>
      </div>
      <div className='bg-white w-full flex flex-col gap-1'>
        <div className='flex gap-1'>
          <p className='text-gray-500 text-[0.9rem]'>حالة التقديم:</p>
          <span className="text-green-500 text-[0.9rem] font-medium">مقبول</span>
        </div>
        <div className='flex gap-1 '>
          <p className='text-gray-500 text-[0.9rem]'>الشواغر:</p>
          <div className='flex gap-2 flex-wrap '>
                <p className=' text-[#686868] text-[0.8rem] border bg-[#eee6f5] rounded-full text-center px-1 py-0.5'>مطور برامج</p>
                <p>,</p>
                <p className=' text-[#686868] text-[0.8rem] border bg-[#eee6f5] rounded-full text-center px-1 py-0.5'>مصمم واجهات</p>
          </div>
        </div>
        <div className='flex'>
          <p className='text-gray-500 text-[0.9rem]'>ترتيبك:</p>
          <p className='text-[#cc4d36] text-[0.9rem]  text-center w-6 h-6'>10</p>
        </div>
      </div>
    </div>
  </div>

  



            {/* card two */}
            {/* <div className='flex items-center mt-6 bg-white w-full h-full rounded-lg shadow'>
                <img className='mr-4 rounded-full h-[20vh] w-[8vw] max-sm:w-[20vw] max-sm:h-[15vh]' src={Elm} />
                <div className='mr-4 flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className="mt-3 relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f7e974]"></span>
                        </span>
                        <p className='font-bold text-[1.3rem] '>شركة علم </p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>حالة التقديم</p>
                        <span className="bg-yellow-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-700 dark:text-yellow-400 border border-yellow-400 mr-1">انتظار</span>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>دورك في الطابور</p>
                        <p className='text-[#5C59C2] text-[0.9rem]  border border-[#5C59C2] bg-[#5d59c24b] rounded text-center w-7'> 10 </p>
                    </div>
                </div>
            </div>

            <div className='flex items-center mt-6 bg-white w-full h-full rounded-lg shadow'>
                <img className='mr-4 rounded-full h-[20vh] w-[8vw] max-sm:w-[20vw] max-sm:h-[15vh]' src={Wadaie} />
                <div className='mr-4 flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className="mt-3 relative flex h-3 w-3">
                                <span className=" absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#aaaaaa]"></span>
                        </span>
                        <p className='font-bold text-[1.3rem] '>شركة ودائع </p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>حالة التقديم</p>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400 ">منتهيه</span>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>دورك في الطابور</p>
                        <p className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400'> 0 </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-6 bg-white w-full h-full rounded-lg shadow'>
                <img className='mr-4 rounded-full h-[20vh] w-[8vw] max-sm:w-[20vw] max-sm:h-[15vh]' src={Wadaie} />
                <div className='mr-4 flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className="mt-3 relative flex h-3 w-3">
                                <span className=" absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#aaaaaa]"></span>
                        </span>
                        <p className='font-bold text-[1.3rem] '>شركة ودائع </p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>حالة التقديم</p>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400 ">منتهيه</span>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>دورك في الطابور</p>
                        <p className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400'> 0 </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-6 bg-white w-full h-full rounded-lg shadow'>
                <img className='mr-4 rounded-full h-[20vh] w-[8vw] max-sm:w-[20vw] max-sm:h-[15vh]' src={Wadaie} />
                <div className='mr-4 flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className="mt-3 relative flex h-3 w-3">
                                <span className=" absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#aaaaaa]"></span>
                        </span>
                        <p className='font-bold text-[1.3rem] '>شركة ودائع </p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>حالة التقديم</p>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400 ">منتهيه</span>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>دورك في الطابور</p>
                        <p className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400'> 0 </p>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-6 bg-white w-full h-full rounded-lg shadow'>
                <img className='mr-4 rounded-full h-[20vh] w-[8vw] max-sm:w-[20vw] max-sm:h-[15vh]' src={Wadaie} />
                <div className='mr-4 flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <span className="mt-3 relative flex h-3 w-3">
                                <span className=" absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#aaaaaa]"></span>
                        </span>
                        <p className='font-bold text-[1.3rem] '>شركة ودائع </p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>حالة التقديم</p>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400 ">منتهيه</span>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-[gray] text-[0.9rem]'>دورك في الطابور</p>
                        <p className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-400'> 0 </p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Submissions