// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CricDAOown is ERC1155, Ownable {
    // _paused is used to pause the contract in case of an emergency
    bool public _paused;

    using Strings for uint256;

    string _baseTokenURI ;
    
    uint256 rate = 0.01 ether;
    uint256 supply = 10000;
    uint256 minted = 0;

    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract currently paused");
        _;
    }


    constructor(string memory baseURI) ERC1155(baseURI) {
        _baseTokenURI = baseURI;
    }

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
     * @dev _baseURI overides the Openzeppelin's ERC721 implementation which by default
     * returned an empty string for the baseURI
     */
    function _baseURI() internal view virtual returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @dev tokenURI overides the Openzeppelin's ERC721 implementation for tokenURI function
     * This function returns the URI from where we can extract the metadata for a given tokenId
     */
    function uri(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        // require(
        //     _exists(tokenId),
        //     "ERC1155Metadata: URI query for nonexistent token"
        // );

        string memory baseURI = _baseURI();
        // Here it checks if the length of the baseURI is greater than 0, if it is return the baseURI and attach
        // the tokenId and `.json` to it so that it knows the location of the metadata json file for a given
        // tokenId stored on IPFS
        // If baseURI is empty return an empty string
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
                : "";
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
