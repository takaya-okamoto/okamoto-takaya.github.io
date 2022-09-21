import { Box, Text, Flex } from '@chakra-ui/react'
import { Card } from '../card/card'
import { cardData } from "../card/cardData"
import { Line } from '../line/line'

export function WorksComponent():JSX.Element {
  return (
    <Box p="40px 0">
      <Text fontWeight="bold" fontSize={["3xl", "4xl", "4xl"]} color="#58595b">My Works</Text>
      <Text pb="20px" fontWeight="bold" fontSize="sm" color="#58595b">Some Of My Project</Text>
      <Line />

      {/* Card */}
      <Flex flexWrap={['wrap', 'wrap', 'nowrap']} pt="20px">
        {cardData.map((card, index) => {
          return (
            <Flex key={index} pr={['0', '0', '15px']} pl={['0', '0', '15px']}>
              <Card image={card.image} title={card.title} url={card.url}/>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}