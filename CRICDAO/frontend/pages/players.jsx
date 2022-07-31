import React from "react";
import PlayerCard from "../src/components/PlayerCard";
import Player from "../src/components/PlayerCard";
import styles from "../styles/Players.module.css";

export default function players() {
  return (
    <div className={styles.container}>
        <h1>Player NFTs</h1>
        <div className={styles.main}>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
    </div>
  );
}
