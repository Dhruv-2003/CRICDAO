// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IWhitelist {
    function whitelistedAddresses(address) external view returns (bool);
}

contract CricDAOown is ERC1155, Ownable {
    // _paused is used to pause the contract in case of an emergency
    bool public _paused;

    string _baseTokenURI;
    IWhitelist whitelist;

    uint256 rate = 0.01 ether;
    uint256 supply = 10000;
    uint256 minted = 0;

    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract currently paused");
        _;
    }

    constructor(string memory baseURI, address whitelistAddress)
        ERC1155("CricDAO")
    {
        _baseTokenURI = baseURI;
        whitelist = IWhitelist(whitelistAddress);
    }

    /** to set new URI in case of any issues
     */
    function setURI(string memory newuri) public onlyOwner {
        _baseTokenURI = newuri;
    }

    /** @dev override the original uri function to give the same uri for all tokenIDs
     */
    function uri(uint256) public view override returns (string memory) {
        return _baseTokenURI;
    }

    /**@dev mint to mint the DAO NFT
     */
    function mint() public payable onlyWhenNotPaused {
        require(
            whitelist.whitelistedAddresses(msg.sender),
            "You are not whitelisted"
        );
        require(minted + 1 <= supply, "Exceeded maximum CricDAO NFT supply");
        require(msg.value >= rate, "Not Enough Ether");
        _mint(msg.sender, 0, 1, "");
        minted += 1;
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
    function withdraw(address payee) public onlyOwner {
        uint256 amount = address(this).balance;
        (bool sent, ) = payee.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}
}
