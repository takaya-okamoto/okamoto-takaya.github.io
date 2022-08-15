import {
  Text,
  HStack,
  Button,
  Box,
  useClipboard
} from "@chakra-ui/react";
import NextLink from "next/link"

import { MdEmail, MdContactPage } from "react-icons/md"
import { ImUserTie } from "react-icons/im"
import { GiLifeSupport } from "react-icons/gi"


export function Header(): JSX.Element {
  const myEmail = "taka-o.eth@mmail.ink";
  const { hasCopied, onCopy } = useClipboard(myEmail);

  return (
    <HStack maxW="100%" p="30px 0px 10px 0px" ml="20px"> 
      {/* Header left */}
      <HStack w="60%">
        <NextLink href='/'>
          <Button color="#58595b">Home</Button>
        </NextLink>
        <Box pl="70px">
          <Button onClick={onCopy} color="#58595b" leftIcon={<MdEmail />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>
            {hasCopied ? "Copied!" : myEmail}
          </Button>
        </Box>
      </HStack>

      {/* Header right. */}
      <HStack pl="20px"/>
        <Box>
          <NextLink href='/works'>
            <Button color="#58595b" leftIcon={<MdContactPage />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>Works</Button>
          </NextLink>
        </Box>
        <Box>
          <NextLink href='resume'>
            <Button color="#58595b" leftIcon={<ImUserTie />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>Resume</Button>
          </NextLink>
        </Box>
        <Box>
          <NextLink href='/support'>
            <Button color="#58595b" leftIcon={<GiLifeSupport />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>support</Button>
          </NextLink>
        </Box>
      </HStack>
  );
}
