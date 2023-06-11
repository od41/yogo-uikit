import React from "react";

import { useRouter } from "next/router";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { switchPage } from "@root/utils/scripts";

import {
  Flex,
  Box,
  Avatar,
  IconButton,
  Text,
  VStack,
  Link,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";


import { sidebarMenu } from "@root/utils/constants";
import { LogoIcon } from '@root/components/base/Icons';

export const Sidebar = (props: any) => {
  const router = useRouter();

  const isPathActive = (path: string, isParent: boolean) => {
    if (isParent) return router.asPath.includes(path);

    return router.asPath.endsWith(path);
  };

  return (
    <Flex
      minH="100vh"
      flexDir="column"
      top={0}
      left={0}
      position="sticky"
      justify="space-between"
      borderRight="1px solid"
      borderColor="gray.10"
      _dark={{
        borderColor: "gray.l10",
      }}
    >
      <Box>
        <Flex
          px={4}
          width="100%"
          height="73px"
          borderRadius="md"
          mb={4}
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
        </Flex>

        <VStack gap={0} alignItems="flex-start" px={4}>
          <Text textStyle="mid" pr={0} mb={2}>
            Pages
          </Text>
          <Accordion w="100%" allowMultiple>
            {sidebarMenu.map((menuItem, index) => (
              <VStack key={`menu-item-${index}`} gap={0} spacing={0} w="100%">
                {menuItem.submenu ? (
                  <AccordionItem w="100%">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          position="relative"
                          bg={
                            isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined
                            )
                              ? "gray.5"
                              : "transparent"
                          }
                          _dark={{
                            bg: isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined
                            )
                              ? "gray.l5"
                              : "transparent",
                          }}
                        >
                          {isPathActive(menuItem.link, true) && (
                            <Box
                              bg="brand.primary.alpha"
                              _dark={{
                                bg: "brand.secondary.beta",
                              }}
                              width={1}
                              height="4"
                              rounded="full"
                              position="absolute"
                              left={0}
                            />
                          )}
                          <Flex alignItems="center" justify="flex-start">
                            <Icon
                              as={menuItem.icon}
                              mr={2}
                              boxSize={4}
                              color={
                                isPathActive(
                                  menuItem.link,
                                  menuItem.submenu != undefined
                                )
                                  ? "brand.primary.alpha"
                                  : "gray.80"
                              }
                              _dark={{
                                color: isPathActive(
                                  menuItem.link,
                                  menuItem.submenu != undefined
                                )
                                  ? "white.100"
                                  : "white.100",
                              }}
                            />
                            <Text textStyle="base">{menuItem.name}</Text>
                          </Flex>
                          {isExpanded ? (
                            <ChevronDownIcon
                              boxSize={5}
                              color="gray.20"
                              _dark={{
                                color: "gray.l40",
                              }}
                            />
                          ) : (
                            <ChevronRightIcon
                              boxSize={5}
                              color="gray.20"
                              _dark={{
                                color: "gray.l40",
                              }}
                            />
                          )}
                        </AccordionButton>
                        <AccordionPanel>
                          {menuItem.submenu.map((submenuItem, index) => (
                            <Box
                              key={`submenu-item-${index}`}
                              onClick={() =>
                                switchPage(submenuItem.link, router)
                              }
                              display="flex"
                              alignItems="center"
                              _hover={{
                                cursor: "pointer",
                                bgColor: "gray.5",
                                _dark: {
                                  bgColor: "gray.l80",
                                },
                              }}
                              w="100%"
                              py={2}
                              px={6}
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
                                  ? "gray.5"
                                  : "transparent"
                              }
                              _dark={{
                                bgColor: isPathActive(submenuItem.link, false) // not a parent
                                  ? "gray.l5"
                                  : "transparent",
                              }}
                            >
                              {isPathActive(submenuItem.link, false) && (
                                <Box
                                  bg="brand.primary.alpha"
                                  _dark={{
                                    bg: "brand.secondary.beta",
                                  }}
                                  width={1}
                                  height="4"
                                  rounded="full"
                                  position="absolute"
                                  left={0}
                                />
                              )}
                              <Flex alignItems="center">
                                <Text textStyle="base" ml={4}>
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
                  <AccordionItem w="100%" position="relative">
                    <AccordionButton
                      onClick={() => switchPage(menuItem.link, router)}
                      fontWeight={
                        isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined
                        )
                          ? "semibold"
                          : "normal"
                      }
                      bgColor={
                        isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined
                        )
                          ? "gray.5"
                          : ""
                      }
                      _dark={{
                        bgColor: isPathActive(
                          menuItem.link,
                          menuItem.submenu != undefined
                        )
                          ? "gray.l5"
                          : "",
                      }}
                    >
                      {isPathActive(menuItem.link, true) && (
                        <Box
                          bg="brand.primary.alpha"
                          _dark={{
                            bg: "brand.secondary.beta",
                          }}
                          width={1}
                          height="4"
                          rounded="full"
                          position="absolute"
                          left={0}
                        />
                      )}
                      <Flex align="center" justify="flex-start">
                        <Icon
                          as={menuItem.icon}
                          mr={2}
                          boxSize={4}
                          color={
                            isPathActive(
                              menuItem.link,
                              menuItem.submenu != undefined
                            )
                              ? "iconGray.200"
                              : "iconGray.100"
                          }
                        />
                        <Text textStyle="base">{menuItem.name} </Text>
                      </Flex>
                    </AccordionButton>
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
};
