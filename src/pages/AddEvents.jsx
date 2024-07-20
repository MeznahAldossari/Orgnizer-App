import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Nav from '../components/Nav'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';



const AddEvents = () => {
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
    <>
    <Nav />
      <div className='bg-[#ffffff] h-max w-full py-14'>
        <div className='flex justify-start mr-24 max-sm:mr-0'>
          <h1 className="font-semibold text-[1.5rem] mr-16 pt-6 pr-1 text-[#5C59C2]">إضافة معرض</h1>
        </div>

      <section dir="rtl" className="max-w-4xl max-sm:w-[95%] p-6 mx-auto bg-white rounded-md shadow-2xl mt-4">
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 ">
            <div>
              <label className="text-black" htmlFor="username">اسم المعرض</label>
              <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#99D2CB] rounded-full focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-black" htmlFor="participants">الفئات المستهدفة </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#99D2CB] rounded-full focus:border-blue-500 focus:outline-none focus:ring">
                <option>طويق</option>
                <option>اكاديمية أبل</option>
              </select>
            </div>
            <div>
              <label className="text-black" htmlFor="startDate">تاريخ بداية المعرض</label>
              <input id="startDate" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#99D2CB] rounded-full" />
            </div>
            <div>
              <label className="text-black" htmlFor="endDate">تاريخ نهاية المعرض</label>
              <input id="endDate" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 border border-[#99D2CB] rounded-full" />
            </div>
            <div className="">
              {/* <div className="flex justify-between">
                <div className='flex gap-2'> */}
                <label htmlFor="text-black start-time " className="text-black">حدد وقت البداية</label>
                <select id="start-time" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#99D2CB] rounded-full focus:border-blue-500 focus:outline-none focus:ring">
                  <option value="">اختر وقت البداية</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
                {/* </div> */}
                {/* <div className='flex gap-2'> */}
                </div>
                <div>
                <label htmlFor="end-time" className="text-black">حدد وقت النهاية</label>
                <select id="end-time" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#99D2CB] rounded-full focus:border-blue-500 focus:outline-none focus:ring">
                  <option value="">اختر وقت النهاية</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
                </div>
              {/* </div> */}
            {/* </div> */}
            <div>
              <label className="text-black" htmlFor="details">التفاصيل</label>
              <textarea id="details" className="block h-20 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#99D2CB] rounded-md "></textarea>
            </div>
            <div>
              <label className="text-black" htmlFor="username"> الشركات</label>
              <Stack spacing={3} sx={{ marginTop:"10px", width: 410, backgroundColor: 'white' }} className='max-sm:w-[50%]'>
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
              label="إختر الشركة"
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
            <div>
              <label className="text-black">صورة المؤتمر</label>
              <div className="mt-2 h-36 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-black" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer ml-2 bg-[#F3F6FF] rounded-md font-medium text-black">
                      <span>ارفع الملف</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1 text-black">أو قم بسحب وإفلات الملف</p>
                  </div>
                  <p className="text-xs text-black">PNG، JPG، GIF حتى 10MB</p>
                </div>
              </div>
            </div>
          
            <div>
              <label className="text-black" htmlFor="place">مكان المعرض</label>
              <div className="relative rounded h-52">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerStyle={{ height: '100%', width: '100%' }}
                    center={position}
                    zoom={15}
                    onClick={onMapClick}
                  >
                    <Marker position={position} draggable={true} onDragEnd={onMapClick} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6 gap-2">
            <button className="px-6 py-2 w-24 leading-5 text-white bg-[#f39e4e] hover:bg-[#ffb36c] rounded-md shadow-md ">اضافة</button>
            <Link to='/'><button className="px-6 py-2 w-24 leading-5 text-white bg-[#999999] hover:bg-[#b1b1b1] rounded-md shadow-md ">عودة</button></Link>
          </div>
        </form>
      </section>
    </div>
  
    </>
  )
}

export default AddEvents