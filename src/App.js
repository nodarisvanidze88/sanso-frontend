import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './ComponentsNew/NavBar/NavBar'
import CreateCustomersTable from './ComponentsNew/Customers/CustomersListTable'
import CreateAlmaSystemModelsTable from "./ComponentsNew/AlmaSystemModels/AlmaSystemModelsTable";
import './App.css'
function App() {
  return (
    <div className="container1">
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/customers" element={<CreateCustomersTable />} />
          <Route path="/almasystemsmodels" element={<CreateAlmaSystemModelsTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
