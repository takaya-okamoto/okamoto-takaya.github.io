import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Abstract } from '../components/mainArea/abstract'
import { WhatCanIDo } from '../components/mainArea/whatCanIDo'
import { SelfIntroduction } from '../components/mainArea/selfIntroduction'
import { Connection } from '../components/mainArea/connection'
import { WorksComponent } from '../components/mainArea/worksComponent'
import Resume from './resume'
import { ResumeComponent } from '../components/resumeArea/resumeComponent'


const Home: NextPage = () => {
  return (
    <Box p="0 10%" mt={['15%', '10%', '5%']}>
      <Abstract />
      <WhatCanIDo />
      <SelfIntroduction />
      <WorksComponent />
      <ResumeComponent />
      <Connection isDissable={false}/>
    </Box>
  )
}

export default Home
