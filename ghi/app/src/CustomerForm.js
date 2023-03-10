import React, { useEffect, useState } from 'react';

function CustomerForm(props) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        return setName(value);
    }
    const handleAddressChange = (event) => {
        const value = event.target.value;
        return setAddress(value);
    }
    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        return setphoneNumber(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;
        data.address = address;
        data.phone_number = phoneNumber;

        const customerUrl = 'http://localhost:8090/api/customer/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();

            setName('');
            setAddress('');
            setphoneNumber('');
        }
    }
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>New Customer Form</h1>
                            <form onSubmit={handleSubmit} id="create-customer-form">
                                <div className="form-floating mb-3">
                                    <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handleAddressChange} value={address} placeholder="Address" required type="text" name="adress" id="address" className="form-control" />
                                    <label htmlFor="name">Address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                                    <label htmlFor="name">Phone Number</label>
                                </div>
                                <button className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default CustomerForm;
