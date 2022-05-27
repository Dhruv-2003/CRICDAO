const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmURR4kDrUKY7mhGPdg73eyPqG8obKdVipGpD6JPahoCi3/";

  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = "0x243a007a3A36c2ECc66c5a5e22FbFB0eE96F8180";

  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const CricDAONFT = await ethers.getContractFactory("CricDAONFT");

  // deploy the contract
  const deployedCricDAONFTContract = await CricDAONFT.deploy(metadataURL,whitelistContract);

  await deployedCricDAONFTContract.deployed();

  // print the address of the deployed contract
  console.log("CricDAONFT Contract Address:", deployedCricDAONFTContract.address);

  
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
