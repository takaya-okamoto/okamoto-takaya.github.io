import {
  Text,
  HStack,
  Button,
  Box,
  Image
} from "@chakra-ui/react";
import NextLink from "next/link"

export function Footer(): JSX.Element {
  return (
    <HStack maxW="100%" p="30px 0px 10px 0px" ml="20px" display={{base: 'block', sm:'none'}}> 
      {/* Footer left */}
      <Box w="35.8%">
        <NextLink href='/'>
          <Image src="/icon/taka.png" alt="taka" w="35px" ml="30px"/>
        </NextLink>
      </Box>

      {/* Footer right. */}
      <HStack>
        <Box>
          <NextLink href='/works'>
            <Button color="#58595b" bgColor="#F2F0EE" borderRadius="3px" fontSize='sm' _hover={{bg: '#8bbbd3', color: '#fff'}}>Works</Button>
          </NextLink>
        </Box>
        <Box>
          <NextLink href='resume'>
            <Button color="#58595b" bgColor="#F2F0EE" borderRadius="3px" fontSize='sm' _hover={{bg: '#8bbbd3', color: '#fff'}}>Resume</Button>
          </NextLink>
        </Box>
        <Box>
          <NextLink href='/support'>
            <Button color="#58595b" bgColor="#F2F0EE" borderRadius="3px" fontSize='sm' _hover={{bg: '#8bbbd3', color: '#fff'}}>support</Button>
          </NextLink>
        </Box>
      </HStack>
      <Text pl="10%" fontSize="sm">&copy;2022 TAKAYA. ALL RIGHTS RESERVED</Text>
    </HStack>
  );
}
