import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Abstract } from '../components/mainArea/abstract'
import { WhatCanIDo } from '../components/mainArea/whatCanIDo'
import { SelfIntroduction } from '../components/mainArea/selfIntroduction'
import { Connection } from '../components/mainArea/connection'


const Home: NextPage = () => {
  return (
    <Box p="40px">
      <Abstract />
      <WhatCanIDo />
      <SelfIntroduction />
      <Connection />
    </Box>
  )
}

export default Home
