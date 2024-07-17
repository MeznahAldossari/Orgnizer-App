import React, {useState, useEffect} from 'react'
import EventInfo from '../pages/EventInfo';
import Companies from '../pages/Companies';
import CompanyDetails from './CompanyDetails';
import axios from 'axios';

function EventData() {
    // const getLocal = JSON.parse(localStorage.getItem("loggedIn"));

    const [checkRole, setCheckRole] = useState('')
    useEffect(()=>{
        getRole()
        
    },[])
    const getRole = ()=>{
        const getLocal = JSON.parse(localStorage.getItem("loggedIn"));
        console.log("id is"+ getLocal.id)
        axios.get(`https://665736969f970b3b36c8658a.mockapi.io/form/${getLocal.id}`)
            .then(function (response) {
            // handle success
            // const users = response.data;
            setCheckRole(response.data.role)
            // let checkRole = response.data.role.find((roles)=> roles.role === "Admin")
            // console.log(response.data.role)
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .finally(function () {
            // always executed
            });
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
