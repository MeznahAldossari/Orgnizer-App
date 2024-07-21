import React, { useState, useEffect } from 'react';
import { Autocomplete, Chip, Stack, TextField } from '@mui/material';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { MultiSelect } from 'react-multi-select-component';



const EditEventModal = ({ event, onClose, onSave }) => {
  const [editEvent, setEditEvent] = useState({
    ...event,
    mainCategory: event.mainCategory || []
  });
  const [selectedCategories, setSelectedCategories] = useState(
    event.mainCategory.map(category => ({ label: category, value: category })) || []
  );
  const [image, setImage] = useState(null);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
//   const [companies, setCompanies] = useState([]);
const [position, setPosition] = useState(event.position || { lat: 0, lng: 0 });
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditEvent({ ...editEvent, imageUrl: reader.result });
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const handleSave = () => {
    // const updatedEvent = { ...editEvent, companies: selectedCompanies, position };
    const updatedEvent = { ...editEvent, position };
    onSave(updatedEvent);
    onClose();
  };

  const onMapClick = (e) => {
    const latLng = e.latLng.toJSON();
    setPosition(latLng);
    setEditEvent({ ...editEvent, position: latLng });
  };
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, 'CompaniesData'));
//         const companiesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })); 
//         console.log('Fetched companies:', companiesData); 
//         setCompanies(companiesData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     fetchData();
//   }, []);

const toDateString = (date) => {
    if (!date) return '';
    const parsedDate = new Date(date);
    return parsedDate instanceof Date && !isNaN(parsedDate) ? parsedDate.toISOString().split('T')[0] : '';
  };

  const handleDateChange = (field, value) => {
    setEditEvent({ ...editEvent, [field]: value });
  };
  const handleParticipantsChange = (selected) => {
    const selectedCategories = selected.map(option => option.value);
    setSelectedCategories(selected);
    setEditEvent({ ...editEvent, mainCategory: selectedCategories });
  };

  const targetOptions = [
    { label: 'طويق', value: 'طويق' },
    { label: 'اكاديمية أبل', value: 'اكاديمية أبل' },
    { label: 'الاكاديمية السعودية', value: ' الاكاديمية السعودية' }


  ];
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">تعديل المعرض</h2>

        <label className="block mb-2">
اسم المعرض :          <input
            type="text"
            className="border rounded w-full py-2 px-3"
            value={editEvent.eventName}
            onChange={(e) => setEditEvent({ ...editEvent, eventName: e.target.value })}
          />
        </label>
        <label className="text-black" htmlFor="participants">الفئات المستهدفة</label>
        <MultiSelect
          options={targetOptions}
          value={selectedCategories}
          onChange={handleParticipantsChange}
          labelledBy="اختر الفئات المستهدفة"
        />
 <div className="">
              <label htmlFor="start-time" className="text-black">حدد وقت البداية</label>
              <select  
                value={editEvent.startTime}
                onChange={(e) => setEditEvent({ ...editEvent, startTime: e.target.value })}
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
            </div>
            <div>
              <label htmlFor="end-time" className="text-black">حدد وقت النهاية</label>
              <select
               id="end-time"
               value={editEvent.endTime}
               onChange={(e) => setEditEvent({ ...editEvent, endTime: e.target.value })}
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
            </div>
          
        <label className="block mb-2">
        تاريخ بداية المعرض :       <input
            type="date"
            className="border rounded w-full py-2 px-3"
            value={toDateString(editEvent.startDate)}
            onChange={(e) => handleDateChange('startDate', e.target.value)}
          />
        </label>

        <label className="block mb-2">
        تاريخ نهاية المعرض :          <input
            type="date"
            className="border rounded w-full py-2 px-3"
            value={toDateString(editEvent.endDate)}
            onChange={(e) => handleDateChange('endDate', e.target.value)}
          />
        </label>

        <label className="block mb-2">
          صورة المعرض:
          <input
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
          />
        </label>

        <label className="block mb-2">
          التفاصيل:
          <textarea
            className="border rounded w-full py-2 px-3"
            value={editEvent.details}
            onChange={(e) => setEditEvent({ ...editEvent, details: e.target.value })}
          />
        </label>

        {/* <label className="text-black" htmlFor="companies">الشركات</label>
        <Stack spacing={3} sx={{ marginTop: "10px", width: 410, backgroundColor: 'white' }} className='max-sm:w-[50%]'>
  <Autocomplete
    multiple
    id="tags-filled"
    options={companies.map((company) => company.companyName || '')} 
    freeSolo
    value={selectedCompanies}
    onChange={(event, newValue) => {
      setSelectedCompanies(newValue);
    }}
    renderTags={(value, getTagProps) =>
      value.map((option, index) => (
        <Chip
          key={option}
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
              marginLeft: '3px'
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
</Stack> */}


        <div className="text-black mt-4">
        <label className="text-black" htmlFor="companies">الموقع</label>

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

        <div className="flex justify-end mt-4">
          <button
            className=" text-white px-4 py-2 ml-2 rounded-md   bg-[#99D2CB]"
            onClick={handleSave}
          >
            حفظ
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2"
            onClick={onClose}
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventModal;
