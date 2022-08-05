const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const MatchContract = "0xfDA0991fB004C2AA5B522317755B1D2F8384054B";

  const CricGame = await ethers.getContractFactory("CricGame");
  // deploy the contract
  const deployedGameContract = await CricGame.deploy(MatchContract);

  // print the address of the deployed contract
  console.log("Game Contract Address:", deployedGameContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
