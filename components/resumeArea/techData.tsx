import { FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiSolidity } from "react-icons/si";

export type techDatatype = {
  icon: JSX.Element;
  name: string;
  progress: number;
  learningPeriod: string;
  color: string;
  url: string;
};

export const techData: techDatatype[] = [
  {
    icon: <FaReact />,
    name: "React",
    progress: 60,
    learningPeriod: "7 MONTH",
    color: "#5ED2F3",
    url: "https://reactjs.org/",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
    progress: 55,
    learningPeriod: "7 MONTH",
    color: "#0076C6",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    progress: 40,
    learningPeriod: "7 MONTH",
    color: "#212121",
    url: "https://nextjs.org/",
  },
  {
    icon: <SiSolidity />,
    name: "Solidity",
    progress: 30,
    learningPeriod: "2 MONTH",
    color: "#363636",
    url: "https://docs.soliditylang.org/en/v0.8.16/",
  },
  {
    icon: <FaPython />,
    name: "Python",
    progress: 30,
    learningPeriod: "3MONTH",
    color: "#3772A4",
    url: "https://www.python.org/",
  },
];
