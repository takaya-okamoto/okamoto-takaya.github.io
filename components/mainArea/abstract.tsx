import { Box, Text, Image, HStack } from '@chakra-ui/react' 

export function Abstract():JSX.Element {
  return (
    <Box>
      <HStack>
        <Box pl="10%" w="70%">
          <Text fontWeight="bold" fontSize="5xl" color="#58595b">Takaya Okamoto</Text>
          <Text color="#58595b" fontWeight="semibold" fontSize="xl">FrontEnd & BlockChain Engineer</Text>
          <Box w="50%" p="30px 0">
            <Text color="#58595b">Software Developer from Akita Prefecture in Japan. I am mainly active in the Web 3.0 area and have experience in Dapps development.</Text>
          </Box>
        </Box>
        <Box>
          <Image src='pfp.png' alt='pfp' boxSize='250px' borderRadius='30px'/>
        </Box>
      </HStack>
    </Box>
  )
}