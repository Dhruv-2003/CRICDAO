import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ethers } from "../node_modules/ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const [network, setNetwork] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");

  return (
    <div className={styles.headercontainer}>
      <header>
        <div>
          <img
            alt="icon"
            src="/cricfinal2.jpg"
            width={100}
            height={100}
            className={styles.logo}
          />
        </div>
        <div className={styles.left}>
          <p className={styles.title}> CricDAO</p>
          <p className={styles.subtitle}>A DAO for Cricket lovers</p>
        </div>
        {/* Display a logo and wallet connection status*/}
        {/* <div className="right">
							<img alt="Network logo" className="logo" src={network.includes("Polygon") ? polygonLogo : ethLogo} />
							{currentAccount ? <p> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </p> : <p> Not connected </p>}
						</div> */}
        <div className={styles.center}>
          <ul>
            <li>
              <Link href="/">
                <div>Home </div>
              </Link>
            </li>
            <li>
              <Link href="/battle">
                <div>Battle </div>
              </Link>
            </li>
            <li>
              <Link href="/marketplace">
                <div>Marketplace </div>
              </Link>
            </li>
            <li>
              <Link href="/chatroom">
                <div> ChatRoom </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <Link href="/account">
            <ConnectButton chainStatus="name" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
