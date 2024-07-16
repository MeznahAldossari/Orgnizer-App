import React, {useState} from 'react'
import Nav from './Nav'
import '../App.css'

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
        <div className='flex mt-[-1.5%] justify-center'>
        <div className='w-full flex justify-between items-center h-[40vh] '>
         <div className=' flex flex-col'>
         <p className='text-[1.3rem] mr-12 font-medium text-[#6861a4]'>مرحبا <span className='text-[1.8rem] font-bold'>علم</span> في معرض التوظيف</p>
        <button className='px-2 w-[10vw] mr-12 mt-10 py-2 bg-[#f39e4e] rounded-lg text-white'>تعديل بياناتك</button>

         </div>
         {/* <div className=' bg-[#6e68c4] ml-12 w-[15vw] rounded-full h-[35vh]'> */}
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
          {/* <button
            className={`p-4 rounded-lg text-gray-700 font-bold flex-grow w-80 hover:bg-gray-300 hover:bg-opacity-40 ${activeTab === 'tab3' ? 'active-tab' : ''}`}
            onClick={() => handleTabClick('tab3')}
          >
            انتظار
          </button> */}
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
              {/* <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span> */}
              {/* <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                3 beds &bull; 2 baths
              </div> */}
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
              {/* <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span> */}
              {/* <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                3 beds &bull; 2 baths
              </div> */}
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
              {/* <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span> */}
              {/* <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                3 beds &bull; 2 baths
              </div> */}
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
              {/* <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span> */}
              {/* <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                3 beds &bull; 2 baths
              </div> */}
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

    
      
    </div>
  )
}

export default CompanyDetails
