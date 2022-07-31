import React from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import sample from "../assets/virat.png";

export default function () {
  return (
    <>
    <div className={styles.player_card}>
      <h1>Player Name</h1>
      {/* <Date></Date> */}
      <span className={styles.battle}>
        <div className={styles.player_img}>
        <Image src={sample} />
        </div>
      </span>
      <h2>Player Type</h2>
      <p>Lorem ipsum dolor sit perspiciatis ea rem eos itaque sapiente voluptatum? Cupiditate iure recusandae atque blanditiis labore exercitationem animi porro.</p>
      <button className={styles.play_btn}>Mint NFT</button>
    </div>
    </>
  );
}
