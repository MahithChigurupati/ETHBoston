/* global Waev */

import React, { useContext, createContext, useState } from 'react';
import '../App.css';
import { ethers, Contract, Signer } from 'ethers';
import { useLocation, useParams } from 'react-router-dom';
import Card from '../Cards/card';
import { Form, Button } from 'react-bootstrap';
import { MyContext } from './Context';
import ABI from '../contractArtifact/Insurance.json';

function InsuranceComponent() {

  const contractAbi = ABI.abi;
  const contractByteCode = ABI.bytecode;

  const [contractAddress, setContractAddress] = useState(null);

  const [walletAddress, setWalletAddress] = useContext(MyContext);

  const [contract, setContract] = useState();

  const [price, setPrice] = useState();

  const [policyDetails, setPolicyDetails] = useState();

  const [formData, setFormData] = useState({
    patientName: '',
    healthID: '',
    patientAge: ''
    // patientEmail: '',
    // patientPhNo: ''
  })

  const colors=[{"id": "1", "title":"Price in USD", "image":parseInt(price,10)},{"id": "2", "title":"Policy Number", "image":policyDetails}]

  // const location = useLocation();
  // var walletAddress = location.state.walletAddr;

  const deployAuctionContract = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log("Hello")
    console.log(signer);
    const dutchAuctionContractFactory = new ethers.ContractFactory(contractAbi, contractByteCode, signer);
    console.log(dutchAuctionContractFactory)
    const dutchAuctionContract = await dutchAuctionContractFactory.deploy();
    setContractAddress(dutchAuctionContract.address);
    await dutchAuctionContract.deployed();
    console.log(dutchAuctionContract);
    setContract(dutchAuctionContract);
    let currPrc =  await dutchAuctionContract.generateQuote(formData.patientAge, formData.healthID);
    
    //let currentPrice = ethers.utils.formatEther(currPrc);
   //console.log(currentPrice);
    console.log(contractAddress)
    console.log(parseInt(currPrc.value,10));
  }

  function handleFormChange(e) {
    e.preventDefault();
      console.log(walletAddress)
      const { name, value } = e.target;
      setFormData(values => ({
        ...values,
        [name] : value
      }));
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(walletAddress)
      alert('Data submitted!');
      deployAuctionContract();
  };

  const handleRecall = async (e) => {
    e.preventDefault();

    let finalPrc =  await contract.getPricing(formData.healthID);
    //let currentPrice = ethers.utils.formatEther(currPrc);
   //console.log(currentPrice);
    // console.log(contractAddress)
    setPrice(finalPrc);
    console.log(price);
  }

  const handleBuy = async (e) => {
    e.preventDefault();
    console.log(price);
    let finalPrc =  await contract.buy(formData.healthID);
    //let currentPrice = ethers.utils.formatEther(currPrc);
   //console.log(currentPrice);
    console.log(finalPrc);
  
  }

  const handlePolicyDet = async (e) => {
    e.preventDefault();

    let finalDet =  await contract.getPolicy();
    //let currentPrice = ethers.utils.formatEther(currPrc);
   //console.log(currentPrice);
    setPolicyDetails(parseInt(finalDet,10));
    console.log(policyDetails);
  
  }

  console.log(formData)

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
    console.log(searchText)
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    console.log(`Search text: ${searchText}`);
    // perform search operation with searchText
  };

  //render() {
    return (
      <div className="doctor-form-container">
      <h2>Insurance's Window</h2>
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


      
      <Form id="testFinal" className="your-component">
        <div className='form-container'>
          <Form.Group>
            <Form.Label htmlFor="test1">Patient Name:</Form.Label>
            <Form.Control type="text" id="test1" name="patientName" onChange= {handleFormChange} placeholder="Enter Patient Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="test2">Health ID:</Form.Label>
            <Form.Control type="text" id="test2" name="healthID" onChange= {handleFormChange} placeholder="Enter Health ID" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="test3">Patient Age:</Form.Label>
            <Form.Control type="number" id="test3" name="patientAge" onChange= {handleFormChange} placeholder="Enter Patient Age" />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label htmlFor="test4">Patient Email:</Form.Label>
            <Form.Control type="text" id="test4" name="test4" placeholder="Enter Patient Email" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="test5">Patient Phone Number:</Form.Label>
            <Form.Control type="text" id="test5" name="test5" placeholder="Enter Patient Phone Number" />
          </Form.Group> */}
        </div>
        <Button type="submit" onClick={handleSubmit} className='sbt-btn'>
          Submit
        </Button>
        <Button type="submit" onClick={handleRecall} className='sbt-btn'>
          Get Quote
        </Button>
        <Button type="submit" onClick={handleBuy} className='sbt-btn'>
          Buy
        </Button>
        <Button type="submit" onClick={handlePolicyDet} className='sbt-btn'>
          Get Policy Details
        </Button>
      </Form>
      {/* <h2 style={{textAlign: 'center' }}>Jobs</h2> */}
      <div style={{ textAlign: 'center' }}>
      {colors.map((selectedColor) => (<Card key={selectedColor.id} title = {selectedColor.title} text={selectedColor.image}></Card>))}
      </div>
    </div>
    );
  // }
}

export default InsuranceComponent;
