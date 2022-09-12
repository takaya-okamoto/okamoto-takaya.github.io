import { Text, Button, Box, VStack } from '@chakra-ui/react'
import { Connection } from '../components/mainArea/connection'
import { SupportComponent } from '../components/support/supportComponent'

type ConnectType = {
  connect: boolean
}

export default function Support(props: ConnectType):JSX.Element {

 const isDissable = props.connect

  return (
    <Box p={"0 10%"}>
      <SupportComponent/>
      <Connection isDissable={isDissable}/>
    </Box>
  )
  }