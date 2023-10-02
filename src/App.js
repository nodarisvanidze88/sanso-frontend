import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './ComponentsNew/NavBar/NavBar'
import CreateCustomersTable from './ComponentsNew/Customers/CustomersListTable'
import CreateAlmaSystemModelsTable from "./ComponentsNew/AlmaSystemModels/AlmaSystemModelsTable";
import CreateHPModelsTable from "./ComponentsNew/HPModels/HPModelsTable";
import CreateTechnicalPersonTable from "./ComponentsNew/TechnicalPersons/TechnicalPersonTable";
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
          <Route path="/techpersons" element={<CreateTechnicalPersonTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
