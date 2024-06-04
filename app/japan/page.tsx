import CardPage from "../components/CardSights";
import styles from "../styles/page.module.css";

const cardsJapan = [
  { src: '/japan-img/1.jpg', alt: 'Fushimi-inari Temple', description: 'Fushimi-inari Temple (Kyoto)' },
  { src: '/japan-img/2.jpg', alt: 'Fushimi-inari Temple', description: 'Fushimi-inari Temple (Kyoto)' },
  { src: '/japan-img/3.jpg', alt: 'Fushimi-inari Temple', description: 'Fushimi-inari Temple (Kyoto)' },
  { src: '/japan-img/4.jpg', alt: 'Fushimi-inari Temple', description: 'Fushimi-inari Temple (Kyoto)' },
  { src: '/japan-img/5.jpg', alt: 'Fushimi-inari Temple', description: 'Fushimi-inari Temple (Kyoto)' },
  { src: '/japan-img/6.jpg', alt: 'Fushimi-inari Temple', description: 'Fushimi-inari Temple (Kyoto)' },
]

export default function Japan() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <CardPage cards={cardsJapan} />
      </ul>
    </div>
  );
}
