import { Box, Text, Image } from '@chakra-ui/react' 

export function WhatCanIDo():JSX.Element {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="3xl">What can I do ?</Text>
      <Box>
        <Box>
          <Text fontWeight="bold">FRONTEND APPS</Text>
          <Text>Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices for SEO optimisation. Use modern tech such as Nuxt (Vue.js), TailwindCSS, and GSAP.</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">BACKEND APPS</Text>
          <Text>Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">NATIVE APPS</Text>
          <Text>Use Flutter for building simple native mobile applications. Flutter is modern, fast, cross-platform, and popular.</Text>
        </Box>
      </Box>
    </Box>
  )
}