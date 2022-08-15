import { Box, Text, Image, HStack, VStack } from "@chakra-ui/react";
import { SiFuturelearn } from "react-icons/si"
import { MdSportsSoccer } from "react-icons/md"


export function SelfIntroduction(): JSX.Element {
  return (
    <Box maxW="70%" bg="#F2F0EE" borderRadius="20px" p="40px 60px" m="50px auto" shadow="xl">
      <HStack>
        <Image src="me.jpeg" alt="me" boxSize="200px" borderRadius="20px" mb="30px"/>
        <VStack align="left" pl="25px" pb="20px">
          <HStack>
            <Text color="#58595b">{<SiFuturelearn />}</Text>
            <Text color="#58595b" fontWeight="semibold">Learning Web3</Text>
          </HStack>
          <HStack>
            <Text color="#58595b">{<MdSportsSoccer />}</Text>
            <Text color="#58595b" fontWeight="semibold">I love watching soccer!</Text>
          </HStack>
          <Text color="#58595b" fontWeight="bold" as="u" pt="10px">secret</Text>
          <Text color="#58595b" fontWeight="semibold">I love to drink alcohol, but I am insanely weak🤣</Text>
        </VStack>

      </HStack>
      <Text pb="20px" fontWeight="bold" fontSize="xl" color="#58595b">READ ME</Text>
      <Text color="#58595b">
        I am a junior in college studying computer science. My areas of interest
        are 「Web3.0」 and Philosophy. I have learned technology through Udemy and
        books. When I am not coding, I am thinking about new business ventures
        and refraining from outdoor activities such as watching soccer, fishing,
        etc. I am currently interning as an engineer at Prossell.jp.
      </Text>
    </Box>
  );
}
