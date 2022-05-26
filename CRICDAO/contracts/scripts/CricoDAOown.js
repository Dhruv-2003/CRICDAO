const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
//   // URL from where we can extract the metadata for a LW3Punks
//   const metadataURL = "ipfs://YOUR-METADATA-CID/";

//   // Address of the whitelist contract that you deployed in the previous module
//   const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const CricDAOown = await ethers.getContractFactory("CricDAOown");

  // deploy the contract
  const deployedCricDAOownContract = await CricDAOown.deploy();

  await deployedCricDAOownContract.deployed();

  // print the address of the deployed contract
  console.log("CricDAOown Contract Address:", deployedCricDAOownContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
