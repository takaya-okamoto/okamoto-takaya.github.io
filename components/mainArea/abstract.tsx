import { Box, Text, Image, Flex } from "@chakra-ui/react";

export function Abstract(): JSX.Element {
  return (
    <Box pb={"30px"} mt={["15%", "10%", "5%"]}>
      <Flex
        flexWrap={["wrap", "wrap", "nowrap"]}
        justifyContent={"center"}
        pt={["20px", "40px", "70px"]}
      >
        <Flex pr={["0", "30px", "30px"]} pb={"20px"}>
          <Image
            src="pfp.png"
            alt="pfp"
            boxSize={["160px", "200px", "270px"]}
            borderRadius="30px"
          />
        </Flex>
        <Flex flexDirection={"column"} w="70%">
          <Text
            fontWeight="bold"
            fontSize={["4xl", "5xl", "5xl"]}
            pb={["20px", "0", "0"]}
            color="#58595b"
          >
            Takaya Okamoto
          </Text>
          <Text color="#58595b" fontWeight="semibold" fontSize="xl" pb={"10px"}>
            FrontEnd & BlockChain Engineer
          </Text>
          <Text color="#58595b">
            Software Developer from Niigata Prefecture in Japan.
            <br />
            Although I am a software engineer, I am challenging myself as a
            product manager.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
