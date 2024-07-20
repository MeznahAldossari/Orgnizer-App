import React, { useState,useCallback, useEffect } from 'react';
import { db, storage, auth } from '../config/firebase';
import { collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signInAnonymously } from 'firebase/auth';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Nav from '../components/Nav';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { sendPasswordResetEmail,getAuth } from 'firebase/auth';
import { MultiSelect } from 'react-multi-select-component';
import Select from '@oshq/react-select';
import '@oshq/react-select/index.css';

const initialPosition = {
  lat: 24.7136, 
  lng: 46.6753
};
const AddEvents = () => {
  const [position, setPosition] = useState(initialPosition);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [targetParticipants, setTargetParticipants] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'CompaniesData'));
        const companiesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })); // Include document ID
        setCompanies(companiesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    signInAnonymously(auth).catch((error) => {
      console.error('Error signing in anonymously:', error);
    });
  }, []);

  const onMapClick = useCallback((event) => {
    setPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!eventName) newErrors.eventName = 'إسم المعرض مطلوب';
    if (!targetParticipants.length) newErrors.targetParticipants = 'الفئات المستهدفة مطلوبة';
    if (!startTime) newErrors.startTime = 'وقت البداية مطلوب';
    if (!endTime) newErrors.endTime = 'وقت النهاية مطلوب';
    if (!startDate) newErrors.startDate = 'تاريخ البداية مطلوب';
    if (!endDate) newErrors.endDate = 'تاريخ النهاية مطلوب';
    if (!details) newErrors.details = 'التفاصيل مطلوبة';
    if (!selectedCompanies.length) newErrors.selectedCompanies = 'الشركات مطلوبة';
    if (!image) newErrors.image = 'صورة المعرض مطلوبة';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const eventRef = await addDoc(collection(db, 'EventDetails'), {
        eventName,
        mainCategory: targetParticipants.map(participant => participant.value), 
        startTime,
        endTime,   
        startDate,
        endDate,
        details,
        position
      });

      let imageUrl = '';
      if (image) {
        const imageRef = ref(storage, `events/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await setDoc(eventRef, { imageUrl }, { merge: true });

      const companiesRef = collection(eventRef, 'myCompanies');
      for (const companyName of selectedCompanies) {
        const company = companies.find(c => c.companyName === companyName);
        if (company) {
          const companyRef = doc(companiesRef, company.id); 
          await setDoc(companyRef, {
            jobPositions: []
          }, { merge: true });
          try {
            const auth = getAuth();
            const emailResponse = await sendPasswordResetEmail(auth, company.email);             console.log(`Password reset email sent to ${company.email}`);
          } catch (emailError) {
            console.error(`Error sending password reset email to ${company.email}:`, emailError);
          }
        }
      }

      alert('Event added successfully!');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
 
  const handleParticipantsChange = (e) => {
    const { options } = e.target;
    const selectedValues = [];
    for (const option of options) {
      if (option.selected) {
        selectedValues.push(option.value);
      }
    }
    setTargetParticipants(selectedValues);
  };

  const targetOptions = [
    { label: 'طويق', value: 'طويق' },
    { label: 'اكاديمية أبل', value: 'اكاديمية أبل' },
    { label: 'الاكاديمية السعودية', value: ' الاكاديمية السعودية' }


  ];
  return (
    <>
    <Nav />
    <div className='bg-[#F3F6FF] h-max w-full py-14'>
      <div className='flex justify-start mr-24 max-sm:mr-0'>
        <h1 className="text-2xl font-bold max-sm:text-center w-full text-black capitalize mb-5">إضافة معرض</h1>
      </div>

      <section dir="rtl" className="max-w-4xl max-sm:w-[95%] p-6 mx-auto bg-white rounded-md shadow-2xl shadow-black">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
              <label className="text-black" htmlFor="eventName">إسم المعرض</label>
              <input
                id="eventName"
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring"
              />
              {errors.eventName && <p className="text-red-500">{errors.eventName}</p>}
            </div>
            <div>
              <label className="text-black" htmlFor="participants">الفئات المستهدفة</label>
              <MultiSelect
                options={targetOptions}
                value={targetParticipants}
                onChange={setTargetParticipants}
                labelledBy="اختر الفئات المستهدفة"
              />
              
              {errors.targetParticipants && <p className="text-red-500">{errors.targetParticipants}</p>}
            </div>
            <div className="">
              <label htmlFor="start-time" className="text-black">حدد وقت البداية</label>
              <select  
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                id="start-time"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#99D2CB] rounded-full focus:border-blue-500 focus:outline-none focus:ring"
              >
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
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </select>
              {errors.startTime && <p className="text-red-500">{errors.startTime}</p>}
            </div>
            <div>
              <label htmlFor="end-time" className="text-black">حدد وقت النهاية</label>
              <select
               id="end-time"
               value={endTime}
               onChange={(e) => setEndTime(e.target.value)}
               className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#99D2CB] rounded-full focus:border-blue-500 focus:outline-none focus:ring"
              >
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
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
                <option value="00:00">00:00</option>
              </select>
              {errors.endTime && <p className="text-red-500">{errors.endTime}</p>}
            </div>
            <div>
              <label htmlFor="start-date" className="text-black">تاريخ البداية</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
            </div>
            <div>
              <label htmlFor="end-date" className="text-black">تاريخ النهاية</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.endDate && <p className="text-red-500">{errors.endDate}</p>}
            </div>
            <div>
              <label className="text-black" htmlFor="details">التفاصيل</label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
              {errors.details && <p className="text-red-500">{errors.details}</p>}
            </div>
            <div>
              <label className="text-black" htmlFor="companies">الشركات</label>
                <Stack spacing={3} sx={{ marginTop: "10px", width: 410, backgroundColor: 'white' }} className='max-sm:w-[50%] w-full '>
                  <Autocomplete
                    multiple
                    id="tags-filled"
                    options={companies.map((company) => company.companyName)}
                    freeSolo
                    onChange={(event, newValue) => {
                      setSelectedCompanies(newValue);
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
                        label="الشركات"
                        placeholder="الشركات المشاركة"
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
              {errors.selectedCompanies && <p className="text-red-500">{errors.selectedCompanies}</p>}
            </div>
            <div>
              <label className="text-black" htmlFor="image">إضافة صورة</label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.image && <p className="text-red-500">{errors.image}</p>}
            </div>
            <div>
        
    <LoadScript googleMapsApiKey="AIzaSyANdvQ4iYKHnp9Kt_xvFr1Ze8-cq1ulDM0">
    <GoogleMap
                  mapContainerStyle={{ height: '400px', width: '100%' }}
                  zoom={10}
                  center={position}
                  onClick={onMapClick}
                >
                  <Marker position={position} />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-gray-600"
              >
                إضافة المعرض
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  </>
  );
};

export default AddEvents;
