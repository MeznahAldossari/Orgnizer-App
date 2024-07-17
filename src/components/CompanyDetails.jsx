import React, {useState} from 'react'
import Nav from './Nav'
import '../App.css'
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

function CompanyDetails() {
    const [activeTab, setActiveTab] = useState('tab1'); // State to keep track of active tab

    // Function to handle tab click
    const handleTabClick = (tabId) => {
      setActiveTab(tabId); // Update active tab state
    };

  return (
    <div>
        <div>
            <Nav/>
        </div>

        <div className='bg-[#f3f3f3] mt-[-1.3%] h-full w-full'>
        <div className='flex justify-start items-end w-full h-[10vh]'>
            <p className='font-semibold text-[1.5rem] mr-14'> مرحباً <span className='text-[#6e68c4] font-bold'>بكم</span> في معرض التوظيف  </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center mt-6 bg-white w-[91%] h-[20vh] rounded-lg'>
                <img className='mr-4 rounded-full border-[1.5px] h-[15vh] object-cover w-[7vw]' src='https://cdn.wamda.com/feature-images/6dee4eb29803976.png' />
                <div className='mr-4'>
                    <p className='font-bold text-[1.3rem]'> شركة علم</p>
                    <p className='text-[gray] text-[0.9rem]'>معسكر تطوير واجهات المستخدم باسخدام جافاسكربت</p>
                </div>
            </div>
            <div className='grid  w-[91%]  grid-cols-3 gap-6'>
                <div className='mt-6 col-span-2 bg-white  h-[100vh] rounded-lg'>
                    <h1 className='pt-6 pr-6 font-extrabold text-[#6e68c4] text-[1.1rem]'>قائمة المتقدمين</h1>
                    <br />
                    <hr className='flex justify-center w-full' />
                    <div className='flex justify-center bg-[#F3F6FF] w-[93%] mt-4 mr-10'>
  <div role="tablist" className="tabs w-[90vw] tabs-lifted bg-white">
    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white " aria-label="المتقدمون"  defaultChecked/>
    <div role="tabpanel" className="tab-content bg-white border-base-100 rounded-box p-6">
      {/* <p className='text-lg font-bold mb-5' > قائمة الشركات</p> */}
    <table className="w-full whitespace-nowrap max-sm:table-xs">
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
                                       <p className="text-base font-medium leading-none text-gray-700 mr-2"> نوره محمد </p>
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
                           
                     
                             
                               <td>
                              
                               </td>
                           </tr>
                        </tbody>
                    </table>  
            </div>

    <input type="radio" name="my_tabs_2" role="tab" className="tab bg-white" aria-label="مكتمل" />
    <div role="tabpanel" className="tab-content  bg-white border-base-100 rounded-box p-6">
    {/* <p className='text-lg font-bold mb-5' > قائمة الطلاب</p> */}

    <table className="w-full whitespace-nowrap border border-base-100">
    <tbody>
        <tr className="focus:outline-none h-16 border border-base-100 rounded">
            <th className="text-right p-3 px-5">الأسم</th>
            <th className="text-right p-3 px-5">المعسكر</th>
            <th className="text-right p-3 px-5">الإيميل</th>
            <th className="text-right p-3 px-5">الحالة</th>
            <th></th>
        </tr>
        <tr tabIndex="0" className="focus:outline-none h-16 border border-base-100 rounded">
            <td className="">
                <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">ساره احمد</p>
                </div>
            </td>
            <td className="">
                <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">معسكر تصميم واجهات</p>
                </div>
            </td>
            <td className="">
                <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">ziad@gmail.com</p>
                </div>
            </td>
            <td className="">
                <div className="flex items-center pl-5">
                    <p className="text-base font-medium leading-none text-gray-700 mr-2">مقبول</p>
                </div>
            </td>
            <td></td>
        </tr>
    </tbody>
</table>
  
                      </div>
  </div>
  </div>
                    
             
          
                    
                </div>
                <div className='mt-6 bg-white  h-full rounded-lg'>
                    <h1 className='pt-6 pr-6 font-bold text-[1.1rem] text-[#6e68c4]'> تحميل الملفات </h1>
                    <br />
                    <hr className='flex justify-center w-full' />
                    <div className="flex flex-col items-center justify-center w-full">
                       
                       
                    </div>
                </div>
                
            </div>
            <div className='mt-12 bg-white w-[91%] h-[25vh] rounded-lg'>
                <h1 className='pt-6 pr-6 font-bold text-[1.1rem] text-[#5C59C2]'> حسابات التواصل الاجتماعي </h1>
                <br />
                <hr className='flex justify-center w-full' />
                <div className="bg-white w-full h-[5vh] py-8 flex items-center justify-center gap-40 flex-wrap">
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                        <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#337FFF"/>
                        <path d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 92" fill="none">
                        <rect x="0.138672" width="91.5618" height="91.5618" rx="15" fill="black"/>
                        <path d="M50.7568 42.1716L69.3704 21H64.9596L48.7974 39.383L35.8887 21H21L40.5205 48.7983L21 71H25.4111L42.4788 51.5869L56.1113 71H71L50.7557 42.1716H50.7568ZM44.7152 49.0433L42.7374 46.2752L27.0005 24.2492H33.7756L46.4755 42.0249L48.4533 44.7929L64.9617 67.8986H58.1865L44.7152 49.0443V49.0433Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 93 93" fill="none">
                        <rect x="1.13867" y="1" width="91.5618" height="91.5618" rx="15" fill="#006699"/>
                        <path d="M37.1339 63.4304V40.9068H29.6473V63.4304H37.1346H37.1339ZM33.3922 37.8321C36.0023 37.8321 37.6273 36.1025 37.6273 33.9411C37.5785 31.7304 36.0023 30.0491 33.4418 30.0491C30.8795 30.0491 29.2061 31.7304 29.2061 33.9409C29.2061 36.1023 30.8305 37.8319 33.3431 37.8319H33.3916L33.3922 37.8321ZM41.2777 63.4304H48.7637V50.8535C48.7637 50.1813 48.8125 49.5072 49.0103 49.0271C49.5513 47.6815 50.7831 46.2887 52.8517 46.2887C55.5599 46.2887 56.644 48.354 56.644 51.3822V63.4304H64.1297V50.516C64.1297 43.598 60.4369 40.3787 55.5115 40.3787C51.4733 40.3787 49.6998 42.6357 48.7144 44.173H48.7643V40.9075H41.2781C41.3759 43.0205 41.2775 63.4312 41.2775 63.4312L41.2777 63.4304Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </div>

























        {/* <div className='flex mt-[-1.5%] justify-center'>
        <div className='w-full flex justify-between items-center h-[40vh] '>
         <div className=' flex flex-col'>
         <p className='text-[1.3rem] mr-12 font-medium text-[#6861a4]'>مرحبا <span className='text-[1.8rem] font-bold'>علم</span> في معرض التوظيف</p>
        <button className='px-2 w-[10vw] mr-12 mt-10 py-2 bg-[#f39e4e] rounded-lg text-white'>تعديل بياناتك</button>

         </div>
  <div  className=" h-[36vh] ml-12 flex  justify-center items-center  w-[20vw] overflow-hidden  rounded-[40%_60%_60%_40%/55%_73%_27%_45%] transition-all duration-500  drop-shadow-[0px_25px_6px_rgba(0000.20)]">
  <img src='https://autoware.org/wp-content/uploads/2023/10/LOGO.png' className='w-[25vw] rounded-full h-[25vh]'></img>

</div>
        </div>

        </div>
        <div className='flex justify-center mt-24 w-full bg-gray-200 backdrop-filter backdrop-blur-lg bg-opacity-30'>
      <div className='tab-section w-[95%] flex flex-col items-center  rounded-lg p-5 min-h-[400px] '>
        <div className='flex gap-1 bg-[#ededed] w-[40vw]'>
          <button
            className={`p-4 rounded-lg text-gray-700 font-bold flex-grow w-80 hover:bg-gray-300 hover:bg-opacity-40 ${activeTab === 'tab1' ? 'active-tab' : ''}`}
            onClick={() => handleTabClick('tab1')}
          >
            المتقدمون
          </button>
          <button
            className={`p-4 rounded-lg text-gray-700 font-bold flex-grow w-80 hover:bg-gray-300 hover:bg-opacity-40 ${activeTab === 'tab2' ? 'active-tab' : ''}`}
            onClick={() => handleTabClick('tab2')}
          >
            اكتمال
          </button>
         
        </div>

        <div className='mt-4  w-full'>
          <div id='tab1' className={`${activeTab === 'tab1' ? 'active-tab-content' : 'hidden-tab-content'}`}>
          <div className='flex justify-center w-full mt-12'>
  <div className='grid gap-y-0 w-[90%] grid-cols-4 '>

    <div class="text-gray-900">
      <div class=" flex items-center justify-center">
        <div class="bg-white h-[54vh] w-[19vw] rounded-lg overflow-hidden shadow-2xl">
          <div className="h-[0vh]"></div>
          <img class="h-[27vh] w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
          <div class="p-6">
            <div class="flex items-baseline">
             
            </div>
            <h4 class="mt-2 font-semibold text-lg leading-tight truncate">نوره الحربي</h4>

            <div class="mt-4">
              <span className='ml-2'>سنوات الخبرة:</span>
              <span class="text-gray-600 text-sm">2</span>
            </div>
            <div class="mt-2 flex items-center">
              <span class="text-teal-600 font-semibold">
                <span>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </span>
              </span>
              <span class="ml-2 text-gray-600 text-sm">انتظار</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-gray-900">
      <div class=" flex items-center justify-center">
        <div class="bg-white h-[54vh] w-[19vw] rounded-lg overflow-hidden shadow-2xl">
          <div className="h-[0vh]"></div>
          <img class="h-[27vh] w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
          <div class="p-6">
            <div class="flex items-baseline">
             
            </div>
            <h4 class="mt-2 font-semibold text-lg leading-tight truncate">نوره الحربي</h4>

            <div class="mt-4">
              <span className='ml-2'>سنوات الخبرة:</span>
              <span class="text-gray-600 text-sm">2</span>
            </div>
            <div class="mt-2 flex items-center">
              <span class="text-teal-600 font-semibold">
                <span>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </span>
              </span>
              <span class="ml-2 text-gray-600 text-sm">انتظار</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-gray-900">
      <div class=" flex items-center justify-center">
        <div class="bg-white h-[54vh] w-[19vw] rounded-lg overflow-hidden shadow-2xl">
          <div className="h-[0vh]"></div>
          <img class="h-[27vh] w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
          <div class="p-6">
            <div class="flex items-baseline">
             
            </div>
            <h4 class="mt-2 font-semibold text-lg leading-tight truncate">نوره الحربي</h4>

            <div class="mt-4">
              <span className='ml-2'>سنوات الخبرة:</span>
              <span class="text-gray-600 text-sm">2</span>
            </div>
            <div class="mt-2 flex items-center">
              <span class="text-teal-600 font-semibold">
                <span>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </span>
              </span>
              <span class="ml-2 text-gray-600 text-sm">انتظار</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-gray-900">
      <div class=" flex items-center justify-center">
        <div class="bg-white h-[54vh] w-[19vw] rounded-lg overflow-hidden shadow-2xl">
          <div className="h-[0vh]"></div>
          <img class="h-[27vh] w-full object-cover object-end" src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="Home in Countryside" />
          <div class="p-6">
            <div class="flex items-baseline">
           
            </div>
            <h4 class="mt-2 font-semibold text-lg leading-tight truncate">نوره الحربي</h4>

            <div class="mt-4">
              <span className='ml-2'>سنوات الخبرة:</span>
              <span class="text-gray-600 text-sm">2</span>
            </div>
            <div class="mt-2 flex items-center">
              <span class="text-teal-600 font-semibold">
                <span>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </span>
              </span>
              <span class="ml-2 text-gray-600 text-sm">انتظار</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

          </div>
          <div id='tab2' className={`${activeTab === 'tab2' ? 'active-tab-content' : 'hidden-tab-content'}`}>
            <p>hello 1</p>
          </div>
          <div id='tab3' className={` ${activeTab === 'tab3' ? 'active-tab-content' : 'hidden-tab-content'}`}>
            <p>hello 2</p>
          </div>
        </div>
      </div>
    </div>

    
       */}
       <style jsx>{`
  input[type="radio"][role="tab"]:checked {
    background-color: white;
    color: black;
    border-color: #E5E7EB;
  }
`}</style>
    </div>
  )
}

export default CompanyDetails
