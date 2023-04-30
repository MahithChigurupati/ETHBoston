/* global Waev */
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorComponent from './Components/DoctorWindow';
import PharmacyComponent from './Components/PharmacyWindow';
import InsuranceComponent from './Components/InsuranceWindow';
import Header from './Components/Header';
import { MyProvider } from './Components/Context';
import ResearchComponent from './Components/Research';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Header></Header>
        <Router>
        <Routes>
              <Route exact path="/doctor" element={<DoctorComponent></DoctorComponent>} />
              <Route exact path="/insurance" element={<InsuranceComponent></InsuranceComponent>} />
              <Route exact path="/pharmacy" element={<PharmacyComponent></PharmacyComponent>} />
              <Route exact path="/research" element={<ResearchComponent></ResearchComponent>} />
        </Routes>
        </Router>
      </MyProvider>
    </div>
  );
}

export default App;


