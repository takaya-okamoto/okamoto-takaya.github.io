import {
  Text,
  HStack,
  Button,
  Box,
  Image,
  VStack,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";

export function Footer(): JSX.Element {
  return (
    <Box>
      <Flex p="30px 0px 10px 0px" ml="20px">
        {/* Footer left */}
        <Box w={["20%", "26%", "42%"]} display={{ base: "none", sm: "block" }}>
          <NextLink href="/">
            <Image
              src="/icon/taka.png"
              alt="taka"
              w="35px"
              ml={["0", "0", "30px"]}
            />
          </NextLink>
        </Box>

        {/* Footer right. */}
        <Flex gap={4}>
          <Box>
            <NextLink href="/works">
              <Button
                color="#58595b"
                bgColor="#F2F0EE"
                borderRadius="3px"
                fontSize="sm"
                _hover={{ bg: "#8bbbd3", color: "#fff" }}
              >
                Works
              </Button>
            </NextLink>
          </Box>
          <Box>
            <NextLink href="resume">
              <Button
                color="#58595b"
                bgColor="#F2F0EE"
                borderRadius="3px"
                fontSize="sm"
                _hover={{ bg: "#8bbbd3", color: "#fff" }}
              >
                Resume
              </Button>
            </NextLink>
          </Box>
          {/* <Box>
            <NextLink href="/support">
              <Button
                color="#58595b"
                bgColor="#F2F0EE"
                borderRadius="3px"
                fontSize="sm"
                _hover={{ bg: "#8bbbd3", color: "#fff" }}
              >
                support
              </Button>
            </NextLink>
          </Box> */}
        </Flex>
      </Flex>
      <VStack pt={"20px"}>
        <Text color="#58595b" fontSize="sm">
          &copy;2023 TAKAYA. ALL RIGHTS RESERVED
        </Text>
      </VStack>
    </Box>
  );
}
