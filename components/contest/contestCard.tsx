import { Flex, Text } from "@chakra-ui/react";
import { ContestType } from "./contestData";

type PropsType = {
  contest: ContestType;
};

export const ContestCard = (props: PropsType): JSX.Element => {
  const contest = props.contest;

  return (
    <Flex direction={"column"} color="#58595b">
      <Text fontWeight={"bold"} fontSize={["1.3rem", "1.5rem", "1.5rem"]}>
        {contest.name}
      </Text>
      <Text fontWeight={"semibold"}>{contest.date}</Text>
      <Text
        fontWeight={"semibold"}
        fontSize={["1.2rem", "1.3rem", "1.3rem"]}
        color={"teal.400"}
      >
        {contest.prize}
      </Text>
    </Flex>
  );
};
