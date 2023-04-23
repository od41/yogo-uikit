import React from "react";

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
  Heading,
  VStack,
  List,
  ListItem,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  useColorMode
} from "@chakra-ui/react";

import { Search } from "@root/components/inputs/Search";

import { FiMenu, FiHexagon, FiPlus, FiChevronDown } from "react-icons/fi";

import { SidebarIcon, HistoryIcon, BellIcon, ColorModeIcon, StarIcon } from "@root/components/base/Icons";

import { useRouter } from "next/router";

export interface NavbarProps {
  title?: string;
  username?: string;
}

export function Navbar({ title, username }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode()

  const handleLogout = () => {};
  return (
    <Flex
      zIndex="sticky"
      top={0}
      left={0}
      bgColor="white"
      borderBottom="1px solid #e5e5e5"
      justifyContent="space-between"
      alignItems="center"
      px={6}
      py={4}
      position="sticky"
    >

      <Flex
        flex="1"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack width="auto" spacing={4}>
          <IconButton
            aria-label="Show sidebar"
            icon={<SidebarIcon />}
            h="40px"
            w="40px"
            rounded="full"
            transition="transform 0.15s ease-out, background 0.15s ease-out"
            color="black"
            bg="white"
            _hover={{
              bg: "gray.50",
              cursor: "pointer",
            }}
          />
          
          <IconButton
            aria-label="Favourite"
            icon={<StarIcon />}
            h="40px"
            w="40px"
            rounded="full"
            transition="transform 0.15s ease-out, background 0.15s ease-out"
            color="black"
            bg="white"
            _hover={{
              bg: "gray.50",
              cursor: "pointer",
            }}
          />

          <HStack spacing={4} alignItems="center">
            <Breadcrumb separator="/">
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>
                  Default
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>

        </HStack>

        <Flex gap={1} alignItems="center" width="auto">
          <Search />

          <IconButton
            aria-label="Switch Color Mode"
            icon={<ColorModeIcon />}
            h="40px"
            w="40px"
            rounded="full"
            transition="transform 0.15s ease-out, background 0.15s ease-out"
            color="black"
            bg="white"
            _hover={{
              bg: "gray.50",
              cursor: "pointer",
            }}
            onClick={toggleColorMode}
          />

          <IconButton
            aria-label="Show history"
            icon={<HistoryIcon />}
            h="40px"
            w="40px"
            rounded="full"
            transition="transform 0.15s ease-out, background 0.15s ease-out"
            color="black"
            bg="white"
            _hover={{
              bg: "gray.50",
              cursor: "pointer",
            }}
          />

          <IconButton
            aria-label="Show notifications"
            icon={<BellIcon />}
            h="40px"
            w="40px"
            rounded="full"
            transition="transform 0.15s ease-out, background 0.15s ease-out"
            color="black"
            bg="white"
            _hover={{
              bg: "gray.50",
              cursor: "pointer",
            }}
          />

          <IconButton
            aria-label="Show sidebar"
            icon={<SidebarIcon />}
            h="40px"
            w="40px"
            rounded="full"
            transition="transform 0.15s ease-out, background 0.15s ease-out"
            color="black"
            bg="white"
            _hover={{
              bg: "gray.50",
              cursor: "pointer",
            }}
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
  );
}
