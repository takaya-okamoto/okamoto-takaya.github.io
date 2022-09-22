import {
  HStack,
  Button,
  Box,
  useClipboard,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link"

import { MdEmail, MdContactPage } from "react-icons/md"
import { ImUserTie } from "react-icons/im"
import React from "react";
import { GiHamburgerMenu, GiLifeSupport } from "react-icons/gi"


export function Header(): JSX.Element {
  const myEmail = "taka-o.eth@mmail.ink";
  const { hasCopied, onCopy } = useClipboard(myEmail);

  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <> 
     {/* p="30px 0px 10px 0px"　 ml="20px" */}
     <Box
      w="100vh"
      position={'fixed'}
      zIndex={'100'}
      pt={'5px'} pb={'5px'}
      bgColor={'#fff'}
      display={{ base: "block", md: 'none'}}
     >
      <HStack>
        <Box w={'30px'}>
          <NextLink href='/'>
            <Image src="/icon/taka.png" alt="taka" w="50px" ml="30px"/>
          </NextLink>
        </Box>
        <Box position={'relative'} left={['300px', '550px', '300px']}>
          <IconButton
            aria-label="menu"
            icon={<GiHamburgerMenu />}
            size='sm'
            variant={'unstyled'}
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerOverlay>
              <DrawerBody>
                <DrawerContent p={0}>
                  <DrawerCloseButton/>
                  <DrawerHeader>Menu</DrawerHeader>
                  <Box pl={'10px'}>
                    <Box pb={'20px'}>
                      <NextLink href='/'>
                        <Image src="/icon/taka.png" alt="taka" w="50px" ml="30px"/>
                      </NextLink>
                    </Box>
                    <Box pb={'10px'}>
                      <NextLink href='/works'>
                        <Button color="#58595b" leftIcon={<MdContactPage />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>Works</Button>
                      </NextLink>
                    </Box>
                    <Box pb={'10px'}>
                      <NextLink href='resume'>
                        <Button color="#58595b" leftIcon={<ImUserTie />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>Resume</Button>
                      </NextLink>
                    </Box>
                    {/* <Box>
                      <NextLink href='/support'>
                        <Button color="#58595b" leftIcon={<GiLifeSupport />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>support</Button>
                      </NextLink>
                    </Box> */}
                    <Box pb={'10px'}>
                      <Button onClick={onCopy} color="#58595b" leftIcon={<MdEmail />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>
                        {hasCopied ? "Copied!" : myEmail}
                      </Button>
                    </Box>
                  </Box>
                </DrawerContent>
              </DrawerBody>
            </DrawerOverlay>
          </Drawer>
        </Box>
      </HStack>
     </Box>


      {/* Header left */}
      <HStack
        display={{base: 'none', md: 'block'}}
        w={'100%'}
        position={'fixed'}
        zIndex={'100'}
        pt={'5px'} pb={'5px'}
        bgColor={'#fff'}
      > 
        {/* Header right. */}
        <HStack>
          <HStack w="70%">
            <NextLink href='/'>
              <Image src="/icon/taka.png" alt="taka" w="50px" ml="30px"/>
            </NextLink>
            <Box pl="70px">
              <Button onClick={onCopy} color="#58595b" leftIcon={<MdEmail />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>
                {hasCopied ? "Copied!" : myEmail}
              </Button>
            </Box>
          </HStack>
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
          {/* <Box>
            <NextLink href='/support'>
              <Button color="#58595b" leftIcon={<GiLifeSupport />} bgColor="white" borderRadius="3px" fontSize='lg' _hover={{bg: '#8bbbd3', color: '#fff'}}>support</Button>
            </NextLink>
          </Box> */}
        </HStack>
      </HStack>
    </>
  );
}