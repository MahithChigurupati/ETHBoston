/* global Waev */

import React, { Component, useContext, useState } from 'react';
import '../App.css';
import { Form, Button } from 'react-bootstrap';
import CardResearch from '../Cards/cardResearch';
import {ethers, Contracts, Signer} from 'ethers';
import ABI from '../contractArtifact/Research.json';
import heart from '../images/heart_disease.jpeg';
import diabetes from '../images/diabetes.jpeg';
import lung from '../images/lung.jpeg';

function ResearchComponent() {

    const contractAbi = ABI.abi;

    const contractByteCode = ABI.bytecode;

    const[contractAddress, setContractAddress] = useState(null);

    // const [walletAddress, setWalletAddress] = useContext("0xb1c8Ad5D705A20e68B83001554B8E135426CD44A");




    const deployResearchContract = async() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer  = provider.getSigner();
        console.log(signer);

        const ResearchContractFactory = new ethers.ContractFactory(contractAbi, contractByteCode, signer);
        console.log(ResearchContractFactory);

        const ResearchContract =  await ResearchContractFactory.deploy();

        setContractAddress(ResearchContract.address);
        await ResearchContract.deployed();

        ResearchContract.mint();

        console.log("complete");

        console.log(ResearchContract.balanceOf('0xb1c8Ad5D705A20e68B83001554B8E135426CD44A'));
    }


  function handleSubmit() {
      alert('Data submitted!');
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

  function handleInputChange (event) {
    setSearchText(event.target.value);
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    console.log(`Search text: ${searchText}`);
    // perform search operation with searchText
  };

  var val2 = `Data Needed :-\n1. Age\n
  2. Gender\n
  3. Chest pain type\n
  4. Blood Pressure Level\n
  5. Cholestroll\n
  6. Fasting Blood Sugar:\n
   
  
  7. Thalassemia\n
  
  8. Heart Disease`;

  var val3 = `Data Needed :-\n1. Gender \n2. Age \n3. Hyper Tension \n4. Heart Disease \n5. Smoking History \n6. BMI \n7. HbA1c_level \n8. Blood Glucose Level \n9. Diabetes `


  var val1 = `Data Needed :-\n1. Gender\n
  2. Age \n
  3. Smoking\n
  4. Yellow fingers\n
  5. Anxiety\n
  6. Peer_pressure\n
  7. Chronic Disease\n
  8. Fatigue\n
  9. Allergy\n`
  
  const colors=[{"id": "1", "image":diabetes,"title":"Diabetes Prediction", "information":val3},
                
                {"id": "2", "image":heart, "title":" Heart Disease Prediction","information":val2},
                {"id": "3", "image":lung, "title":" Lung Cancer Prediction","information":val1}
                ]
 
    
    

  //render() {
    return (
      <div className="doctor-form-container">
      <h2>Volunteer for Research Study</h2>
      {/* <Form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Form.Control
    type="text"
    placeholder="Search..."
    value={searchText}
    onChange={handleInputChange}
    style={{ maxWidth: "600px", marginRight: "10px" }}
  />
  <Button type="submit" onClick={handleFormSubmit}>Search</Button>
</Form> */}
        
        <div>
            <h2 style={{textAlign: 'center' }}>Active Studies</h2>
            <div style={{ textAlign: 'center' }}>
            {colors.map((selectedColor) => (<><CardResearch title = {selectedColor.title} information = {selectedColor.information} key={selectedColor.id} image={selectedColor.image}> </CardResearch><Button onClick={deployResearchContract}>
                Opt for Data Collection
            </Button></>) )}
            </div>
            </div>

      {/* <Form id="testFinal" className="your-component">
        <div className='form-container'>
          <Form.Group>
            <Form.Label htmlFor="test1">Patient Name:</Form.Label>
            <Form.Control type="text" id="test1" name="test1" placeholder="Enter Patient Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="test2">Health ID:</Form.Label>
            <Form.Control type="text" id="test2" name="test2" placeholder="Enter Health ID" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="test3">Patient Age:</Form.Label>
            <Form.Control type="number" id="test3" name="test3" placeholder="Enter Patient Age" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="test4">Patient Email:</Form.Label>
            <Form.Control type="text" id="test4" name="test4" placeholder="Enter Patient Email" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="test5">Patient Phone Number:</Form.Label>
            <Form.Control type="text" id="test5" name="test5" placeholder="Enter Patient Phone Number" />
          </Form.Group>
        </div>
        <Button type="submit" onClick={handleSubmit} className='sbt-btn'>
          Submit
        </Button>
      </Form> */}
    </div>
    );
  // }
}

export default ResearchComponent;
