import React from 'react';
import {currentAccount} from '../components/ConnectWallet' ;
import styles from "../styles/Account.module.css";

const account = () => {
  return (
    <div>
      {/* card section */}
      <div className={styles.card}>
        <div className={styles.cardmain}>
          <img src='/avatar.png' className={styles.cardimg} />
          <div className={styles.account}>
            Account:{currentAccount}
          </div>
          <div className={styles.account}>
            Balance: {}
          </div>
          <div className={styles.account}>
            NFT Players Owned: {}
          </div>
        </div>
      </div>

      {/* NFTs Section */}
      <div className={styles.nfts}>

      </div>
    </div>
  )
}

export default account