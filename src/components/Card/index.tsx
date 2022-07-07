/* eslint-disable @next/next/no-img-element */
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
    <article>
      <figure>
        <img src={media.src} alt={media.alt} />
      </figure>
      <h3>{title}</h3>
      {standfirst ? <p>{standfirst}</p> : null}
      <a href={link.url} tabIndex={0} aria-hidden="true">
        {title}
      </a>
    </article>
  );
}
