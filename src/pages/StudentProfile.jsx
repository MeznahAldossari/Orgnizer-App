import React, { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Footer from '../components/Footer'


const StudentProfile = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState([]);
  const [cvFileName, setCvFileName] = useState('');
  const [cvFileSize, setCvFileSize] = useState('');

  
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const stidentDoc = await getDoc(doc(db, 'users', studentId));
        if (stidentDoc.exists()) {
          setStudent(stidentDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };
    fetchStudent();
  }, [studentId]);


  const handleCvUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const name = file.name;
      const size = (file.size / (1024 * 1024)).toFixed(2) + ' MB'; 

      setCvFileName(name);
      setCvFileSize(size);

      try {
        const storage = getStorage();
        const storageRef = ref(storage, `studentsCV/${studentId}/${name}`);
        await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(storageRef);

        await updateDoc(doc(db, 'users', studentId), {
          CV: downloadUrl,
          cvFileName: name,
          cvFileSize: size,
        });
      } catch (error) {
        console.error('Error uploading CV:', error);
      }
    }
  };
  return (
    <div>
    <Nav />
    <div className='bg-[#f7f7f7] h-full w-full'>
        <div key={student.id} className='flex justify-between items-end w-full h-[10vh] '>
            <p className='font-semibold text-[1.5rem] mr-14'> مرحباً <span className='text-[#5C59C2]'> {student.Fname}</span>  </p>
            <div className='flex gap-2'>
                <Link to='/'><button className="rounded-lg text-white bg-[#999999] hover:bg-[#b1b1b1]  py-1 px-3 ml-16 max-sm:ml-6"> عودة</button></Link>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center mb-2'>
            <div className='flex items-center mt-6 bg-white w-[91%] h-[20vh] rounded-lg'>
                <img className='mr-4 rounded-full h-[15vh] w-[7vw] max-sm:w-[20vw] max-sm:h-[10vh]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2aIMpOIYZKSLNRQnDOXtna8n7eRumIbYfA&s' />
                <div className='mr-4'>
                    <p className='font-bold text-[1.3rem]'> {student.Fname} {student.Lname}</p>
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
                        <p className='mt-2  mr-6 text-[gray]'>{student.Fname}</p>
                    </div>
                    <div className='flex flex-col ml-28 '>
                        <p className='mt-2 mr-6 font-bold'>الاسم الاخير</p>
                        <p className='mt-2 mr-6 text-[gray]'>{student.Lname}</p>
                    </div>
                </div>
                <div className='flex justify-between w-[30vw] mt-4 max-sm:w-[76vw]'>
                    <div className='flex flex-col'>
                        <p className='mt-2 mr-6 font-bold'>رقم الجوال  </p>
                        <p className='mt-2 mr-6 text-[gray]'>{student.phone}</p>
                    </div>
                    <div className='flex flex-col '>
                        <p className='mt-2 mr-2 font-bold  '>الايميل</p>
                        <p className='mt-2 mr-2 text-[gray] '>{student.email}</p>
                    </div>
                </div>
                <div className='flex justify-between w-[30vw] mt-4'>
                    <div className='flex flex-col'>
                        <form className="max-w-[40vw] mx-auto">
                        <label htmlFor="countries" className="mt-2 mr-6 font-bold">الجنسية</label>
                        <div className="mr-6 mt-2 relative w-64 ">
                            <select className="block  appearance-none w-[31vw] h-[7vh] bg-white border border-[#99D2CB] hover:border-[#61b8ae] px-4 py-2  pr-8 rounded-full shadow leading-tight focus:outline-none focus:shadow-outline max-sm:w-[75vw]">
                                <option className=''>{student.nationality}</option>
                          
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
                                <option>{student.country}</option>
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
                                <option>{student.city}</option>
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
                                <option >{student.category}</option>
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
              <p className='mt-2 mr-2 gap-2 text-[gray]'>{student.favorites}</p>

         
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
                            <input id="dropzone-file" onChange={handleCvUpload} type="file"  className="hidden" />
                            
                        </label>
             
                        <div className='flex border border-[#cacaca] rounded-lg w-[43vw] h-[10vh] mt-2 max-sm:w-[84vw]'>
                            <div className='bg-[#f39e4e] flex flex-col justify-center  items-center w-[4vw] max-sm:w-[10vw] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-white ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                </svg>
                            </div>
                            <div className='mr-2 flex flex-col justify-center gap-2 '>
                            {cvFileName && (
                  <div className="mt-4">
                    <p>اسم الملف: {cvFileName}</p>
                    <p>حجم الملف: {cvFileSize}</p>
                  </div>
                  
                )}
                {!cvFileName && (
                  <div className="">
                        <p className='text-[0.8rem]'>اسم الملف: {student.cvFileName}</p>
                    <p className='text-[0.8rem]'>حجم الملف: {student.cvFileSize}</p>
                  </div>
                  
                )}
 

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
    <div className='mt-12'>
        <Footer />
    </div>
    </div>
  )
}

export default StudentProfile