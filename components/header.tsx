import {
  Text,
  HStack,
  Button,
  Box
} from "@chakra-ui/react";
import NextLink from "next/link"
import { MdEmail, MdContactPage } from "react-icons/md"
import { ImUserTie } from "react-icons/im"
import { GiLifeSupport } from "react-icons/gi"


export function Header(): JSX.Element {
  return (
    <HStack p="20px 40px">
      {/* Header left */}
      <NextLink href='/'>
        <Button color="#58595b">Home</Button>
      </NextLink>
      <Box pl="70px">
        <NextLink href='/#'>
          <Button color="#58595b" leftIcon={<MdEmail />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>taka-o.eth@mmail.ink</Button>
        </NextLink>
      </Box>

      {/* Header right. */}
      <HStack pl="40%" />
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
