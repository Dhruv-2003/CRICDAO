import React from 'react'
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a
          href="https://twitter.com/dhruv_eth"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/twitter-logo.svg" alt="Twitter logo" width={30} height={35} />
          Made by @dhruv_eth with ❤️
        </a>
      </footer>
  )
}

export default Footer