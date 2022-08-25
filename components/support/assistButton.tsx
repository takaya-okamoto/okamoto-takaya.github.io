import { Text, Box, Button, Center, VStack } from "@chakra-ui/react";

export function AssistButton(): JSX.Element {
  return (
    <Box>
      <Center mb="30px">
        <Button>-</Button>
        <Text>input value</Text>
        <Button>+</Button>
      </Center>
      <VStack>
        <Button>Support!!</Button>
      </VStack>
    </Box>
  );
}
