import { Box, Text, Image } from '@chakra-ui/react' 

export function WhatCanIDo():JSX.Element {
  return (
    <Box p="20px 0">
      <Text pb="20px" fontWeight="bold" fontSize="4xl" color="#58595b">What can I do ?</Text>
      <Box bg="#F2F0EE" borderRadius="20px" p="30px 60px">
        <Box pb="30px">
          <Text p="10px 0" fontWeight="bold" fontSize="xl" color="#58595b">FRONTEND APPS</Text>
          <Text color="#58595b">Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as Nuxt (Vue.js), TailwindCSS, and GSAP.</Text>
        </Box>
        <Box pb="30px">
          <Text p="10px 0" fontWeight="bold" fontSize="xl" color="#58595b">BACKEND APPS</Text>
          <Text color="#58595b">Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB</Text>
        </Box>
        <Box pb="30px">
          <Text p="10px 0" fontWeight="bold" fontSize="xl" color="#58595b">NATIVE APPS</Text>
          <Text color="#58595b">Use Flutter for building simple native mobile applications. Flutter is modern, fast, cross-platform, and popular.</Text>
        </Box>
      </Box>
    </Box>
  )
}