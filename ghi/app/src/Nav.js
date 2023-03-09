import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="btn btn-outline-light" aria-current="page" to="/">Home</NavLink>
            </li>
            <div className="nav-item dropdown">
              <NavLink className="btn btn-light dropdown-toggle bg-success" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Auto Sales
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><NavLink className="dropdown-item" to="/customer">New customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salesperson/new">New Salesperson</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salesperson">Salesperson records</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales">List of cars sold</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sales/new">New Sale</NavLink></li>
              </ul>
            </div>
            <div className="nav-item dropdown">
              <NavLink className="btn btn-light dropdown-toggle bg-success" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><NavLink className="dropdown-item" to="/manufacturers/new">Create a Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/new">Create an Automobile</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles">List of Automobiles</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models/new">Create a Vehicle Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models">List of Vehicle Models</NavLink></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;
