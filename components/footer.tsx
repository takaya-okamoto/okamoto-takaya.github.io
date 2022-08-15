import {
  Text,
  HStack,
  Button,
  Box
} from "@chakra-ui/react";
import NextLink from "next/link"


export function Footer(): JSX.Element {
  return (
    <HStack p="20px 40px" justifyContent="center">
      <NextLink href='/'>
        <Button>Home</Button>
      </NextLink>
      <NextLink href='/works'>
        <Button>Works</Button>
      </NextLink>
      <NextLink href='resume'>
        <Button>Resume</Button>
      </NextLink>
      <NextLink href='/support'>
        <Button>support</Button>
      </NextLink>
    </HStack>
  );
}
