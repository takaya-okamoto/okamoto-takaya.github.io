import { Text, Button, Box } from '@chakra-ui/react'
import { useState } from 'react'
import { Line } from '../components/line/line'
import { Connection, IsDissableType } from '../components/mainArea/connection'
import { ResumeComponent } from '../components/resumeArea/resumeComponent'
import { Tech } from '../components/resumeArea/tech'
import { TimeLine } from '../components/resumeArea/timeLine'

export default function Resume(props:IsDissableType):JSX.Element {

  const [dissable, setDissable] = useState<boolean | undefined>()

  return (
    <Box p="40px 10%" mt={['15%', '10%', '5%']}>
      <ResumeComponent />
      <Connection isDissable={dissable}/>
    </Box>
  )
}