import { useEffect, useState } from 'react';

function SalesList() {
    const [sales, setSales] = useState([])

    const getData = async () => {
        const response = await fetch('http://localhost:8090/api/sale/');
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)
        }
    }
    useEffect(() =>{
        getData()
    }, [])

        return (
            <div>
                <h1>Vehicle Sales</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Employee ID</th>
                            <th>Customer</th>
                            <th>Vehicle VIN</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td>{sale.sales_person.name}</td>
                                    <td>{sale.sales_person.number}</td>
                                    <td>{sale.customer.name}</td>
                                    <td>{sale.automobile.vin}</td>
                                    <td>{sale.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
}

export default SalesList;
