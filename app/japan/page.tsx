// import Link from "next/link"
// import Image from "next/image"
import styles from "./page.module.css";

export default function Japan() {
  return (
    <div className={styles.container}>
      <ul className={styles.japan__list}>
        
        <li className={styles.japan__item}>
          <img className={styles.japan__img} src="/japan-img/1.jpg" alt="Fushimi-inari Temple" />
          <p className={styles.japan__description}>Fushimi-inari Temple (Kyoto)</p>
        </li>
        <li className={styles.japan__item}>
          <img className={styles.japan__img} src="/japan-img/2.jpg" alt="Mount Fuji" />
          <p className={styles.japan__description}>Mount Fuji (Honshu Island)</p>
        </li>
        <li className={styles.japan__item}>
          <img className={styles.japan__img} src="/japan-img/3.jpg" alt="Sky Tree" />
          <p className={styles.japan__description}>Sky Tree (Tokyo)</p>
        </li>
        <li className={styles.japan__item}>
          <img className={styles.japan__img} src="/japan-img/4.jpg" alt="Sagano Bamboo Forest" />
          <p className={styles.japan__description}>Sagano Bamboo Forest (Kyoto)</p>
        </li>
        <li className={styles.japan__item}>
          <img className={styles.japan__img} src="/japan-img/5.jpg" alt="" />
          <p className={styles.japan__description}>Jigokudani Snow Monkey (Nagano)</p>
        </li>
        <li className={styles.japan__item}>
          <img className={styles.japan__img} src="/japan-img/6.jpg" alt="" />
          <p className={styles.japan__description}>Itsukushima-jinja Temple (Miyajima Island)</p>
        </li>
      </ul>
    </div>
  );
}
