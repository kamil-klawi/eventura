import Image from "next/image";
import { CardProps } from "@/types/component/card";
import { Clock, Pin } from "lucide-react";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.page}>
      <div>
        <h1 className={styles.page__title}>Events</h1>
        <p className={styles.page__description}>
          Our platform gathers current and upcoming events from various fields –
          culture, technology, entertainment, and more. Browse, discover, and
          plan your participation in advance. With clear event cards, you can
          quickly see what's happening, where, and when.
        </p>
        <hr className={styles.page__divider} />
        <div>
          <h2 className={styles.page__subtitle}>Recent events:</h2>
          <Card
            id={1}
            category={"tech"}
            title={"Tech Future Expo 2025"}
            description={
              "Join industry leaders, startups, and innovators at one of the largest technology conferences in Central Europe. Discover the latest in AI, Web3, and sustainable tech."
            }
            image={
              "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg"
            }
            location={"Warsaw, Poland"}
            datetime={"26 July 2025"}
          />
        </div>
      </div>
    </main>
  );
}

const Card = ({
  id,
  category,
  title,
  description,
  image,
  location,
  datetime,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`events/${category}/${id}`}>
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className={styles.card__image}
        />
        <div className={styles.card__content}>
          <p className={styles.content__info}>
            <Pin className={styles.info__icon} />
            {location}
          </p>
          <p className={styles.content__info}>
            <Clock className={styles.info__icon} />
            {datetime}
          </p>
        </div>
        <hr className={styles.card__divider} />
        <div className={styles.card__category}>{category}</div>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{description}</p>
      </Link>
    </div>
  );
};
