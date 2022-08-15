import { Box, Text, Image, HStack } from '@chakra-ui/react' 

export function Abstract():JSX.Element {
  return (
    <Box p="4% 0">
      <HStack>
        <Box w="70%">
          <Text fontWeight="bold" fontSize="5xl" color="#58595b">Takaya Okamoto</Text>
          <Text color="#58595b" fontWeight="semibold" fontSize="xl">FrontEnd & BlockChain Engineer</Text>
          <Box w="80%" p="30px 0">
            <Text color="#58595b">Software Developer from Akita Prefecture in Japan.<br/>I am mainly active in the Web 3.0 area and have experience in Dapps development.</Text>
          </Box>
        </Box>
        <Box>
          <Image src='pfp.png' alt='pfp' boxSize='270px' borderRadius='30px'/>
        </Box>
      </HStack>
    </Box>
  )
}