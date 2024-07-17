import React from 'react'
import Nav from '../components/Nav'

const AddEvent = () => {
  return (
    <>
    <Nav />
    {/* stepper start here */}
<div className='mt-10 flex justify-center'>
<div className=' w-[30vw] '>
<ul className="relative flex flex-row gap-x-2">
  <li className="shrink basis-0 flex-1 group">
    <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
        1
      </span>
      <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
    </div>
    <div className="mt-3">
      <span className="block text-sm font-medium text-gray-800 dark:text-white">
        Step
      </span>
    </div>
  </li>

  <li className="shrink basis-0 flex-1 group">
    <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
        2
      </span>
      <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
    </div>
    <div className="mt-3">
      <span className="block text-sm font-medium text-gray-800 dark:text-white">
        Step
      </span>
    </div>
  </li>

  <li className="shrink basis-0 flex-1 group">
    <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
      <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
        3
      </span>
      <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
    </div>
    <div className="mt-3">
      <span className="block text-sm font-medium text-gray-800 dark:text-white">
        Step
      </span>
    </div>
  </li>
</ul>
</div>  
</div>
{/* stepper end here */}
<div className='flex justify-center pt-10 '>
<div className='border rounded-lg flex flex-col justify-center items-center w-[70vw] bg-[#ffffff]'>
<div className=' flex justify-center mt-4 w-[80vw]'>
    <div className='flex flex-col justify-start w-[70vw]'>
        <h1 className='font-bold text-[black] text-[1.2rem] mr-4'>اضافة معرض توظيف </h1>
        <div className='flex justify-evenly items-start'>
            <div className="flex flex-col gap-2">
                <p className='mt-4 text-[#5C59C2] font-semibold'>اسم المعرض</p>
                <div className="relative h-10 w-full min-w-[200px] ">
                    <input type="text" placeholder="ادخل اسم المعرض"
                    className="h-full w-[30vw] rounded-full !border !border-[#99D2CB] border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-[#99D2CB] focus:border-t-transparent focus:!border-t-[#99D2CB] focus:outline-0 focus:ring-[#99D2CB] disabled:border-0 disabled:bg-[#99D2CB]" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-[18vh] gap-2">
                <span className="text-[#5C59C2] font-semibold ">إضافة صورة</span>
                <div className="flex items-center justify-center w-[4vw] h-[6vh] bg-[#5C59C2] text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
                </div>
          </div>
        </div>
        <div className='flex justify-evenly items-start gap-[90px]'>
            <div className="flex flex-col gap-2">
                <p className='mt-4 text-[#5C59C2] font-semibold'>التاريخ</p>
                <div id="single-pre-set-ranges-tab-preview-datepicker" className="w-80 flex flex-col bg-white border shadow-lg rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-3">
            <div className="space-y-0.5">
            <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                <div className="col-span-1">
                <button type="button" class="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </button>
                </div>

                <div className="col-span-3 flex justify-center items-center gap-x-1">
                <div className="relative">
                    <select data-hs-select='{
                        "placeholder": "Select month",
                        "viewport": "#single-pre-set-ranges-tab-preview-datepicker",
                        "toggleTag": "<button type=\"button\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                        "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                        "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                    }' className="hidden">
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6" selected="">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                    </select>
                </div>

                <span className="text-gray-800 dark:text-neutral-200">/</span>

                <div className="relative">
                    <select data-hs-select='{
                        "placeholder": "Select year",
                        "viewport": "#single-pre-set-ranges-tab-preview-datepicker",
                        "toggleTag": "<button type=\"button\"></button>",
                        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                        "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                        "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                    }' className="hidden">
                    <option selected="">2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    </select>
                </div>
                </div>

                <div className="col-span-1 flex justify-end">
                <button type="button" class="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                    <svg className="flex-shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
                </div>
            </div>

            <div className="flex pb-1.5">
                <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Mo
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Tu
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                We
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Th
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Fr
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Sa
                </span>
                <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                Su
                </span>
            </div>

            <div className="flex">
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    26
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    27
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    28
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    29
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    30
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    1
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    2
                </button>
                </div>
            </div>

            <div className="flex">
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    3
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    4
                </button>
                </div>
                <div className="bg-gray-100 rounded-s-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:text-gray-300 disabled:pointer-events-none dark:hover:border-blue-500">
                    5
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    6
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    7
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    8
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    9
                </button>
                </div>
            </div>

            <div className="flex">
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    10
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    11
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    12
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    13
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    14
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    15
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    16
                </button>
                </div>
            </div>

            <div className="flex">
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    17
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    18
                </button>
                </div>
                <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    19
                </button>
                </div>
                <div className="bg-gray-100 rounded-e-full dark:bg-neutral-800">
                <button type="button" className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:text-gray-300 disabled:pointer-events-none dark:hover:border-blue-500">
                    20
                </button>
                </div>
                <div>
                <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    21
                </button>
                </div>
                <div>
                <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    22
                </button>
                </div>
                <div>
                <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    23
                </button>
                </div>
            </div>

            <div className="flex">
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    24
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    25
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    26
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    27
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    28
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    29
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    30
                </button>
                </div>
            </div>

            <div className="flex">
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600">
                    31
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    1
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    2
                </button>
                </div>
                <div>
                <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    3
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    4
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    5
                </button>
                </div>
                <div>
                <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:text-gray-300 disabled:pointer-events-none dark:text-neutral-200 dark:hover:border-neutral-500 dark:disabled:text-neutral-600" disabled="">
                    6
                </button>
                </div>
            </div>
            </div>
        </div>

        <div className="flex justify-end items-center gap-x-2 p-3 border-t dark:border-neutral-700">
            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
            Cancel
            </button>
            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Apply
            </button>
        </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 ">
                <p className='mt-4 text-[#5C59C2] font-semibold w-[6vw] '>الوقت</p>
            </div>
        </div>
        <div className='flex justify-center items-start gap-[400px]  '>
            <div className="flex flex-col gap-2">
                <p className='mt-4 text-[#5C59C2] font-semibold'>الموقع</p>
            </div>
            <div className="flex flex-col gap-2 ">
                <p className='mt-4 text-[#5C59C2] font-semibold'>الفئة المستهدفة</p>
                <label className="block">
                <select className="form-select block mt-1 peer h-full w-[15vw] rounded-full !border !border-[#99D2CB] border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-[#99D2CB] focus:border-t-transparent focus:!border-t-[#99D2CB] focus:outline-0 focus:ring-[#99D2CB] disabled:border-0 disabled:bg-[#99D2CB]">
                    <option className=' text-[#5C59C2]'>اختر الفئة </option>
                    <option className='text-[#5C59C2]'>اكاديمية طويق</option>
                    <option className='text-[#5C59C2]'>أكاديمية ابل</option>
                </select>
                </label>
            </div> 
        </div>       
    </div> 
  </div>
 </div>
</div>
    </>
  )
}

export default AddEvent


