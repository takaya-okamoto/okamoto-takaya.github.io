import { Box, Text, HStack, Image, VStack, Link } from "@chakra-ui/react";

export type IsDissableType = {
  isDissable: boolean | undefined;
};

export function Connection(props: IsDissableType): JSX.Element {
  return (
    <>
      {props.isDissable ? (
        <></>
      ) : (
        <Box p="30px 0">
          <VStack>
            <Text pb="20px" fontSize="sm" color="#58595b">
              Takaya Okamoto
            </Text>
            <Text pb="50px" fontWeight="bold" fontSize="xl" color="#58595b">
              takka3138@gmail.com
            </Text>
            <HStack>
              <Link href="https://twitter.com/taka_yolo" target="_blank">
                <Image
                  src="/icon/logo-black.png"
                  alt="twitter"
                  boxSize="25px"
                />
              </Link>
              {/* <Link href="https://t.me/Taka_crypt" target="_blank">
                <Image src="/icon/telegram.png" alt="telegram" boxSize="35px" />
              </Link> */}
              <Link href="https://github.com/takaya-okamoto" target="_blank">
                <Image src="/icon/github.png" alt="github" boxSize="35px" />
              </Link>
            </HStack>
          </VStack>
        </Box>
      )}
    </>
  );
}
