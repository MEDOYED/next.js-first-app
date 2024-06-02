import React from 'react';

interface Card {
  src: string;
  alt: string;
  text: string;
}

interface CardPageProps {
  cards: Card[];
}

const CardPage: React.FC<CardPageProps> = ({ cards }) => {
  return (
    <div>
      {cards.map((cards, index) => (
        <div key={index}>
          <img src={cards.src} alt={cards.alt} />
          <p>{cards.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPage;