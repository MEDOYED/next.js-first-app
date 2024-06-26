import CardSights from "@/app/components/CardSights";
import styles from "@/app/styles/page.module.css";

const cardsJapan = [
  { src: '/japan-img/1.jpg', alt: 'Fushimi-inari Temple', description: 'Fushimi-inari Temple (Kyoto)' },
  { src: '/japan-img/2.jpg', alt: 'Mount Fuji', description: 'Mount Fuji (Honshu Island)' },
  { src: '/japan-img/3.jpg', alt: 'Sky Tree', description: 'Sky Tree (Tokyo)' },
  { src: '/japan-img/4.jpg', alt: 'Sagano Bamboo Forest', description: 'Sagano Bamboo Forest (Kyoto)' },
  { src: '/japan-img/5.jpg', alt: 'Jigokudani Snow Monkey', description: 'Jigokudani Snow Monkey (Nagano)' },
  { src: '/japan-img/6.jpg', alt: 'Itsukushima-jinja Temple', description: 'Itsukushima-jinja Temple (Miyajima Island)' },
]

export default function japan() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <CardSights cards={cardsJapan} />
      </ul>
    </div>
  );
}