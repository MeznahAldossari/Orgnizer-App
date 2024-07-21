import React, {useState, useEffect} from 'react'
import EventInfo from '../pages/EventInfo';
import Companies from '../pages/Companies';
import CompanyDetails from './CompanyDetails';
import axios from 'axios';

function EventData() {
    const [cardInfo, setCardInfo] = useState([])
    const [checkRole, setCheckRole] = useState('')
    useEffect(()=>{
        getRole()
        
    },[])
    const getRole = ()=>{
        const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
        setCheckRole(getLocal.role)
      
    }

 

  return (
    <div>
      {checkRole === "admin" ? (
        <EventInfo />
      ) : checkRole === "student" ? (
        <Companies />
      ) : checkRole === "company" ? (
        <CompanyDetails />
      ) :null}
      
    </div>
  )
}

export default EventData
