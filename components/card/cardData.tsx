export type CardType = {
  image: string;
  title: string;
  url: string;
};

export const cardData: CardType[] = [
  {
    image: "/cardPicture/topPage.png",
    title: "Portfolio",
    url: "#",
  },
  {
    image: "/cardPicture/prossell.png",
    title: "Corporate Page",
    url: "https://prossell.jp/",
  },
  {
    image: "/cardPicture/entech.png",
    title: "entech(Google cloud hackathon)",
    url: "https://entech.vercel.app/",
  },
];
