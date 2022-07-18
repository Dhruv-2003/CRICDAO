import React, { useEffect, useState } from "react";
import { useContract, useSigner, useProvider, useAccount } from "wagmi";
import {
  CricDAOOWN_CONTRACT_ADDRESS,
  CricDAOOWN_ABI,
} from "../../constants/constants";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const MintNFT = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [daoUser, setDaoUser] = useState(false);
  const { data: signer } = useSigner();
  const provider = useProvider();

  const contract = useContract({
    addressOrName: CricDAOOWN_CONTRACT_ADDRESS,
    contractInterface: CricDAOOWN_ABI,
    signerOrProvider: signer || provider,
  });

  const checkDaoUser = async () => {
    try {
      console.log("Checking if DAO user ...");
      const check = await contract.balanceOf(signer, 0);
      if (check) {
        console.log("Dao user");
        setDaoUser(true);
      } else {
        setDaoUser(false);
        console.log("Not a DAO user");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const mintNFT = async () => {
    try {
      console.log("Minting the NFT ..");
      const mint = await contract.mint({ value: utils.parseEther("0.01") });
      await mint.wait();
      console.log("NFT minted");
      console.log("The transaction hash is : ", mint.hash);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const { isConnected } = useAccount();
    if (!isConnected) {
      setLoading(true);
      checkDaoUser();
      setWalletConnected(true);
      setLoading(false);
    } else {
      setWalletConnected(false);
    }
  }, []);

  const renderButton = () => {
    if (isConnected) {
      if (daoUser) {
        return (
          <div className={styles.description}>
            Thanks for joining the DAO ! Stay tuned for more updates
          </div>
        );
      } else if (loading) {
        return <button className={styles.whitelist_btn}>Loading...</button>;
      } else {
        return (
          <>
            <button onClick={mintNFT} className={styles.whitelist_btn}>
              Mint NFT
            </button>
          </>
        );
      }
    } else {
      return (
        <button className={styles.whitelist_btn}>
          <ConnectButton />
        </button>
      );
    }
  };

  return <div>{renderButton()}</div>;
};

export default MintNFT;
