import React from 'react';
import styles from '../styles/card.module.css' ;

export const Card = ({ image, name, position, price, address ,description  }) => {
  return (
    <div>
        <a href="" class={styles.card}>
          <img src={image} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <div class="card__header-text">
                <h2 className={styles.card__thumb}>{price} matic</h2>
                <h3 className={styles.card__title}>{name}</h3>
                <span class="card__status">{position}</span>
              </div>
            </div>
            <p class="card__description">{description ? description.slice(0, 200) : "No Description"}</p>
          </div>
        </a>
    </div>
  )
}
