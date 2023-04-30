/* global Waev */

import React, { Component, useState } from 'react';
import './App.css';

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({patientName: '',
    healthID: '',
    patientDOB: '',
    patientEmail: '',
    patientPhNo: ''});
    document.getElementById('testFinal').reset();
    // alert('Data submitted!');
  };

  function componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://cdn-development.waev.com/waev.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new Waev('5c9cfbea-45ff-45a0-8afa-ae1960fad75d', 'FEA6FD19E0BB98EA0C052254B05B71FF', '#testFinal');
    };
  }
  const [searchText, setSearchText] = useState("");
  const [formData, setFormData] = useState({
    patientName: '',
    healthID: '',
    patientDOB: '',
    patientEmail: '',
    patientPhNo: ''
  });

  function handleInputChange (event) {
    setSearchText(event.target.value);
  };

  function updateInputValue(evt) {
    const { name, value } = evt.target;    
    setFormData(val => ({
      ...val,
      [name]: value
    }));
  }

  function handleFormSubmit (event) {
    event.preventDefault();
    console.log(`Search text: ${searchText}`);
    // perform search operation with searchText
  };

  //render() {
    return (
      <>
      <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={handleInputChange}
      />
      <button type="submit" onClick={handleFormSubmit}>Search</button>
    <form id="testFinal">
      <div className='form-container'>
        <label htmlFor="test1">Patient Name:</label>
        <input type="text" id="test1" name="patientName" onChange={updateInputValue} placeholder="Enter Patient Name" />
        <label htmlFor="test2">Health ID:</label>
        <input type="text" id="test2" name="healthID" onChange={updateInputValue} placeholder="Enter Patient Health ID" />
        <label htmlFor="test3">Patient D.O.B:</label>
        <input type="text" id="test3" name="patientDOB" onChange={updateInputValue} placeholder="Enter test 3 value" />
        <label htmlFor="test3">Patient Email:</label>
        <input type="text" id="test3" name="patientEmail" onChange={updateInputValue} placeholder="Enter test 3 value" />
        <label htmlFor="test3">Patient phone Number:</label>
        <input type="text" id="test3" name="patientPhNo" onChange={updateInputValue} placeholder="Enter test 3 value" />
        {/* <label htmlFor="test3">Patient D.O.B:</label>
        <input type="text" id="test3" name="test3" placeholder="Enter test 3 value" /> */}
      </div>
      <button type="submit" onClick={handleSubmit} className='sbt-btn'>
          Submit
      </button>
    </form>
    </>
    );
  // }
}

export default App;
