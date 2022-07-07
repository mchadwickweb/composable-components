import Card from "components/Card";

const CARD_DATA = {
  title: "PM on the brink as Sunak and Javid quit",
  standfirst:
    "Boris Johnson’s premiership is on the line after Rishi Sunak and Sajid Javid turned on the prime minister and resigned from cabinet. The chancellor and the health secretary resigned within ten minutes of each other in an apparently co-ordinated move that dealt a potentially fatal blow to the...",
  media: {
    src: "/media/article-1.jpg",
    alt: "Image of Boris Johnson with his Cabinet",
  },
  link: {
    url: "/article/the-article",
  },
};

export default function CardPage() {
  return (
    <>
      <h1>Card</h1>
      <hr />
      <Card
        title={CARD_DATA.title}
        standfirst={CARD_DATA.standfirst}
        media={CARD_DATA.media}
        link={CARD_DATA.link}
      />
    </>
  );
}
