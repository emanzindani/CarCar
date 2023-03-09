import { useEffect, useState } from 'react';


function SalesPersonRecord () {
    const [filterValue, setFilterValue] = useState('')
    const [sales, setSales] = useState([])


    const getData = async () => {
        const url = "http://localhost:8090/api/sale/"
        const response = await fetch(url)


        if (response.ok) {
            const data = await response.json()
            setSales(data.sales)

        }
    }
    useEffect(() =>{
        getData()
    }, [])

    const handleChangeForm = (e) => {
        setFilterValue(e.target.value)
    }
    const filteredSalespeople = () => {
        if (filterValue === '') {
            return sales
        } else {
            return sales.filter((sale) =>
                sale.sales_person.name.includes(filterValue)
            )
        }
    }

    return (
        <>
            <div className="row">
            <h1>Sales person records</h1>
            <input onChange={handleChangeForm} placeholder="Filter For Salesperson" />
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Salesperson</th>
                    <th>Employee ID</th>
                    <th>Customer</th>
                    <th>Vin</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSalespeople().map((sale, id) => {
                        return (
                            <tr key={sale.id}>
                            <td>{sale.sales_person.name}</td>
                            <td>{ sale.sales_person.number }</td>
                            <td>{sale.customer.name}</td>
                            <td>{sale.automobile.vin}</td>
                            <td>{sale.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
                </table>
            </div>
        </>

    );

}

export default SalesPersonRecord;
