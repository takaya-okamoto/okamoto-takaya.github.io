import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Abstract } from "../components/mainArea/abstract";
import { WhatCanIDo } from "../components/mainArea/whatCanIDo";
import { SelfIntroduction } from "../components/mainArea/selfIntroduction";
import { Connection } from "../components/mainArea/connection";
import { WorksComponent } from "../components/mainArea/worksComponent";
import { ResumeComponent } from "../components/resumeArea/resumeComponent";
import { ContestComponent } from "../components/mainArea/contestComponent";

const Home: NextPage = () => {
  return (
    <Box p="0 8%" mt={["30%", "10%", "5%"]}>
      <Abstract />
      <WhatCanIDo />
      <SelfIntroduction />
      <WorksComponent />
      <ContestComponent />
      <ResumeComponent />
      <Connection isDissable={false} />
    </Box>
  );
};

export default Home;
