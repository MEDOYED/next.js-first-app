import style from "./styles/page-home.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <section className={style.section}>
          <img className={style.image} src= "/home/japan.jpg" alt="japan image" />
          <div>
            <h2 className={style.title}>JAPAN</h2>
            <p className={style.text}>Japan, a land of ancient traditions and modern marvels. From the towering skyscrapers of Tokyo to the serene temples of Kyoto, this island nation captivates with its blend of old and new. Immerse yourself in the vibrant street culture of Harajuku, indulge in mouthwatering sushi, or take a peaceful stroll through cherry blossom-filled gardens. Japan's rich history, breathtaking landscapes, and warm hospitality make it a must-visit destination for any traveler seeking a unique and unforgettable experience.</p>
          </div>
        </section>
        <section className={style.section}>
          <img className={style.image} src="/home/brazil.jpg" alt="brazil image" />
          <div>
            <h2 className={style.title}>BRAZIL</h2>
            <p className={style.text}>Brazil, the largest country in South America, captivates with its vibrant culture, breathtaking landscapes, and passionate people. From the iconic Amazon rainforest to the stunning beaches of Rio de Janeiro, Brazil offers a diverse range of natural wonders. Its rich history and diverse heritage are reflected in the colorful festivals, samba rhythms, and mouthwatering cuisine. Whether exploring bustling cities like São Paulo or immersing in the tranquility of the Pantanal wetlands, Brazil is a destination that never fails to leave a lasting impression.</p>
          </div>
        </section>
        <section className={style.section}>
          <img className={style.image} src="/home/canada.jpg" alt="canada image" />
          <div className={style.text__inner}>
            <h2 className={style.title}>CANADA</h2>
            <p className={style.text}>Canada, the second-largest country in the world, is known for its breathtaking natural landscapes. From the majestic Rocky Mountains to the stunning Niagara Falls, Canada is a haven for outdoor enthusiasts. Its diverse culture and friendly people make it a welcoming destination for travelers. With vibrant cities like Toronto, Vancouver, and Montreal, Canada offers a blend of urban charm and natural beauty. Whether you're exploring Banff National Park or indulging in poutine, Canada offers a unique and unforgettable experience..</p>
          </div>
        </section>
        <section className={style.section}>
          <img className={style.image} src="/home/australia.avif" alt="australia image" />
          <div>
            <h2 className={style.title}>AUSTRALIA</h2>
            <p className={style.text}>Australia, the land down under, is a vast and diverse country filled with breathtaking landscapes and unique wildlife. From the iconic Great Barrier Reef to the stunning Outback, Australia offers an adventure for every traveler. With vibrant cities like Sydney and Melbourne, rich indigenous culture, and a laid-back lifestyle, Australia is a destination that captures the hearts of all who visit. Whether you're exploring the bustling urban streets or immersing yourself in the natural wonders, Australia is a truly unforgettable experience.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
