import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Abstract } from '../components/mainArea/abstract'
import { WhatCanIDo } from '../components/mainArea/whatCanIDo'
import { SelfIntroduction } from '../components/mainArea/selfIntroduction'
import { Connection } from '../components/mainArea/connection'
import { Works } from '../components/mainArea/works'


const Home: NextPage = () => {
  return (
    <Box p="0 10%">
      <Abstract />
      <WhatCanIDo />
      <SelfIntroduction />
      <Works />
      <Connection />
    </Box>
  )
}

export default Home
