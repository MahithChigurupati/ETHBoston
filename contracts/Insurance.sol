// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.17;

contract Insurance is Ownable{

    address provider;
    mapping(uint256 => address) holders;
    mapping(address => uint256) quote;
    //mapping(uint256 => mapping(string => string)) usageHistory;
    uint256 policy_id;

    constructor(){
        provider = msg.sender;
    }

    function buy() payable public{
        require(msg.value != quote[msg.sender], "Insufficient ETH sent");

        holders[policy_id] = msg.sender;
    }

    function generateQuote(uint256 age) public view onlyOwner returns(uint256 quotation){
        if(age<18){
            return 100;
        }else if(age > 18 && age < 25){
            return 150;
        }else if(age > 25 && age < 35){
            return 200;
        }else if(age > 35 && age < 55){
            return 300;
        }else if(age > 55 && age < 70){
            return 500;
        }else if(age > 70){
            return 500;
        }
    }

    function hospitalised(uint256 policy, string memory waveID) public {
        //usageHistory[policy] = waveID;
    }

    // @dev: use (uint256 policy) in @params 1
    function renewal( uint256 age) public view returns(uint256){
        uint256 price = generateQuote(age);

        uint visits = 2; // test variable

        return price + (price * (visits/100));

    }

}