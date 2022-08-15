import { Box, Text, Image } from "@chakra-ui/react";

export function SelfIntroduction(): JSX.Element {
  return (
    <Box>
      <Text fontWeight="bold">READ ME</Text>
      <Image src="me.jpeg" alt="me" boxSize="200px" borderRadius="40px" />
      <Text>
        I am a junior in college studying computer science. My areas of interest
        are 「Web3.0」 and Philosophy. I have learned technology through Udemy and
        books. When I am not coding, I am thinking about new business ventures
        and refraining from outdoor activities such as watching soccer, fishing,
        etc. I am currently interning as an engineer at Prossell.jp.
      </Text>
    </Box>
  );
}
