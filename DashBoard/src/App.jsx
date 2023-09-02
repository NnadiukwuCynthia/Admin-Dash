
// import {useState} from 'react'
import "./index.css"
import TopBarIcons from "./components/TopBarIcons";
import { Routes, Route } from "react-router-dom";

import SideBar from "./global/SideBar";
import Dashboard from './pages/dashboard' 
import EmployeeConfiguration from './pages/EmployeeConfiguration';
import Expenses from './pages/expenses';
import Facility from './pages/facility';
import IncidentTrack from './pages/incidentTrack';
import Inventory from './pages/inventory';
import SiteConfig from './pages/siteConfig';
import SiteInspection from './pages/siteInspection';

function App() {
  // const [darkMode, setDarkmode] = useState(true)
  return (
    <>
    <main className='Flex'>
      <SideBar></SideBar>
        <div className="TopBar">
          <div className="TopBar-Header">
            <TopBarIcons/>
          </div>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/Employeeconfiguration' element={<EmployeeConfiguration/>}/>
          <Route path='/expenses' element={<Expenses/>}/>
          <Route path='/facility' element={<Facility/>}/>
          <Route path='/incidentTrack' element={<IncidentTrack/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='/siteConfig' element={<SiteConfig/>}/>
          <Route path='/siteInspection' element={<SiteInspection/>}/>
          <Route path="/" element={<Dashboard />}/>
        </Routes>
        </div>
    </main>
    </>
  )
}

export default App
