import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavBar} from '../../sansofrontend/src/ComponentsNew/NavBar/NavBar'
import CreateCustomersTable from './ComponentsNew/Customers/CustomersListTable'
import './App.css'
function App() {
  return (
    <div className="container">
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/" element={<CreateCustomersTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
