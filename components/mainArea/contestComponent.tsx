import { Box, Text, Flex } from "@chakra-ui/react";
import { Line } from "../line/line";
import { ContestData } from "../contest/contestData";
import { ContestCard } from "../contest/contestCard";

export const ContestComponent = () => {
  return (
    <Box p="40px 0">
      <Text fontWeight="bold" fontSize={["3xl", "4xl", "4xl"]} color="#58595b">
        Contest Prize History
      </Text>
      <Text pb="20px" fontWeight="bold" fontSize="sm" color="#58595b">
        Award-winning Contest History
      </Text>
      <Line />

      {/* Card */}
      <Flex
        direction={"column"}
        gap={5}
        bg="#f9f8f7"
        borderRadius="8px"
        p="30px 20px"
      >
        {ContestData.map((contest, index) => {
          return (
            <Flex key={index}>
              <ContestCard contest={contest} />
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};
