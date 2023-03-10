
import { useEffect, useState } from 'react';


function AppointmentList() {
  const [appointments, setAppointments] = useState([])

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

  const handleDelete = async (e) => {
    const url = `http://localhost:8080/api/appointments/${e.target.id}`

    const fetchConfigs = {
        method: "Delete",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, fetchConfigs)
    const data = await resp.json()

    setAppointments(appointments.filter(automobile => String(automobile.id) !== e.target.id))
  
}



  return (
    <div>
    <h1>Appointments</h1>
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
        {appointments.map(appointment => {
          return (
            <tr key={appointment.id}>
              <td>{ appointment.automobile }</td>
              <td>{ appointment.customer_name }</td>
              <td>{ appointment.appointment_date }</td>
              <td>{ appointment.appointment_time }</td>
              <td>{ appointment.technician }</td>
              <td>{ appointment.service_reason }</td>
              <td><button onClick={handleDelete} id={appointment.id} className="btn btn-danger">Cancel</button></td>
              <td><button onClick={handleDelete} id={appointment.id} className="btn btn-success">Finished</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}

export default AppointmentList;
