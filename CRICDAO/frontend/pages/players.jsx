import React, { useState, useEffect } from "react";
import PlayerCard from "../src/components/PlayerCard";
import Player from "../src/components/PlayerCard";
import styles from "../styles/Players.module.css";
import { fetchNFTs } from "../src/components/fetchNFTs";

/// we have to render all the NFTs in our collection
//. we will update this to only those NFTs which are purchased
// NFT market place contract is to be created that manages all the features of this
export default function players() {
  const [NFTs, setNFTs] = useState([]);

  const RenderNFTs = () => {};

  // useEffect(async () => {
  //   const nfts = await fetchNFTs();
  //   setNFTs(nfts);
  // });

  return (
    <div className={styles.container}>
      <h1>Player NFTs</h1>
      <div className={styles.main}>
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
  );
}
