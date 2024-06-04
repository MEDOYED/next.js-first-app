import styles from "@/app/styles/page.module.css";
import CardSights from "@/app/components/CardSights";

const cardsBrazil = [
  { src: '/brazil-img/1.avif', alt: 'Rio De Janeiro', description: 'Rio De Janeiro' },
  { src: '/brazil-img/2.avif', alt: 'Fortaleza', description: 'Fortaleza' },
  { src: '/brazil-img/3.avif', alt: 'Recife', description: 'Recife' },
  { src: '/brazil-img/4.avif', alt: 'Brasilia', description: 'Brasilia' },
  { src: '/brazil-img/5.avif', alt: 'Salvador', description: 'Salvador' },
  { src: '/brazil-img/6.avif', alt: 'Bonito', description: 'Bonito' },
  { src: '/brazil-img/7.avif', alt: 'Lencois National Park', description: 'Lencois National Park' },
  { src: '/brazil-img/8.avif', alt: 'Arraial Do Cabo', description: 'Arraial Do Cabo' },
]

export default function brazil() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <CardSights cards={cardsBrazil} />
      </ul>
    </div>
  )
}