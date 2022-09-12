import { Text, Button, Box } from '@chakra-ui/react'
import { Line } from '../components/line/line'
import { Connection } from '../components/mainArea/connection'
import { Tech } from '../components/resumeArea/tech'
import { TimeLine } from '../components/resumeArea/timeLine'

export default function Resume():JSX.Element {
  return (
    <Box p="40px 10%">
      <Text fontWeight="bold" fontSize="4xl" color="#58595b">Skil Set</Text>
      <Text pb="20px" fontWeight="bold" fontSize="sm" color="#58595b">Technical Skills</Text>
      <Line />
      <Tech />
      <TimeLine />
      <Connection isDissable={false}/>
    </Box>
  )
}