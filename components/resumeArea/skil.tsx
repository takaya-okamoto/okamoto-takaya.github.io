import { Text, HStack, Box, Progress, Link, Flex } from '@chakra-ui/react'
import { techDatatype } from './techData'

export function SkilSet(props:techDatatype):JSX.Element {
  
  return (
    <Box pb="50px">
      <HStack>
        <Box pr="20px">
          <Link href={props.url} isExternal>
            <Text color={props.color} fontSize="30px">{props.icon}</Text>
          </Link>
        </Box>
        <Box w="70%">
          <Flex flexWrap={['wrap', 'nowrap', 'nowrap']}>
            <Box w={["100%", "50%", "50%"]}>
              <Text fontWeight="bold" fontSize="2xl" color="#58595b" pb="10px" pr="20px">{props.name}</Text>
            </Box>
              <Text fontWeight="bold" fontSize="sm" color="gray.400" pb="5px" pr="20px">{props.learningPeriod}</Text>
              <Text fontWeight="bold" fontSize="xl" color="#58595b" pb="10px">{props.progress}</Text>
              <Text fontWeight="bold" fontSize="sm" color="#58595b" pb="5px">%</Text>
          </Flex>
          <Progress value={props.progress} size='lg' borderRadius="20px" colorScheme='teal' />
        </Box>
      </HStack>
    </Box>
  )
}