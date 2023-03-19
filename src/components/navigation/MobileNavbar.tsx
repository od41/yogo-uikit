import React from "react";

import {
  Flex,
  IconButton,
  CloseButton,
  Text,
  Box,
  Image as ChakraImage,
  Link as ChakraLink,
  Portal,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  VStack,
  HStack,
  List,
  ListItem,
  Heading,
  Avatar,
  Button
} from "@chakra-ui/react";

import { FiMenu, FiPlus, FiClipboard } from "react-icons/fi";

import { NavbarProps } from "@root/components/navigation/Navbar";
import { MobileSidebar } from "@root/components/navigation/MobileSidebar";

export function MobileNavbar({  }: NavbarProps) {
  
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
  const {
    isOpen: isOpenNav,
    onOpen: onOpenNav,
    onClose: onCloseNav,
  } = useDisclosure();
  const {
    isOpen: isOpenSwitcher,
    onOpen: onOpenSwitcher,
    onClose: onCloseSwitcher,
  } = useDisclosure();

  const btnRef = React.useRef<HTMLButtonElement>(null);

    return (
      <>
        <Flex
          h={16}
          zIndex='banner'
          w='100%'
          top={0}
          left={0}
          bgColor='white'
          borderBottom='1px solid #e0e0e0'
          justifyContent='space-between'
          alignItems='center'
          px={3}
          pl={0}
          position='sticky'
        >
          <Flex h={16} alignItems='center' width='auto'>
            <IconButton
              aria-label='Switch contracts'
              onClick={onOpenSwitcher}
              icon={<FiMenu />}
              h='100%'
              w='16px'
              rounded='none'
              color='black'
              borderRadius={0}
              _hover={{ bgColor: "gray.25" }}
            />
            <Drawer
              isOpen={isOpenSwitcher}
              onClose={onCloseSwitcher}
              placement='left'
              size='xs'
            >
              <DrawerOverlay />
              <DrawerContent px={0}>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>

                <DrawerBody>
                  <VStack alignItems='flex-start' gap={6}>
                    <HStack justify='space-between' w='100%' mt={16}>
                      <Heading variant='cardTitle' fontSize='18px'>
                        Contracts
                      </Heading>
                      <Button
                        onClick={() => null}
                        variant='primary'
                        size='sm'
                        fontSize='12px'
                        rightIcon={<FiPlus />}
                        w='120px'
                      >
                        New Contract
                      </Button>
                    </HStack>

                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
          <Flex
            flex='1'
            justifyContent='space-between'
            alignItems='center'
            ml='24px'
          >
            <Box width='auto'>
              <Text as='span' fontSize='18px' color='gray.300'>
                Welcome,
              </Text>{" "}
              <Text
                as='span'
                fontSize='18px'
                fontWeight='semibold'
                color='black'
              >
                Michael
              </Text>
            </Box>

            <Flex alignItems='center' width='auto'>
              <IconButton
                aria-label='Menu'
                onClick={onOpenNav}
                ref={btnRef}
                icon={<FiMenu />}
                h='40px'
                w='40px'
                rounded='full'
                color='iconGray.300'
                bg='white'
                border='1px solid gray.150'
                _hover={{ bgColor: "gray.25" }}
                // _active={{ bg: "gray.25", border: "1px solid gray.200" }}
                // _pressed={{ bg: "white", border: "1px solid gray.200" }}
              />
            </Flex>
          </Flex>
        </Flex>
        <Portal>{showSidebar && <MobileSidebar />}</Portal>
        <Drawer
          isOpen={isOpenNav}
          placement='right'
          onClose={onCloseNav}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton zIndex='popover' color='white' mt='12px' />
            <DrawerHeader>
            <MobileSidebar />
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </>
    );
  
}
