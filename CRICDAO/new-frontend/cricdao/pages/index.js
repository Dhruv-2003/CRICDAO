import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../src/assets/hero.svg";
import nft from "../src/assets/cricDAO.gif";
import roadmap from "../src/assets/roadmap.svg";
import image from "../src/assets/cric.webp";
import stumps from "../src/assets/stumps.svg";
import logo from "../src/assets/logo.svg";
import { useEffect, useRef, useState } from "react";

// import {
//   CricDAOWhitelist_CONTRACT_ADDRESS,
//   CricDAOWhitelist_ABI,
// } from "../constants/constants";
// import {
//   useContract,
//   useSigner,
//   useProvider,
//   useAccount,
//   useConnect,
// } from "wagmi";
import Whitelist from "../src/components/Whitelist";
import MintNFT from "../src/components/MintNFT";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <div className={styles.hero}> */}
        <Image src={hero} />
        {/* </div> */}
        <div className={styles.content}>
          <h1>Welcome to CricDAO</h1>
          <p>
            CricDAO lets you collect your favourite cricket players as NFT cards
            and participate in battles, where you can predict match moments and
            win rewards.
          </p>
          <p>
            You can also trade your player NFTs in the marketplace and buy new
            Player NFTs.
          </p>
        </div>
      </main>

      <div className={styles.whitelist}>
        <div className={styles.content}>
          <h1>Community for Cricket Lovers 🏏</h1>
          <p>
            CricDAO is a DAO & NFT based gaming platform for cricket lovers. You
            can become DAO member by purchasing a DAO NFT.
          </p>
          <p>You can buy Player NFTs , trade and play games with them.</p>
          <p>
            Wait! there is more , you can also predict match result and win
            rewards , How cool is that ?
          </p>

          {/* <button className={styles.whitelist_btn}>Join Whitelist</button> */}
          <Whitelist />
        </div>
        <div className={styles.stumps}>
          <Image src={stumps} />
        </div>
      </div>

      {/* mint section */}

      <div className={styles.nft_section}>
        <div className={styles.nft}>
          <Image className={styles.nft} src={nft} />
        </div>
        <div className={styles.content}>
          <h1>Mint NFT</h1>
          <p>Mint NFT and Get Access to:</p>

          <ul>
            <li>Whitelisting</li>
            <li>NFT Marketplace</li>
            <li>Battles</li>
            <li>Token</li>
            <li>And more future perks</li>
          </ul>
          <MintNFT />
          {/* <button className={styles.whitelist_btn}>Mint NFT</button> */}
        </div>
      </div>

      <div className={styles.roadmap_section}>
        <div className={styles.content}>
          {/* <h1>Roadmap</h1>
          <ul>
            <li>Whitelisting</li>
            <li>DAO NFT launch</li>
            <li>Match prediction</li>
            <li>Token launch</li>
            <li>NFT Utility game</li>
            <li>Buy Cricket match tickets online in form of cool NFTs</li>
            <li>
              Get players Onboard to the platform, they can be rewarded for
              their contribution
            </li>
          </ul> */}
          {/* <button className={styles.whitelist_btn}>Mint NFT</button> */}
        </div>
        <div className={styles.roadmap}>
          <Image className={styles.roadmap} src={roadmap} />
        </div>
      </div>
    </div>
  );
}
