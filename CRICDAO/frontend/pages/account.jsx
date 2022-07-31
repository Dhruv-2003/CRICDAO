import React, { useState } from "react";
import styles from "../styles/Account.module.css";
import Image from "next/image";
import pfp from "../src/assets/avatar.png";

export default function account() {
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index);
    console.log(index);
  }

  return (
    <div className={styles.container}>
      {/* <h1>User Account</h1> */}
      <main className={styles.main}>
        <div className={styles.pfp}>
          <Image src={pfp} className={styles.pfp} />
        </div>

        <div className={styles.content}>
          <h1>Kushagra Sarathe</h1>
          <ul>
            <li>Address</li>
            <li>Balance</li>
            <li>Rewards Earned</li>
            <li>NFTs Owned</li>
            <li>Matches Played</li>
          </ul>
          <p></p>
        </div>
      </main>
      <div className={styles.stats_heading}>
        <h1>User Stats</h1>
      </div>
      {/* stats section */}
      <div className={styles.stats_section}>
        <div className={styles.tabs_section}>
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? `${styles.tabs} ${styles.active_tab}`
                : styles.tabs
            }
          >
            NFT Collection
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.tabs} ${styles.active_tab}`
                : styles.tabs
            }
            onClick={() => toggleTab(2)}
          >
            Match History
          </div>
          {/* <div
            className={
              toggleState === 3
                ? `${styles.tabs} ${styles.active_tab}`
                : styles.tabs
            }
            onClick={() => toggleTab(3)}
          >
            Tab3
          </div> */}
        </div>

        <div className={styles.content_tabs}>
          <div
            className={
              toggleState === 1
                ? `${styles.nft_stats} ${styles.active_content}`
                : styles.nft_stats
            }
          >
            <h1>Heading 1</h1>
            {/* <hr /> */}
            <p>Hey there this is content of tab1</p>
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.match_stats} ${styles.active_content}`
                : styles.match_stats
            }
          >
            <h1>Heading 2</h1>
            {/* <hr /> */}
            <p>This is another tab with differnt content</p>
          </div>

          {/* <div
            className={
              toggleState === 3
                ? `${styles.match_stats} ${styles.active_content}`
                : styles.match_stats
            }
          >
            <h1>Heading 3</h1>
            <p>This is just temporary tab :D</p>
          </div> */}

        </div>
      </div>
    </div>
  );
}
