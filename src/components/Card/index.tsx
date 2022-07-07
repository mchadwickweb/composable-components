interface CardProps {
  title: string;
}

export default function Card({ title }) {
  return (
    <article>
      <h3>{title}</h3>
    </article>
  );
}
