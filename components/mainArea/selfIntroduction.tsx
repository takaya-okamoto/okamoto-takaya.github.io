import { Box, Text, Image, HStack, VStack, Flex } from "@chakra-ui/react";
import { SiFuturelearn } from "react-icons/si"
import { MdSportsSoccer } from "react-icons/md"


export function SelfIntroduction(): JSX.Element {
  return (
    <Box
     maxW="90%"
     bg="#F2F0EE"
     borderRadius="20px"
     pt={'40px'} pb={'40px'}
     pr={['10px', '30px', '30px']}
     pl={['10px', '30px', '30px']}
     m="50px auto"
     shadow="xl"
    >
      <Flex flexWrap={['wrap', 'wrap', 'nowrap']} justifyContent={'center'}>
        <Flex justifyContent={'center'}>
          <Image src="me.jpeg" alt="me" boxSize={["160px", "200px", "200px"]} borderRadius="20px" mb="30px"/>
        </Flex>
        <Flex flexDirection={'column'} pl="25px" pb="20px">
          <Flex flexDirection={'row'} pb={'10px'}>
            <Text color="#58595b" pr={'8px'}>{<SiFuturelearn />}</Text>
            <Text color="#58595b" fontWeight="semibold">Learning Web3</Text>
          </Flex>
          <Flex flexDirection={'row'} pb={'20px'}>
            <Text color="#58595b" pr={'8px'}>{<MdSportsSoccer />}</Text>
            <Text color="#58595b" fontWeight="semibold">I love watching soccer!</Text>
          </Flex>
          <Flex flexDirection={'column'} pb={'20px'}>
            <Text color="#58595b" fontWeight="bold" as="u" pt="10px">secret</Text>
            <Text color="#58595b" fontWeight="semibold">I love to drink alcohol, but I am insanely weak🤣</Text>
          </Flex>
        </Flex>
      </Flex>
      <Text fontWeight={'semibold'} color="#58595b" mr={['10px', '0', '0']} ml={['10px', '0', '0']}>READ ME</Text>
      <Text color="#58595b" mr={['10px', '0', '0']} ml={['10px', '0', '0']}>
        I am a junior in college studying computer science. My areas of interest
        are「Web3.0」and「Philosophy」. I have learned technology through Udemy and
        books. When I am not coding, I am thinking about new business ventures
        and refraining from outdoor activities such as watching soccer, fishing,
        etc. I am currently interning as an engineer at Prossell.jp.
      </Text>
    </Box>
  );
}
