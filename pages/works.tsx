import { Text, Button, Box } from '@chakra-ui/react'
import { Connection } from '../components/mainArea/connection'
import { WorksComponent } from '../components/mainArea/worksComponent'

export default function Works():JSX.Element {
  return (
    <Box p="0 10%"  mt={['15%', '10%', '5%']}>
      <WorksComponent />
      <Connection isDissable={false}/>
    </Box>
  )
}