import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Abstract } from '../components/mainArea/abstract'
import { WhatCanIDo } from '../components/mainArea/whatCanIDo'
import { SelfIntroduction } from '../components/mainArea/selfIntroduction'
import { Connection } from '../components/mainArea/connection'
import { WorksComponent } from '../components/mainArea/worksComponent'


const Home: NextPage = () => {
  return (
    <Box p="0 10%">
      <Abstract />
      <WhatCanIDo />
      <SelfIntroduction />
      <WorksComponent />
      <Connection />
    </Box>
  )
}

export default Home
