import styles from "@/app/styles/page.module.css";
import CardSights from "@/app/components/CardSights";

const CardsCanada = [
  { src: "/canada-img/1.avif", alt: "Niagara Falls", description: "Niagara Falls" },
  { src: "/canada-img/2.avif", alt: "Jasper National Park", description: "Jasper National Park" },
  { src: "/canada-img/3.avif", alt: "Banff National Park", description: "Banff National Park" },
  { src: "/canada-img/4.avif", alt: "Vancouver", description: "Vancouver" },
  { src: "/canada-img/5.avif", alt: "Montreal", description: "Montreal" },
];

export default function canada() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <CardSights cards={CardsCanada} />
      </ul>
    </div>
  );
}