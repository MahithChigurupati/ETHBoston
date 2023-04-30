//SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Research is ERC20("Research Token","RT") {

    address public owner ;

    constructor() payable{
          owner = msg.sender;

    }

    function mint() public {

        _mint(msg.sender, 10);
    }



}