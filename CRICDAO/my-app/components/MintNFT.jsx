import React from "react";
import styles from "./MintNFT.module.css";
import gif from '../public/cricDAO.gif'
import Image from "next/image";

export default function MintNFT() {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <div className={styles.gif}>
        <Image src={gif} />
        </div>
        <div className={styles.content}>
          <div className={styles.center}>
            <h1>
              Mint NFT and <br /> Get Access to:
            </h1>
            <ul>
              <li>Whitelisting</li>
              <li>NFT marketplace</li>
              <li>Token</li>
              <li>Match prediction</li>
            </ul>
            <button className={styles.mintBtn}>Mint</button>
          </div>
        </div>
      </div>
    </div>
  );
}
