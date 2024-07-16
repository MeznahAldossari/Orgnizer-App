import React, {useState} from 'react'
import Nav from './Nav'
import calender from '../assets/calendar.png'
import clock from '../assets/clock.png'

import bgCompany from '../assets/comanyBg.jpg'
import people from '../assets/team.png'
import poistionBg from '../assets/position.png'
import leftArrow from '../assets/left-arrow.png'



function EventDetails() {
  const [activeTab, setActiveTab] = useState('panel-1');

 
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div>
         <div>
        <Nav/>
        </div>
<div className='flex justify-center mt-2'>
<div className='w-[95%] rounded-lg pr-10 bg-[#F3F6FF] h-[42vh]'>
            <h1 className='text-[#5c59c2] font-bold text-[1.5rem] mt-10'>معرض طويق لتوظيف</h1>
            <p className='flex mt-5 items-center'>
  <img src={calender} className='w-6 mt-4 ml-2' />
  <span className='text-center text-[0.9rem] mt-4'>13-4-1445</span>
</p>

<p className='flex items-center'>
  <img src={clock} className='w-6 mt-2 ml-2' />
  <span className='text-center mt-2 text-[0.9rem]'>9ص الى 11م </span>
</p>


        </div>



</div>
<div className='flex justify-center w-full '>

<div className='flex  gap-2   w-[95%] mt-4'>
      <div className='max-sm:w-7/12 max-sm:mx-auto w-full   float-right'>
        <div
          role='tablist'
          aria-label='tabs'
          className='relative float-right items-center bg-slate-200 rounded-full grid grid-cols-3 px-[3xl] w-max mx-auto overflow-hidden shadow-900/20 shadow-2xl'
        >
          {/* Tabs */}
          <button
            role='tab'
            aria-selected={activeTab === 'panel-1'}
            aria-controls='panel-1'
            id='tab-1'
            tabIndex='0'
            className={`relative block h-10 px-6 tab rounded-full ${activeTab === 'panel-1' ? 'bg-[#99D2CB] text-white' : ''}`}
            onClick={() => handleTabClick('panel-1')}
          >
            <span className=''>الشركات</span>
          </button>

          <button
            role='tab'
            aria-selected={activeTab === 'panel-2'}
            aria-controls='panel-2'
            id='tab-2'
            tabIndex='-1'
            className={`relative block h-10 px-6 tab rounded-full ${activeTab === 'panel-2' ? 'bg-[#99D2CB] text-white' : ''}`}
            onClick={() => handleTabClick('panel-2')}
          >
            <span className=''>الطلاب</span>
          </button>

          <button
            role='tab'
            aria-selected={activeTab === 'panel-3'}
            aria-controls='panel-3'
            id='tab-3'
            tabIndex='-1'
            className={`relative block h-10 px-6 tab rounded-full ${activeTab === 'panel-3' ? 'bg-yellow-500 text-white' : ''}`}
            onClick={() => handleTabClick('panel-3')}
          >
            <span className='text-gray-400'>Third Tab</span>
          </button>

          {/* Indicator */}
          <div
            className='absolute tap-0 left-0 bg-white shadow-md'
            style={{
              width: 'calc(100% / 3)',
              transform: `translateX(calc(${activeTab.split('-')[1] - 1} * 100% / 3))`,
            }}
          />

        </div>

        {/* Panels for each tab */}
        <div className='mt-14  w-full  '>
          <div id='panel-1' role='tabpanel' aria-labelledby='tab-1' hidden={activeTab !== 'panel-1'} className='w-full'>
            {/* Content of the first tab */}
            <div className='h-auto  flex flex-col items-center py-2 mt-20   w-full'>
              <div className='w-[85%] mt-2 border-2 rounded-md items-center h-[28vh] flex border-1 shadow-md '>
                <img src={bgCompany} className='w-[16%] rounded-md h-[90%] mr-1'></img>
                <div className=' justify-between h-full pr-4 flex flex-col'>
                <h2 className='text-[1.6rem] mt-4 font-medium'>اسم الشركة</h2>
                <div className='flex gap-6 pb-4'>
                <p className='mt-6 rounded-full px-4 flex items-center gap-2 bg-[#F5DAD2]'
                ><img src={poistionBg} className='w-7 h-5'></img>
                  10 شاغر 
                </p>
                
                <p className='mt-6 rounded-full px-4 flex items-center gap-2 bg-[#F9E2AF]'><img src={people} className='w-7 h-7'></img>
                   100 متقدم  </p>

                </div>
              
                </div>
                <div className=' grow '>
                  <img src={leftArrow} className='w-8 h-5 float-end pl-4'></img>
                </div>
                
              </div>

              <div className='w-[85%] mt-2 border-2 rounded-md items-center h-[28vh] flex border-1 shadow-md '>
                <img src={bgCompany} className='w-[16%] rounded-md h-[90%] mr-1'></img>
                <div className=' justify-between h-full pr-4 flex flex-col'>
                <h2 className='text-[1.6rem] mt-4 font-medium'>اسم الشركة</h2>
                <div className='flex gap-6 pb-4'>
                <p className='mt-6 rounded-full px-4 flex items-center gap-2 bg-[#F5DAD2]'
                ><img src={poistionBg} className='w-7 h-5'></img>
                  10 شاغر 
                </p>
                
                <p className='mt-6 rounded-full px-4 flex items-center gap-2 bg-[#F9E2AF]'><img src={people} className='w-7 h-7'></img>
                   100 متقدم  </p>

                </div>
              
                </div>
                <div className=' grow '>
                  <img src={leftArrow} className='w-8 h-5 float-end pl-4'></img>
                </div>
                
              </div>

              

            </div>
          </div>
          <div id='panel-2' role='tabpanel' aria-labelledby='tab-2' hidden={activeTab !== 'panel-2'}>
            {/* Content of the second tab */}
            <p>This is the content of the Second Tab.</p>
          </div>
          <div id='panel-3' role='tabpanel' aria-labelledby='tab-3' hidden={activeTab !== 'panel-3'}>
            {/* Content of the third tab */}
            <p>This is the content of the Third Tab.</p>
          </div>
        </div>

      </div>
    </div>
</div>
      
    </div>
  )
}

export default EventDetails
