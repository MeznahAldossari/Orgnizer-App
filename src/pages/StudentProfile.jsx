import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';



const StudentProfile = () => {
    const [position, setPosition] = useState({ lat: 24.7136, lng: 46.6753 }); 
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);


  const onMapClick = (e) => {
    setPosition(e.latLng.toJSON());
  };

  //for getting comony from API
  useEffect(() => {
    axios.get('https://665736969f970b3b36c8658a.mockapi.io/Products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div>
    <Nav />
    <div className='bg-[#f7f7f7] h-full w-full'>
        <div className='flex justify-between items-end w-full h-[10vh] '>
            <p className='font-semibold text-[1.5rem] mr-14'> مرحباً <span className='text-[#5C59C2]'> اسماء</span>  </p>
            <div className='flex gap-2'>
                <button onClick={() => {
                  const modal = document.getElementById('my_modal_1');
                  modal.showModal();

                  setTimeout(() => {
                    modal.close();
                  }, 2000);
                }}
                className="rounded-lg text-white bg-[#f39e4e] hover:bg-[#ffb36c] py-1 px-3 "> حفظ</button>
                <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box">
                    <div className='flex flex-col justify-center items-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 512 512">
                    <path fill="#32BEA6" d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"></path><path fill="#FFF" d="M392.6,172.9c-5.8-15.1-17.7-12.7-30.6-10.1c-7.7,1.6-42,11.6-96.1,68.8c-22.5,23.7-37.3,42.6-47.1,57c-6-7.3-12.8-15.2-20-22.3C176.7,244.2,152,229,151,228.4c-10.3-6.3-23.8-3.1-30.2,7.3c-6.3,10.3-3.1,23.8,7.2,30.2c0.2,0.1,21.4,13.2,39.6,31.5c18.6,18.6,35.5,43.8,35.7,44.1c4.1,6.2,11,9.8,18.3,9.8c1.2,0,2.5-0.1,3.8-0.3c8.6-1.5,15.4-7.9,17.5-16.3c0.1-0.2,8.8-24.3,54.7-72.7c37-39.1,61.7-51.5,70.3-54.9c0.1,0,0.1,0,0.3,0c0,0,0.3-0.1,0.8-0.4c1.5-0.6,2.3-0.8,2.3-0.8c-0.4,0.1-0.6,0.1-0.6,0.1l0-0.1c4-1.7,11.4-4.9,11.5-5C393.3,196.1,397,184.1,392.6,172.9z"></path>
                    </svg>
                    <h3 className="font-bold text-lg">تم الحفظ بنجاح</h3>
                    </div>
                    <div className="modal-action">
                    <form method="dialog">
                    {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                    </form>
                    </div>
                </div>
                </dialog>
                <Link to='/'><button className="rounded-lg text-white bg-[#999999] hover:bg-[#b1b1b1]  py-1 px-3 ml-16"> عودة</button></Link>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center mb-2'>
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
                        <label htmlFor="countries" className="mt-2 mr-6 font-bold">الجنسية</label>
                        <div className="mr-6 mt-2 relative w-64 ">
                            <select className="block  appearance-none w-[31vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4 py-2  pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline max-sm:w-[75vw]">
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
                        <label htmlFor="countries" className="mt-2 mr-6 font-bold">دولة الاقامة</label>
                        <div className="mr-6 mt-2 relative w-64">
                            <select className="block appearance-none w-[31vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4  py-2  pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline">
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
                        <label htmlFor="countries" className="mt-2 mr-6 font-bold">المدينة</label>
                        <div className="mr-6 mt-2 relative w-64">
                            <select className="block appearance-none w-[10vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4  py-2  pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline max-sm:w-[30vw]">
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
                        <label htmlFor="countries" className="mt-2 mr-6 font-bold">الفئة المستهدفة</label>
                        <div className="mr-6 mt-2 relative w-64">
                            <select className="block appearance-none w-[10vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4 py-2 pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline max-sm:w-[30vw]">
                                <option >طويق</option>
                                <option>ابل </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                <div className='mr-6 mt-4'>
              <label className="font-bold" htmlFor="username"> مجالات اهتمامك</label>
              <Stack spacing={3} sx={{ marginTop:"10px", width: 350, backgroundColor: 'white' }} className='max-sm:w-[50%]'>
        <Autocomplete
          multiple
          id="tags-filled"
          options={products.map((p) => p.product)}
          freeSolo
          onChange={(event, newValue) => {
            setSelectedProducts(newValue);
          }}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
              sx={{
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                '.MuiChip-label': {
                  paddingRight: '14px', 
                },
                '.MuiChip-deleteIcon': {
                  position: 'relative',
                  marginRight: '1px', 
                  marginLeft:"3px"
                },
              }}
            />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label=" اختر مجالات اهتمامك "
              sx={{
                backgroundColor: 'white',
                '.MuiFilledInput-root': {
                  backgroundColor: 'white',
                },
                '.MuiInputLabel-formControl': {
                  right: 20, 
                  left: 'unset', 
                }
                

              }}
              
            />
          )}
          sx={{
            backgroundColor: 'white',
            '.MuiAutocomplete-popupIndicator': {
              backgroundColor: 'white',
            },
            '.MuiAutocomplete-clearIndicator': {
              backgroundColor: 'white',
            },
            '.MuiAutocomplete-tag': {
              backgroundColor: 'white',
            },
          }}
        />
      </Stack>
                    </div>
                    
                </div>
                <div className='mt-6 bg-white w-[44vw] h-full rounded-lg max-sm:w-[90vw]'>
                    <h1 className='pt-6 pr-6 font-bold text-[1.1rem] text-[#5C59C2]'> تحميل الملفات </h1>
                    <br />
                    <hr className='flex justify-center w-full' />
                    <div className="flex flex-col items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[43vw] mt-2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-[#dffcf838] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 max-sm:w-[84vw]">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-[#99D2CB] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">ارفع الملف</span> و قم بسحب وإفلات الملف</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                        <div className='flex border border-[#cacaca] rounded-lg w-[43vw] h-[10vh] mt-2 max-sm:w-[84vw]'>
                            <div className='bg-[#f39e4e] flex flex-col justify-center  items-center w-[4vw] max-sm:w-[10vw] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-white ">
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
            {/* <div className='mt-12 mb-8 bg-white w-[91%] h-auto rounded-lg p-4'>
                <h1 className='pt-6 pr-6 font-extrabold text-[#5C59C2] text-[1.1rem]'> مجالات اهتماماتك</h1>
                <br />
                <hr className='w-full' />
                <div className="bg-white w-full h-auto py-8 flex flex-wrap items-center justify-start gap-6 sm:gap-40">
                    
            
            
                </div>
            </div> */}
        </div>

    </div>
    </div>
  )
}

export default StudentProfile