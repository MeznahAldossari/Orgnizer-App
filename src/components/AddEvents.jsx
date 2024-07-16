import React from 'react'
import Nav from './Nav'

function AddEvents() {
  return (
    <div>
        <div>
        <Nav/>
        </div>

        <div>
            <h2 className='text-[1.7rem] font-bold text-[#5c59c2] mr-8 mt-12'>اضافة معرض جديد</h2>
            <div className='flex flex-col border-2 w-[50%] m-auto rounded-lg'>
                <input type="text" placeholder='أسم المعرض' className='border-2 rounded-lg pr-2'></input>
                <input type="date" placeholder='أسم المعرض'></input>

            </div>
        </div>
        
        

      
    </div>
  )
}

export default AddEvents
