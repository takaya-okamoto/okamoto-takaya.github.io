import { Text, Button, Box } from '@chakra-ui/react'
import { isDataView } from 'util/types'
import { Line } from '../components/line/line'
import { Connection } from '../components/mainArea/connection'
import { AssistButton } from '../components/support/assistButton'
import { SupportDescription } from '../components/support/supportDescription'

type ConnectType = {
  connect: boolean
}

export default function Support(props: ConnectType):JSX.Element {
  const isDissable = props.connect
  return (
    <Box p="40px 0">
      <Text fontWeight="bold" fontSize="4xl" color="#58595b">Support</Text>
      <Text pb="20px" fontWeight="bold" fontSize="sm" color="#58595b">It would be my pleasure.</Text>
      <Line />
      <SupportDescription />
      <AssistButton />
      <Connection isDissable={isDissable}/>
    </Box>
  )
}