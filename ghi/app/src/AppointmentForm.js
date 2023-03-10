import React, {useState, useEffect} from 'react';

function AppointmentForm() {
  const [automobiles, setAutomobiles] = useState([])
  const [technicians, setTechnicians] = useState([])
  const [formData, setFormData] = useState({
    appointment_date: '',
    appointment_time: '',
    customer_name: '',
    technician: '',
    service_reason: '',
    automobile: '',
  })


  const getTechnicianData = async () => {
    const url = 'http://localhost:8080/api/technicians/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  }


  useEffect(() => {
    getTechnicianData();
  }, []);

  const getAutoData = async () => {
    const url = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data.autos);
    }
  }

  useEffect(() => {
    getAutoData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    const locationUrl = 'http://localhost:8080/api/appointments/';

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(locationUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        appointment_date: '',
        appointment_time: '',
        customer_name: '',
        technician: '',
        service_reason: '',
        automobile: '',
      });
    }
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({

      ...formData,


      [inputName]: value
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new appointment</h1>
          <form onSubmit={handleSubmit} id="create-conference-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.appointment_date} placeholder="Date" required type="date" name="appointment_date" id="appintment_date" className="form-control" />
              <label htmlFor="appointment_date">Appointment date</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.appointment_time} placeholder="Appointment time" required type="time" name="appointment_time" id="appointment_time" className="form-control" />
              <label htmlFor="appointment_time">Appointment time</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.customer_name} placeholder="Customer name" required type="text" name="customer_name" id="customer_name" className="form-control" />
              <label htmlFor="customer_name">Customer name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.service_reason} placeholder="Service reason" required type="text" name="service_reason" id="service_reason" className="form-control" />
              <label htmlFor="service_reason">Reason for service</label>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} value={formData.technician} required name="technician" id="technician" className="form-select">
                <option value="">Choose a technician</option>
                {technicians.map(technician => {
                  return (
                    <option key={technician.id} value={technician.first_name}>{technician.first_name}</option>
                  )
                })}
              </select>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} value={formData.automobile} required name="automobile" id="automobile" className="form-select">
                <option value="">Choose an automobile</option>
                {automobiles.map(automobile => {
                  return (
                    <option key={automobile.id} value={automobile.href}>{automobile.vin}</option>
                  )
                })}
              </select>
            </div>

            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
