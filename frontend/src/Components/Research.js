/* global Waev */

import React, { Component, useContext, useState } from 'react';
import '../App.css';
import { Form, Button } from 'react-bootstrap';


import {ethers, Contracts, Signer} from 'ethers';
import ABI from '../contractArtifact/Research.json';


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



  //render() {
    return (
      <div className="doctor-form-container">
      <h2>Pharmacy's Window</h2>
      <Form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Form.Control
    type="text"
    placeholder="Search..."
    value={searchText}
    onChange={handleInputChange}
    style={{ maxWidth: "600px", marginRight: "10px" }}
  />
  <Button type="submit" onClick={handleFormSubmit}>Search</Button>
</Form>

        <Button onClick={deployResearchContract}>
        opt for data collection
        </Button>

      
      <Form id="testFinal" className="your-component">
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
      </Form>
    </div>
    );
  // }
}

export default ResearchComponent;
