import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { Card } from '../card/card'
import { cardData } from "../card/cardData"
import { Line } from '../line/line'

export function Works():JSX.Element {
  return (
    <Box p="40px 0">
      <Text fontWeight="bold" fontSize="4xl" color="#58595b">My Works</Text>
      <Text pb="20px" fontWeight="bold" fontSize="sm" color="#58595b">Some Of My Project</Text>
      <Line />

      {/* Card */}
      <SimpleGrid columns={2} spacing={10} pt="20px">
        {cardData.map((card, index) => {
          return (
            <Box key={index}>
              <Card image={card.image} title={card.title} url={card.url}/>
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}