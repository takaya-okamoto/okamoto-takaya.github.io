import { Box, SimpleGrid } from "@chakra-ui/react";
import { SkilSet } from "./skil";
import { techData } from "./techData";

export function Tech(): JSX.Element {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      bg="#f9f8f7"
      borderRadius="8px"
      p="30px 20px"
      mt="70px"
      mb="70px"
    >
      {techData.map((data, index) => {
        return (
          <Box key={index}>
            <SkilSet
              icon={data.icon}
              name={data.name}
              progress={data.progress}
              learningPeriod={data.learningPeriod}
              color={data.color}
              url={data.url}
            />
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
