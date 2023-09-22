import CustomerTable from "./components/customers/CustomerTable"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarElements from "./components/NavBar/NavBarComponents";
import './App.css'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <NavbarElements/>
        <Routes>
          <Route path="/" element={<CustomerTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
