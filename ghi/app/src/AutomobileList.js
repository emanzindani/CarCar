import { useEffect, useState } from 'react';

function AutomobileList() {
    const [autos, setAutos] = useState([])

    const getData = async () => {
        const response = await fetch ('http://localhost:8100/api/automobiles/')
        if (response.ok) {
            const data = await response.json();
            setAutos(data.autos)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
             <h1>List of Automobiles</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Vin</th>
                            <th>Model</th>
                            <th>Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {autos.map(auto => {
                            return (
                                <tr key={auto.id}>
                                    <td>{auto.color}</td>
                                    <td>{auto.year}</td>
                                    <td>{auto.vin}</td>
                                    <td>{auto.model.name}</td>
                                    <td>{auto.model.manufacturer.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    )
}
export default AutomobileList;
