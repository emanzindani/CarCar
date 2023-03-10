import React, { useEffect, useState } from "react";

function SalesPersonRecord() {
    const [salesPersons, setSalesPersons] = useState([]);
    const [sales, setSales] = useState([]);
    const [selectedSalesPerson, setSelectedSalesPerson] = useState('');

    const handleSelectedSalesPersonChange = (event) => {
      setSelectedSalesPerson(event.target.value);
    };

    const fetchSalesPersons = async () => {
      const url = "http://localhost:8090/api/salesperson/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSalesPersons(data.sales_persons);
      }
    };

    const fetchSales = async () => {
      const url = "http://localhost:8090/api/sale/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setSales(data.sales);
      }
    };

    useEffect(() => {
      fetchSalesPersons();
      fetchSales();
    }, []);

    return (
      <>
        <h2>Sales Person History</h2>
        <div className="mb-3">
          <select onChange={handleSelectedSalesPersonChange} value={selectedSalesPerson} id="sales_person" name="sales_person" className="form-select">
            <option value="">Choose a sales person</option>
            {salesPersons.map((salesPerson) => {
              return (
                <option key={salesPerson.name} value={salesPerson.name}>
                  {salesPerson.name}
                </option>
              );
            })}
          </select>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sales Person</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.filter((sale) => {
              return selectedSalesPerson === '' ? sale : sale.sales_person.name.includes(selectedSalesPerson)
            }).map(sale => {
              return(
                <tr key={sale.id}>
                <td>{sale.sales_person.name}</td>
                <td>{sale.customer.name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </>
    );

}

export default SalesPersonRecord;
