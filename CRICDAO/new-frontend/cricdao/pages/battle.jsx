import React from 'react'
import BattleCard from '../src/components/BattleCard'
import styles from '../styles/Battle.module.css'

export default function battle() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <BattleCard />
        <BattleCard />
      </main>
    </div>
  )
}
