import { Box, Text, Image } from '@chakra-ui/react' 

export function Abstract():JSX.Element {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="3xl">Takaya Okamoto</Text>
      <Text>FrontEnd & BlockChain Engineer</Text>
      <Text>Software Developer from Akita Prefecture in Japan. I am mainly active in the Web 3.0 area and have experience in Dapps development.</Text>
      <Image src='pfp.png' alt='pfp' boxSize='250px' borderRadius='30px'/>
    </Box>
  )
}