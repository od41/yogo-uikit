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
  Button
} from "@chakra-ui/react";

import { FiMenu, FiHexagon, FiPlus, FiChevronDown } from "react-icons/fi";

import { useRouter } from "next/router";

export interface NavbarProps {
  title?: string;
  username?: string;
}

export function Navbar({ title, username }: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleLogout = () => {};
  return (
    <Flex
      h={100}
      zIndex="sticky"
      top={0}
      left={0}
      bgColor="white"
      borderBottom="1px solid #e0e0e0"
      justifyContent="space-between"
      alignItems="center"
      px={12}
      pl={0}
      position="sticky"
    >
      <Flex h={100} alignItems="center" width="auto" mr="89px">
        <IconButton
          aria-label="Switch contracts"
          onClick={onOpen}
          icon={<FiMenu />}
          h="100%"
          w="100px"
          rounded="none"
          color="black"
          borderRadius={0}
          _hover={{ bgColor: "gray.25" }}
        />
        {/* start Switch contract drawer */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="sm">
          <DrawerOverlay />
          <DrawerContent px={4}>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
              <VStack alignItems="flex-start" gap={6}>
                <HStack justify="space-between" w="100%" mt={24}>
                  <Heading variant="cardTitle" fontSize="18px">
                    Contracts
                  </Heading>
                  <Button
                    onClick={() => null}
                    variant="primary"
                    size="sm"
                    rightIcon={<FiPlus />}
                    w="164px"
                  >
                    New Contract
                  </Button>
                </HStack>

                {/* <Search
                  placeholder="Search by client’s name"
                  onChange={(e) => {
                    filterChange(e.target.value);
                  }}
                  w="100%"
                /> */}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* end drawer */}

        <ChakraLink href="/">
          <FiHexagon
            // ml="25px"
            width="105px"
            height="33px"
            // alt="TFleet logo"
          />
        </ChakraLink>
      </Flex>

      <Flex
        flex="1"
        justifyContent="space-between"
        alignItems="center"
        ml="24px"
      >
        <Box width="auto">
          {title ? ( // display page title
            <Text as="span" fontSize="20px" fontWeight="semibold" color="black">
              {title}
            </Text>
          ) : (
            /* // disiplay user name */
            <Text as="span" fontSize="20px" color="gray.300">
              Hello,{" "}
              <Text as="span" fontWeight="semibold" color="black">
                "John Doe"
              </Text>
            </Text>
          )}
        </Box>

        <Flex gap={6} alignItems="center" width="auto">
          <Menu>
            <MenuButton
              aria-label="Perform actions menu"
              fontWeight="semibold"
              rounded="full"
              transition="transform 0.15s ease-out, background 0.15s ease-out"
              fontSize="15px"
              px={5}
              py={2}
              // variations
              border={title ? "1px solid #F2F2F2" : "none"}
              color={title ? "gray.300" : "white"}
              bg={title ? "transparent" : "primary.300"}
              _hover={{
                bg: title ? "gray.25" : "primary.400",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <span>Quick Actions</span>
              <FiChevronDown />
            </MenuButton>
              <MenuList>
                <MenuItem onClick={() => router.push("AddDriverPage")}>
                  Add Driver
                </MenuItem>
                <MenuItem onClick={() => router.push("AddTruckPage")}>
                  Add Truck
                </MenuItem>
                <MenuItem onClick={() => router.push("AddTripPage")}>
                  Add Trip
                </MenuItem>
              </MenuList>
          </Menu>

          {/* <IconButton
              aria-label="Notifications"
              icon={<NotificationButtonIcon />}
              h='40px'
              w='40px'
              rounded='full'
              transition='transform 0.15s ease-out, background 0.15s ease-out'
              border='1px solid #f2f2f2'
              color='black'
              bg='white'
              _hover={{
                bg: "gray.50",
                cursor: "pointer",
              }}
            /> */}

          <Menu>
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
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}
