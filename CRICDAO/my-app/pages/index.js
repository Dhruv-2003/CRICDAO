import Head from "next/head";
import styles from "../styles/Home.module.css";
// import ConnectWallet from '../components/ConnectWallet';
import Whitelist from "../components/Whitelist";
import NFTMint from "../components/NFTMint";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
import {
  CricDAOWhitelist_CONTRACT_ADDRESS,
  CricDAOWhitelist_ABI,
} from "../constants/constants";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.container2}>
          <div className={styles.banner}>
            <div className={styles.bannertext}>
              <h1>Join</h1>
              <h2>community of cricket lovers.</h2>
              <p>
                This platform is a DAO , NFT and Gaming Space for cricket. You
                can become DAO member by purchasing a DAOownNFT . You can buy
                Player NFTs , trade and play games with them. Wait! there is
                more , you can also predict match result and win rewards , How
                cool is that ?
              </p>
            </div>

            <div className={styles.bannerimage}>
              <img
                src="/cricbanner.png"
                alt="Cricket Banner"
                className={styles.bannerimg}
              />
            </div>
          </div>
        </div>

        <div className={styles.section1}>
          <div>
            <h1>
              Get Early accsses to NFTs by getting Whitelisted.
              <Whitelist />
            </h1>
          </div>
        </div>

        {/* <div className={styles.section3}>
          <div>
            <h1>
              Mint your DAOownNFT and become a DAO member and join the community
              <NFTMint />
            </h1>
          </div>
        </div> */}

        <div className={styles.section2}>
          <h1>Our Roadmap</h1>
          <img alt="Roadmap" />
        </div>
      </div>
    </div>
  );
}
