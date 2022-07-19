import React from "react";
import styles from "../../styles/Battle.module.css";

export default function BattleCard() {
  return (
    <div className={styles.battle_card}>
      <h2>Predict Match</h2>
      <div className={styles.match}>
        <h1>India</h1>
        <h1>vs</h1>
        <h1>England</h1>
      </div>

      {/* <hr className={styles.hr} /> */}

      <div className={styles.predict_match}>
        <div>
          <button>Play</button>
        </div>
      </div>
    </div>
  );
}
