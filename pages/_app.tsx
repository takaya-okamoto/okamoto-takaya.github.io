import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider, Box } from '@chakra-ui/react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box bgColor="#F2F0EE" h="100%" p="4% 12%">
        <Box bgColor="white" borderRadius={10} shadow="xl">
          <Header />
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp