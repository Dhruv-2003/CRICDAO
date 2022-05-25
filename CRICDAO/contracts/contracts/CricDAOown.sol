// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CricDAO is ERC1155, Ownable {
    // _paused is used to pause the contract in case of an emergency
    bool public _paused;

    uint256 rate = 0.01 ether;
    uint256 supply = 10000;
    uint256 minted = 0;

    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract currently paused");
        _;
    }

    string baseTokenUri = "//ipfs";

    constructor() ERC1155(baseTokenUri) {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint() public payable {
        require(minted+1<=supply,"Exceeded maximum CricDAO NFT supply");
        require(msg.value >= rate,"Not Enough Ether");
        _mint(msg.sender, 1, 1, "");
        minted += 1 ;
    }

    /**
     * @dev setPaused makes the contract paused or unpaused
     */
    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    /**
     * @dev withdraw sends all the ether in the contract
     * to the owner of the contract
     */
    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
}
