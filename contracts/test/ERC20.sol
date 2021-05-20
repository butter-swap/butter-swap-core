pragma solidity =0.5.16;

import '../ButterERC20.sol';

contract ERC20 is ButterERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
