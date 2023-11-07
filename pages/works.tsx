import { Text, Button, Box } from "@chakra-ui/react";
import { Connection } from "../components/mainArea/connection";
import { WorksComponent } from "../components/mainArea/worksComponent";
import { ContestComponent } from "../components/mainArea/contestComponent";

export default function Works(): JSX.Element {
  return (
    <Box p="0 10%" mt={["30%", "10%", "5%"]}>
      <WorksComponent />
      <ContestComponent />
      <Connection isDissable={false} />
    </Box>
  );
}
