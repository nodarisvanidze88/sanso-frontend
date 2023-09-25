import CustomerTable from "./components/customers/CustomerTable"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarElements from "./components/NavBar/NavBarComponents";
// import './App.css'
import CreateCustomersTable from '../src/ComponentsNew/Customers/CustomersListPage'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <NavbarElements/>
        <Routes>
          <Route path="/" element={<CustomerTable />} />
          <Route path="/new" element={<CreateCustomersTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
