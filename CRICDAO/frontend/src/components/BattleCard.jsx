import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import logo_India from "../assets/India.png";
import logo_Australia from "../assets/Australia_Logo.jpg";

export default function () {
  return (
    <div className={styles.battle_card}>
        <h1>Match 1</h1>
      <span className={styles.battle}>
        <div className={styles.team_logo}>
          <Image src={logo_India} />
        </div>
        <span className={styles.vs}>vs</span>
        <div className={styles.team_logo}>
          <Image src={logo_Australia} />
        </div>
      </span>
      <button className={styles.play_btn}>Predict</button>
    </div>
  );
}
