import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './ComponentsNew/NavBar/NavBar'
import CreateCustomersTable from './ComponentsNew/Customers/CustomersListTable'
import CreateAlmaSystemModelsTable from "./ComponentsNew/AlmaSystemModels/AlmaSystemModelsTable";
import CreateHPModelsTable from "./ComponentsNew/HPModels/HPModelsTable";
import './App.css'
function App() {
  return (
    <div className="container1">
      <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/customers" element={<CreateCustomersTable />} />
          <Route path="/almasystemsmodels" element={<CreateAlmaSystemModelsTable />} />
          <Route path="/hpmodels" element={<CreateHPModelsTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
