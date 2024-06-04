import React from 'react';
import styles from '../styles/page.module.css';
// import Japan from '../japan/page';

interface Card {
  src: string;
  alt: string;
  description: string;
}

interface CardPageProps {
  cards: Card[];
}

const CardPage: React.FC<CardPageProps> = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <li className={styles.item} key={index}>
          <img className={styles.img} src={card.src} alt={card.alt} />
          <p className={styles.description}>{card.description}</p>
        </li>
      ))}
    </div>
  );
};

export default CardPage;