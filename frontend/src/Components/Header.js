import React, { useState, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Button, Modal } from 'react-bootstrap';
import Web3 from 'web3';
import InsuranceComponent from './InsuranceWindow';
import { MyContext } from './Context';

const Header = () => {

  // constructor = (props) => {
  //   super(props);
  //   this.state = {
  //     walletAddress: ""
  //   };
  // }

  const [walletAddress, setWalletAddress] = useContext(MyContext);
  const [showModal, setShowModal] = useState(false);
  const curstate = false;

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        console.log("I'm here")
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        setWalletAddress(accounts[0]);
        console.log(walletAddress)
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask to connect your wallet.');
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">BlockMed</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/doctor">Doctor</Nav.Link>
      <Nav.Link href="/insurance">Insurance</Nav.Link>
      <Nav.Link href="/pharmacy">Pharmacy</Nav.Link>
      <Nav.Link href="/research">Research</Nav.Link>
    </Nav>
    <Button
      variant="outline-primary"
      onClick={() => setShowModal(true)}
      style={{ marginLeft: 'auto' }}
    >
      Connect Wallet
    </Button>
  </Navbar.Collapse>
</Navbar>




      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary" onClick={connectWallet}>
            Connect with MetaMask
          </Button>
          {walletAddress && (
            <p>
              Wallet Address: <strong>{walletAddress}</strong>
              {curstate && <InsuranceComponent state = {{walletAddr: walletAddress}} ></InsuranceComponent>}
            </p>
            
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
