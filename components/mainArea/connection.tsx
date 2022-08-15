import { Box, Text, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Connection():JSX.Element {
  return (
    <Box>
      <Text>Takaya Okamoto</Text>
      <Text>taka-o.eth@mmail.ink</Text>
      <HStack>
        <Link href="https://twitter.com/taka_crypt" target="_blank"><Image src="/icon/twitter-60.png" alt="twitter"/></Link>
        <Link href="https://t.me/Taka_crypt" target="_blank"><Image src="/icon/telegram-50.png" alt="twitter"/></Link>
        <Link href="https://github.com/takaya-okamoto" target="_blank"><Image src="/icon/github-60.png" alt="twitter"/></Link>
      </HStack>
    </Box>
  )
}