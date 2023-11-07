export type ContestType = {
  name: string;
  date: string;
  prize: string;
  link?: string;
  contestType: "hackathon" | "bizCon";
};

export const ContestData: ContestType[] = [
  {
    name: "開志専門職大学ビジネスプランコンテスト",
    date: "2022/6/25",
    prize: "グランプリ",
    link: "https://kaishi-pu.ac.jp/biz-contest/2022archive/",
    contestType: "bizCon",
  },
  {
    name: "ブロックチェーン領域のインキュベーションプログラム",
    date: "2022/10/23",
    prize: "DeNA特別賞",
    contestType: "hackathon",
  },
  {
    name: "ETH SanFrancisco",
    date: "2022/11/4 - 6",
    prize: "WorldCoin様からPrizeの受賞",
    link: "https://ethglobal.com/showcase/kotoverse-h2g1da",
    contestType: "hackathon",
  },
  {
    name: "Google Cloud Challenge2022",
    date: "2022/12/16 - 2023/1/28",
    prize: "ギークで賞",
    contestType: "hackathon",
  },
];
