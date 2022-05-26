const { ethers } = require("hardhat");

async function main() {
  // Now deploy the CricDAO contract

  CricDAOown_CONTRACT_ADDRESS
  const CricDAO = await ethers.getContractFactory("CricDAO");
  const cricDAO = await CricDAO.deploy(
    CricDAOown_CONTRACT_ADDRESS,
    {
      // This assumes your account has at least 1 ETH in it's account
      // Change this value as you want
      value: ethers.utils.parseEther("1"),
    }
  );
  await cricDAO.deployed();

  console.log("CricDAO deployed to: ", cricDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });