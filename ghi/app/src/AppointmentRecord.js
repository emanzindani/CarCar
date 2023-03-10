
import React, { useState, useEffect } from "react";


function AppointmentRecord() {
  const [appointments, setAppointments] = useState([])
  const[searchTerm, setSearchTerm] = useState("");


  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/appointments/');

    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  const divStyle = {
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  return (
    <>
    <div className="ui search" style={divStyle}>
      <input type="text" placeholder="Search vehicle vins"
              className="form-control prompt"
              onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
    <h1>Service Records</h1>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Vin</th>
          <th>Customer name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Technician</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {appointments.filter(appointment=>appointment.automobile.toLowerCase().includes(searchTerm.toLowerCase())).map(appointment => {
          return (
            <tr key={appointment.id}>
              <td>{ appointment.automobile }</td>
              <td>{ appointment.customer_name }</td>
              <td>{ appointment.appointment_date }</td>
              <td>{ appointment.appointment_time }</td>
              <td>{ appointment.technician }</td>
              <td>{ appointment.service_reason }</td>

            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}


export default AppointmentRecord;
