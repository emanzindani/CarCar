
import React, { useEffect, useState } from 'react';

function TechnicianForm(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeID, setEmployeeID] = useState('');

  const handleFirstNameChange = (event) => {

    const value = event.target.value;

    return setFirstName(value);
}

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    return setLastName(value);
}

  const handleEmployeeIDChange = (event) => {
    const value = event.target.value;
    return setEmployeeID(value);
}




  const handleSubmit = async (event) => {
    event.preventDefault();


    const data = {};

    data.first_name = firstName;
    data.last_name = lastName;
    data.employee_id = employeeID;




  const technicianUrl = 'http://localhost:8080/api/technicians/';

  const fetchConfig = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(technicianUrl, fetchConfig);

  if (response.ok) {
    const newTechnician = await response.json();

    setFirstName('');
    setLastName('');
    setEmployeeID('');

  }
}


  return (
  <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a new technician</h1>
                <form onSubmit={handleSubmit} id="create-technician-form">
                  <div className="form-floating mb-3">
                    <input onChange={handleFirstNameChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" value={firstName}></input>
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={handleLastNameChange} placeholder="Last name" required type="text" name="last_name" id="last_name" className="form-control" value={lastName}></input>
                    <label htmlFor="last_name">Last name</label>
                  </div>
                  <div className="form-floating mb-3">
                <input onChange={handleEmployeeIDChange} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control" value={employeeID}></input>
                  <label htmlFor="employee_id">Employee ID</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
          </div>
      </div>
      )
}


export default TechnicianForm;
