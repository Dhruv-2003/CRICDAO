import React from "react";
import styles from "../styles/Home.module.css";
import image from "../public/discordserver.png";
import Image from "next/image";
import Link from "next/link";

export default function discord() {
  return (
    <div className={styles.container}>
      <main className={styles.discord}>
        <h1>Join Discord and make new friends</h1>
        <Link href={'https://discord.gg/Cta64qFj57'}>
            <div className={styles.discord_link}>Discord</div>
        </Link>
        <div className={styles.discord_img}>
          <Image src={image} />
        </div>
      </main>
    </div>
  );
}
