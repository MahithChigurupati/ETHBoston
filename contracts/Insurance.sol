// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.7;

contract Insurance is Ownable{

    address provider;
    mapping(uint256 => address) holders;
    mapping(string => uint256) quote;
    mapping(string => uint256) usageHistory;
    mapping(string => uint256) historyCount;
    uint256 policy_id = 100000;

    constructor(){
        provider = msg.sender;
    }

    function buy(string memory health_id) payable public{
        require(msg.value == quote[health_id], "Insufficient ETH sent");

        holders[policy_id++] = msg.sender;
    }

    function generateQuote(uint256 age, string memory healthID) public returns(uint256){

        uint256 check = checkHospitalised(healthID);
        uint256 quotePrice =  (check * 10) + getPrice(age);
        quote[healthID] = quotePrice;
        return quotePrice;

    }

    function getPrice(uint256 age) pure public returns(uint256){

        if(age<18){
            return 100;
        }else if(age > 18 && age < 25){
            return 150;
        }else if(age > 25 && age < 35){
            return 200;
        }else if(age > 35 && age < 55){
            return 300;
        }else if(age > 55 && age < 70){
            return 450;
        }else {
            return 500;
        }

    }

    function hospitalised(string memory id) public{
        usageHistory[id] += 1;
    }

    function checkHospitalised(string memory health_id) public view returns(uint256){
        return usageHistory[health_id];
    }

}