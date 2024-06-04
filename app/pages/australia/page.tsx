import styles from "@/app/styles/page.module.css"
import CardSights from "@/app/components/CardSights";

const cardAustralia = [
  {src: "/australia-img/1.avif", alt: "Queensland", description: "Queensland"},
  {src: "/australia-img/2.avif", alt: "Western Australia", description: "Western Australia"},
  {src: "/australia-img/3.avif", alt: "Victoria", description: "Victoria"},
  {src: "/australia-img/4.avif", alt: "Tasmania", description: "Tasmania"},
  {src: "/australia-img/5.avif", alt: "Northern Territory", description: "Northern Territory"},
  {src: "/australia-img/6.avif", alt: "South Australia", description: "South Australia"},
  {src: "/australia-img/7.avif", alt: "New South Wales", description: "New South Wales"},
  {src: "/australia-img/8.avif", alt: "Sydney Opera House", description: "Sydney Opera House"},
  {src: "/australia-img/9.avif", alt: "Great Barrier Reef", description: "Great Barrier Reef"},
]

export default function australia() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <CardSights cards={cardAustralia} />
      </ul>
    </div>
  )
}