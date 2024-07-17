import React from 'react'
import Nav from '../components/Nav'

const StudentProfile = () => {
  return (
    <div>
    <Nav />
    <div className='bg-[#f3f3f3] h-full w-full'>
        <div className='flex justify-between items-end w-full h-[10vh]'>
            <p className='font-semibold text-[1.5rem] mr-14'> مرحباً <span className='text-[#5C59C2]'> اسماء</span>  </p>
            <button className="rounded-lg text-white bg-[#f39e4e] py-1 px-3 ml-14"> حفظ</button>

        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center mt-6 bg-white w-[91%] h-[20vh] rounded-lg'>
                <img className='mr-4 rounded-full h-[15vh] w-[7vw] max-sm:w-[20vw] max-sm:h-[10vh]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2aIMpOIYZKSLNRQnDOXtna8n7eRumIbYfA&s' />
                <div className='mr-4'>
                    <p className='font-bold text-[1.3rem]'>اسماء عبدالله</p>
                    <p className='text-[gray] text-[0.9rem]'>معسكر تطوير واجهات المستخدم باسخدام جافاسكربت</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6 max-sm:grid-cols-1'>
                <div className='mt-6 bg-white w-[44vw] h-full rounded-lg max-sm:w-[90vw]'>
                    <h1 className='pt-6 pr-6 font-extrabold text-[#5C59C2] text-[1.1rem]'>المعلومات الأساسية</h1>
                    <br />
                    <hr className='flex justify-center w-full' />
                <div className='flex justify-between w-[30vw] max-sm:w-[80vw] '>
                    <div className='flex flex-col '>
                        <p className='mt-2 mr-6 font-bold'>الاسم الأول</p>
                        <p className='mt-2  mr-6 text-[gray]'>اسماء</p>
                    </div>
                    <div className='flex flex-col '>
                        <p className='mt-2 mr-6 font-bold'>الاسم الاخير</p>
                        <p className='mt-2 mr-6 text-[gray]'>عبدالله</p>
                    </div>
                </div>
                <div className='flex justify-between w-[30vw] mt-4 max-sm:w-[76vw]'>
                    <div className='flex flex-col'>
                        <p className='mt-2 mr-6 font-bold'>رقم الجوال  </p>
                        <p className='mt-2 mr-6 text-[gray]'>05598686864</p>
                    </div>
                    <div className='flex flex-col '>
                        <p className='mt-2 mr-12 font-bold'>الايميل</p>
                        <p className='mt-2 mr-2 text-[gray]'>a@hotmail.com</p>
                    </div>
                </div>
                <div className='flex justify-between w-[30vw] mt-4'>
                    <div className='flex flex-col'>
                        <form className="max-w-[40vw] mx-auto">
                        <label for="countries" className="mt-2 mr-6 font-bold">الجنسية</label>
                        <div className="mr-6 mt-2 relative w-64 ">
                            <select className="block appearance-none w-[31vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4 py-4  pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline max-sm:w-[75vw]">
                                <option className=''>سعودي</option>
                                <option>بحريني</option>
                                <option>اماراتي</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div className='flex '> 
                <div className='flex justify-between w-[30vw] mt-4'>
                    <div className='flex flex-col'>
                        <form className="max-w-[40vw] mx-auto">
                        <label for="countries" className="mt-2 mr-6 font-bold">دولة الاقامة</label>
                        <div className="mr-6 mt-2 relative w-64">
                            <select className="block appearance-none w-[31vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4 py-4 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>السعودية</option>
                                <option>البحرين</option>
                                <option>الامارات</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                </div>
                <div className='flex justify-between w-[30vw] mt-4'>
                    <div className='flex flex-col'>
                        <form className="max-w-[40vw] mx-auto">
                        <label for="countries" className="mt-2 mr-6 font-bold">المدينة</label>
                        <div className="mr-6 mt-2 relative w-64">
                            <select className="block appearance-none w-[10vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4 py-4 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>الرياض</option>
                                <option>مكة </option>
                                <option>المدينة</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className='flex flex-col'>
                        <form className="max-w-[40vw] mx-auto">
                        <label for="countries" className="mt-2 mr-6 font-bold">خريج</label>
                        <div className="mr-6 mt-2 relative w-64">
                            <select className="block appearance-none w-[10vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4 py-4 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option >طويق</option>
                                <option>ابل </option>
                                {/* <option>الاكاديمية السعودية </option> */}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                    
                </div>
                <div className='mt-6 bg-white w-[44vw] h-full rounded-lg max-sm:w-[90vw]'>
                    <h1 className='pt-6 pr-6 font-bold text-[1.1rem] text-[#5C59C2]'> تحميل الملفات </h1>
                    <br />
                    <hr className='flex justify-center w-full' />
                    <div className="flex flex-col items-center justify-center w-full">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-[43vw] mt-2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-[#dffcf838] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 max-sm:w-[84vw]">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-[#99D2CB] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                        <div className='flex border border-[#cacaca] rounded-lg w-[43vw] h-[10vh] mt-2 max-sm:w-[84vw]'>
                            <div className='bg-[#ff7f4d] flex flex-col justify-center  items-center w-[4vw] max-sm:w-[10vw] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                </svg>
                            </div>
                            <div className='mr-2 flex flex-col justify-center gap-2 '>
                                <p className='font-bold'>السيرة الذاتية</p>
                                <p className='text-[gray]'>zip | 9.83 MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='mt-12 bg-white w-[91%] h-auto rounded-lg p-4'>
                <h1 className='pt-6 pr-6 font-bold text-[1.1rem] text-[#5C59C2]'> حسابات التواصل الاجتماعي </h1>
                <br />
                <hr className='w-full' />
                <div className="bg-white w-full h-auto py-8 flex flex-wrap items-center justify-center gap-6 sm:gap-40">
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 93 92" fill="none">
                            <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#337FFF"/>
                            <path d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 93 92" fill="none">
                            <rect x="0.138672" width="91.5618" height="91.5618" rx="15" fill="black"/>
                            <path d="M50.7568 42.1716L69.3704 21H64.9596L48.7974 39.383L35.8887 21H21L40.5205 48.7983L21 71H25.4111L42.4788 51.5869L56.1113 71H71L50.7557 42.1716H50.7568ZM44.7152 49.0433L42.7374 46.2752L27.0005 24.2492H33.7756L46.4755 42.0249L48.4533 44.7929L64.9617 67.8986H58.1865L44.7152 49.0443V49.0433Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 93 93" fill="none">
                            <rect x="1.13867" y="1" width="91.5618" height="91.5618" rx="15" fill="#006699"/>
                            <path d="M37.1339 63.4304V40.9068H29.6473V63.4304H37.1346H37.1339ZM33.3922 37.8321C36.0023 37.8321 37.6273 36.1025 37.6273 33.9411C37.5785 31.7304 36.0023 30.0491 33.4418 30.0491C30.8795 30.0491 29.2061 31.7304 29.2061 33.9409C29.2061 36.1023 30.8305 37.8319 33.3431 37.8319H33.3916L33.3922 37.8321ZM41.2777 63.4304H48.7637V50.8535C48.7637 50.1813 48.8125 49.5072 49.0103 49.0271C49.5513 47.6815 50.7831 46.2887 52.8517 46.2887C55.5599 46.2887 56.644 48.354 56.644 51.3822V63.4304H64.1297V50.516C64.1297 43.598 60.4369 40.3787 55.5115 40.3787C51.4733 40.3787 49.6998 42.6357 48.7144 44.173H48.7643V40.9075H41.2781C41.3759 43.0205 41.2775 63.4312 41.2775 63.4312L41.2777 63.4304Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default StudentProfile