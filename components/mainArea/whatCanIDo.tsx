import { Box, Text } from '@chakra-ui/react' 
import { Line } from '../line/line'

export function WhatCanIDo():JSX.Element {
  return (
    <Box p="20px 0"  mt={['15%', '10%', '5%']}>
      <Text pb="10px" fontWeight="bold" fontSize={["3xl", "4xl", "4xl"]} color="#58595b">What can I do ?</Text>
      <Line />
      <Box
       bg="#F2F0EE"
       borderRadius="20px"
       pt="30px" pb="30px"
       pr={['15px', '30px', '30px']}
       pl={['15px', '30px', '30px']}
      >
        <Box pb="30px">
          <Text p="10px 0" fontWeight="bold" fontSize="xl" color="#58595b">FRONTEND APPS</Text>
          <Text color="#58595b">Build client-side applications with modern features like SPA . <br/> Use modern tech such as React, Next.js,  Chakra UI . </Text>
        </Box>
        <Box pb="30px">
          <Text p="10px 0" fontWeight="bold" fontSize="xl" color="#58595b">BACKEND APPS</Text>
          <Text color="#58595b">I can write smart contracts using Solidity etc.</Text>
        </Box>
      </Box>
    </Box>
  )
}