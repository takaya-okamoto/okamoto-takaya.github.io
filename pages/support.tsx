import { Text, Button, Box } from '@chakra-ui/react'
import { Line } from '../components/line/line'
import { Connection } from '../components/mainArea/connection'
import { AssistButton } from '../components/support/assistButton'
import { SupportDescription } from '../components/support/supportDescription'

export default function Support():JSX.Element {
  return (
    <Box p="40px 10%">
      <Text fontWeight="bold" fontSize="4xl" color="#58595b">Support</Text>
      <Text pb="20px" fontWeight="bold" fontSize="sm" color="#58595b">It would be my pleasure.</Text>
      <Line />
      <SupportDescription />
      <AssistButton />
      <Connection />
    </Box>
  )
}