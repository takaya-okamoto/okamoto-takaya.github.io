import { Box, Text, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

import { CardType } from './cardData'

export function Card(props:CardType):JSX.Element {
  return (
    <Box pb="40px">
      <Text align='center' pb="10px" fontWeight="bold" fontSize="lg" color="#58595b">{props.title}</Text>
      <Box _hover={{transition:'1s', opacity: .4}}>
        <Link href={props.url} isExternal>
          <Image src={props.image} alt={props.title} borderRadius="20px" shadow="2xl" height="250px" w="500px"/>
        </Link>
      </Box>
    </Box>
  )
}