import React, { useEffect, useState } from 'react';

function SalesPersonForm(props) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        return setName(value);
    }
    const handleNumberChange = (event) => {
        const value = event.target.value;
        return setNumber(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = name;
        data.number = number;

        const salesPersonUrl = 'http://localhost:8090/api/salesperson/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salesPersonUrl, fetchConfig);
        if (response.ok) {
            const newsalesPerson = await response.json();

            setName('');
            setNumber('');
        }
    }
        return (
            <div className="container">
                <div className="row">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <h1>Become a Sales Person</h1>
                            <form onSubmit={handleSubmit} id="create-salesperson-form">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                    <label htmlFor="name">Employee Number</label>
                                    <input onChange={handleNumberChange} value={number} placeholder="Number" required type="text" name="number" id="number" className="form-control" />
                                </div>
                                <button className="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default SalesPersonForm;
