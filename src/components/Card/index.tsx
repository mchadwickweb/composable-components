/* eslint-disable @next/next/no-img-element */
import styles from "./card.module.css";

interface CardProps {
  title: string;
  standfirst?: string;
  media: {
    src: string;
    alt: string;
  };
  link: {
    url: string;
  };
}

export default function Card({ title, standfirst, media, link }: CardProps) {
  return (
    <article className={styles.card}>
      <figure>
        <img src={media.src} alt={media.alt} />
      </figure>
      <div className={styles.content}>
        <header className={styles.header}>
          <h3>{title}</h3>
          {standfirst ? <p>{standfirst}</p> : null}
        </header>
        <footer className={styles.footer}>
          <a href={link.url} tabIndex={0} aria-hidden="true">
            {title}
          </a>
        </footer>
      </div>
    </article>
  );
}
