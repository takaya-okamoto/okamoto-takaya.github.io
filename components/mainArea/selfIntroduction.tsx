import { Box, Text, Image, HStack, VStack, Flex } from "@chakra-ui/react";
import { SiFuturelearn } from "react-icons/si";
import { MdSportsSoccer } from "react-icons/md";

export function SelfIntroduction(): JSX.Element {
  return (
    <Box
      maxW="90%"
      bg="#F2F0EE"
      borderRadius="20px"
      pt={"40px"}
      pb={"40px"}
      pr={["10px", "30px", "30px"]}
      pl={["10px", "30px", "30px"]}
      m="50px auto"
      shadow="xl"
    >
      <Flex
        flexWrap={["wrap", "wrap", "nowrap"]}
        justifyContent={"center"}
        gap={["1rem", "3rem", "5rem"]}
      >
        <Flex justifyContent={"center"}>
          <Image
            src="me.jpeg"
            alt="me"
            boxSize={["160px", "200px", "200px"]}
            borderRadius="20px"
            mb="30px"
          />
        </Flex>
        <Flex
          flexDirection={"column"}
          pl="25px"
          pb="20px"
          justifyContent={"center"}
        >
          <Flex flexDirection={"row"} pb={"px"}>
            <Text color="#58595b" pr={"8px"}>
              {<SiFuturelearn />}
            </Text>
            <Text color="#58595b" fontWeight="semibold">
              Learning business
            </Text>
          </Flex>
          <Flex flexDirection={"row"} pb={"20px"}>
            <Text color="#58595b" pr={"8px"}>
              {<MdSportsSoccer />}
            </Text>
            <Text color="#58595b" fontWeight="semibold">
              I love watching soccer!
            </Text>
          </Flex>
          {/* <Flex flexDirection={"column"} pb={"20px"}>
            <Text color="#58595b" fontWeight="bold" as="u" pt="10px">
              secret
            </Text>
            <Text color="#58595b" fontWeight="semibold">
              I love to drink alcohol, but I am insanely weak🤣
            </Text>
          </Flex> */}
        </Flex>
      </Flex>
      <Text
        fontWeight={"semibold"}
        color="#58595b"
        mr={["10px", "0", "0"]}
        ml={["10px", "0", "0"]}
      >
        READ ME
      </Text>
      <Text color="#58595b" mr={["10px", "0", "0"]} ml={["10px", "0", "0"]}>
        I am a junior in college studying Computer Science. My areas of interest
        are Mental Health, Blockchain, and Philosophy. I usually delve deeper
        into these subjects through reading books and watching videos. My
        hobbies include watching soccer, fishing, and cycling. <br />
        (Recently, I went on a cycling trip of about 300km from Niigata to
        Kanazawa with friends 🚴)
      </Text>
    </Box>
  );
}
