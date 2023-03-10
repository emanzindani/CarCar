import { useEffect, useState } from 'react';

function VehicleModelList() {
    const [models, setModels] = useState([])

    const getData = async () => {
      const response = await fetch('http://localhost:8100/api/models/');

      if (response.ok) {
        const data = await response.json();
        setModels(data.models)
      }

    }

    useEffect(()=>{
      getData()
    }, [])

 return (

    <div>
      <h1>Vehicle Models</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Name</th>
            <th>Pic</th>

          </tr>
        </thead>
        <tbody>
          {models.map(model => {
            return (
              <tr key={model.id}>
                <td>{ model.manufacturer.name }</td>
                <td>{ model.name }</td>
                <td><img style={{ width: 200, height: 150 }} src={ model.picture_url }/></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

    );

}
export default VehicleModelList;
