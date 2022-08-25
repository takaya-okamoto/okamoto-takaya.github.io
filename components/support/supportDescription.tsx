import { Text, Box, Center } from "@chakra-ui/react";

export function SupportDescription(): JSX.Element {
  return (
    <Box bg="#F2F0EE" borderRadius="20px" p="30px 60px" mb="30px">
      <Text color="#58595b" textAlign="center"  fontWeight="semibold" fontSize='20px' pb="30px">
        I am earning money as an intern and attending college. However, I can
        not do what I want to do in a straight line while earning money.
      </Text>
      <Text color="#58595b" textAlign="center" fontWeight="semibold" fontSize='20px' pb="30px">
        If I had a little more money, I would develop more and more services to
        entertain the world.
      </Text>
      <Text color="#58595b" textAlign="center" fontWeight="semibold" fontSize='20px' pb="30px">
        Is there anyone out there who would support me?
      </Text>
    </Box>
  );
}
