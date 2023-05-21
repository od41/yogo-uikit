import React from 'react'
import {useRouter} from 'next/router'
import {
  Flex,
  Box,
  Avatar,
  IconButton,
  Text,
  VStack,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { switchPage } from "@root/utils/scripts";

import { FiMenu, FiHexagon, FiPlus, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { sidebarMenu } from "@root/utils/constants";

import { LogoIcon } from '@root/components/base/Icons';


export const MobileSidebar = () => {
    const router = useRouter();

  const isPathActive = (path: string, isParent: boolean) => {
    if(isParent)
        return router.asPath.includes(path)
    
    return router.asPath.endsWith(path);
  };

  return (
    <Flex minH="100vh" flexDir="column" top={0} left={0} position="sticky" justify="space-between">
      <Box>
        <Flex
          // px="24px"
          width="100%"
          height={100}
          borderRadius="md"
          mb={4}
          color="white"
          fontSize="14px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Avatar
              name="John Wick"
              bgColor="brand.primary.kappa"
              color="black.100"
              size="sm"
              mr={2}
            />
            <Box>
              <Text textStyle="base">John Wick</Text>
            </Box>
          </Flex>
          {/* <IconButton
          aria-label="options"
          style={{ backgroundColor: "#011E3D" }}
          icon={<KebabMenuIcon />}
          w="auto"
          color="iconGray.100"
        /> */}
        </Flex>

        <VStack gap={0} alignItems="flex-start">
          <Accordion w="100%" allowMultiple>
            {sidebarMenu.map((menuItem, index) => (
              <VStack key={`menu-item-${index}`} gap={0} spacing={0} w="100%">
                {menuItem.submenu ? (
                  <AccordionItem w="100%" border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          _hover={{
                            bgColor: useColorModeValue("gray.5", "gray.l10"),
                          }}
                          w="100%"
                          py={1}
                          color="black.100"
                          position="relative"
                          border="none"
                          fontWeight="normal"
                          rounded="md"
                          bgColor={
                            isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined
                            )
                              ? useColorModeValue("gray.5", "gray.l5")
                              : "transparent"
                          }
                        >
                          <Flex alignItems="center" fontSize="sm">
                            {isPathActive(menuItem.link, true) && (
                              <Box
                                bg={useColorModeValue(
                                  "brand.primary.alpha",
                                  "brand.secondary.beta"
                                )}
                                width={1}
                                height="4"
                                rounded="full"
                                position="absolute"
                                left={0}
                              />
                            )}
                            {isExpanded ? (
                              <ChevronDownIcon
                                boxSize={5}
                                color={useColorModeValue("gray.20", "gray.l20")}
                              />
                            ) : (
                              <ChevronRightIcon
                                boxSize={5}
                                color={useColorModeValue("gray.20", "gray.l20")}
                              />
                            )}
                            <Icon
                              as={menuItem.icon}
                              mx={2}
                              boxSize={4}
                              color={
                                isPathActive(
                                  menuItem.link,
                                  menuItem.submenu != undefined
                                )
                                  ? useColorModeValue(
                                      "brand.primary.alpha",
                                      "white.100"
                                    )
                                  : useColorModeValue(
                                      "brand.primary.alpha",
                                      "white.100"
                                    )
                              }
                            />
                            <Text textStyle="base">{menuItem.name}</Text>
                          </Flex>
                        </AccordionButton>
                        <AccordionPanel color="black" p="0" w="100%">
                          {menuItem.submenu.map((submenuItem, index) => (
                            <Box
                              key={`submenu-item-${index}`}
                              onClick={() => switchPage(submenuItem.link)}
                              display="flex"
                              alignItems="center"
                              _hover={{
                                cursor: "pointer",
                                bgColor: useColorModeValue("gray.5", "gray.80"),
                              }}
                              w="100%"
                              py={1}
                              px="24px"
                              marginTop="0"
                              position="relative"
                              rounded="md"
                              fontWeight={
                                isPathActive(submenuItem.link, false) // not a parent
                                  ? "semibold"
                                  : "normal"
                              }
                              bgColor={
                                isPathActive(submenuItem.link, false) // not a parent
                                  ? useColorModeValue("gray.5", "gray.80")
                                  : "transparent"
                              }
                            >
                              {isPathActive(submenuItem.link, false) && (
                                <Box
                                  bg={useColorModeValue(
                                    "brand.primary.alpha",
                                    "brand.secondary.beta"
                                  )}
                                  width={1}
                                  height="4"
                                  rounded="full"
                                  position="absolute"
                                  left={0}
                                />
                              )}
                              <Flex alignItems="center">
                                <Text textStyle="base" ml={12}>
                                  {submenuItem.name}
                                </Text>
                              </Flex>
                            </Box>
                          ))}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ) : (
                  <AccordionItem
                    onClick={() => switchPage(menuItem.link)}
                    display="flex"
                    alignItems="center"
                    _hover={{
                      bgColor: "nav.highlight",
                    }}
                    w="100%"
                    py={5}
                    px="24px"
                    color="black"
                    border="none"
                    fontWeight={
                      isPathActive(menuItem.link, menuItem.submenu != undefined)
                        ? "semibold"
                        : "normal"
                    }
                    bgColor={
                      isPathActive(menuItem.link, menuItem.submenu != undefined)
                        ? "nav.highlight"
                        : ""
                    }
                  >
                    <Flex alignItems="center" fontSize="14px">
                      <Icon
                        as={menuItem.icon}
                        mr={6}
                        w={6}
                        h={6}
                        color={
                          isPathActive(
                            menuItem.link,
                            menuItem.submenu != undefined
                          )
                            ? "iconGray.200"
                            : "iconGray.100"
                        }
                      />
                      {menuItem.name}
                    </Flex>
                  </AccordionItem>
                )}
              </VStack>
            ))}
          </Accordion>
        </VStack>
      </Box>
      <Box w="100%" textAlign="center">
        <LogoIcon boxSize={24} color="brand.secondary.gamma" />
      </Box>
    </Flex>
  );
}