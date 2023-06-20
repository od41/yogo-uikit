import React, {useContext} from "react";

import {
  Flex,
  HStack,
  IconButton,
  CloseButton,
  Text,
  Box,
  Image as ChakraImage,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorMode,
  useColorModeValue,
  Portal,
  
} from "@chakra-ui/react";

import { Search } from "@root/components/inputs/Search";

import { SidebarIcon, HistoryIcon, BellIcon, ColorModeIcon, StarIcon } from "@root/components/base/Icons";

import { useRouter } from "next/router";

import {RightSidebar} from '@root/components/navigation/RightSidebar'
import { SidebarContext } from "@root/context/SidebarContext";

export interface NavbarProps {
  title?: string;
  username?: string;
}

export function Navbar({ title, username }: NavbarProps) {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode()

  const {
    isOpen: isOpenRightSidebar,
    onOpen: onOpenRightSidebar,
    onClose: onCloseRightSidebar,
  } = useDisclosure();

  const [sidebarState, setSidebarState] = useContext(SidebarContext)

  
  return (
    <>
      <Flex
        zIndex="sticky"
        top={0}
        left={0}
        bgColor={useColorModeValue("white.100", "black.100")}
        borderBottom="1px solid"
        borderColor={useColorModeValue("gray.10", "gray.80")}
        justifyContent="space-between"
        alignItems="center"
        px={6}
        py={4}
        position="sticky"
      >
        <Flex flex="1" justifyContent="space-between" alignItems="center">
          <HStack width="auto" spacing={4}>
            <IconButton
              aria-label="Show sidebar"
              variant="baseIconButton"
              icon={<SidebarIcon />}
              onClick={() => {setSidebarState({
                leftSidebar: !sidebarState.leftSidebar,
                rightSidebar: sidebarState.rightSidebar
              })}}
            />

            <IconButton
              aria-label="Favourite"
              icon={<StarIcon />}
              variant="baseIconButton"
            />

            <HStack spacing={4} alignItems="center">
              <Breadcrumb separator="/">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Default</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </HStack>
          </HStack>

          <Flex gap={1} alignItems="center" width="auto">
            <Search />

            <IconButton
              aria-label="Switch Color Mode"
              icon={<ColorModeIcon />}
              variant="baseIconButton"
              onClick={toggleColorMode}
            />

            {/* <IconButton
              aria-label="Show history"
              icon={<HistoryIcon />}
              variant="baseIconButton"
            /> */}

            <IconButton
              aria-label="Show notifications"
              icon={<BellIcon />}
              variant="baseIconButton"
            />

            <IconButton
              aria-label="Show sidebar"
              icon={<SidebarIcon />}
              variant="baseIconButton"
              onClick={() => {setSidebarState({
                leftSidebar: sidebarState.leftSidebar,
                rightSidebar: !sidebarState.rightSidebar
              })}}
            />

            {/* <Menu>
            <MenuButton
              aria-label="User profile menu"
              as={IconButton}
              icon={<FiMenu />}
              h="40px"
              w="40px"
              rounded="full"
              transition="transform 0.15s ease-out, background 0.15s ease-out"
              border="1px solid #f2f2f2"
              color="black"
              bg="white"
              _hover={{
                bg: "gray.50",
                cursor: "pointer",
              }}
            />
            <MenuList>
              <MenuItem onClick={() => router.push("PersonalSettingsPage")}>
                Personal Settings
              </MenuItem>
              <MenuItem onClick={() => router.push("AccountSettingsPage")}>
                Account Settings
              </MenuItem>
                <MenuItem onClick={() => router.push("TeamSettingsPage")}>
                    Team
                </MenuItem>
              <MenuDivider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu> */}
          </Flex>
        </Flex>
      </Flex>
      <Portal>
        
        <Drawer
          isOpen={isOpenRightSidebar}
          placement='right'
          onClose={onCloseRightSidebar}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton zIndex='popover' color='white' mt='12px' />
            <DrawerHeader>
            <RightSidebar />
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Portal>
    </>
  );
}
