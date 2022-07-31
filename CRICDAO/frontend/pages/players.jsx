import React from "react";
import PlayerCard from "../src/components/PlayerCard";
import Player from "../src/components/PlayerCard";
import styles from "../styles/Players.module.css";

export default function players() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Players</h1>
        <div className={styles.players}>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          {/* <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard /> */}
        </div>
      </main>
    </div>
  );
}
