import React from "react";
import styles from "../../styles/PlayerCard.module.css";
import Image from "next/image";
import sample from "../assets/sample.png";

export default function PlayerCard() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image src={sample} />
          </div>
          <hr className={styles.hr} />
          <h1>Player Name</h1>
          <h2>Player Type</h2>
          <button className={styles.mint_btn}>Mint</button>
        </div>
      </main>
    </div>
  );
}
