import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import ConnectWallet from '../components/ConnectWallet';

export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.main}>
       <ConnectWallet />
       Hello to the home page 

     </div>
    </div>
  )
}
