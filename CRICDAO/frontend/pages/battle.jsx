import React from "react";
import BattleCard from "../src/components/BattleCard";
import styles from "../styles/Battle.module.css";

export default function battle() {
  return (
    <>
      <div className={styles.container}>
        <h1>Ongoing Battles</h1>
        <div className={styles.main}>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
          <div className={styles.card}>
            <BattleCard />
          </div>
        </div>
      </div>
    </>
  );
}
