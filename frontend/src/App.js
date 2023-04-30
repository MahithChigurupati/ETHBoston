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

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Router>
    <Routes>
          <Route exact path="/doctor" element={<DoctorComponent></DoctorComponent>} />
          <Route exact path="/insurance" element={<InsuranceComponent></InsuranceComponent>} />
          <Route exact path="/pharmacy" element={<PharmacyComponent></PharmacyComponent>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;


