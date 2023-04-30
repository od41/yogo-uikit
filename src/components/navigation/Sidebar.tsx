import React from "react";

import { useRouter } from "next/router";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

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
  useAccordion,
} from "@chakra-ui/react";


import { sidebarMenu } from "@root/utils/constants";

export const Sidebar = (props: any) => {
  const router = useRouter();

  const isPathActive = (path: string, isParent: boolean) => {
    if (isParent) return router.asPath.includes(path);

    return router.asPath.endsWith(path);
  };

  const switchPage = (link: string) => {
    router.push({ pathname: link }, undefined, {
      shallow: true,
    });
  };

  return (
    <Flex
      minH="100vh"
      flexDir="column"
      top={0}
      left={0}
      position="sticky"
      borderRight="1px"
      borderColor="#e5e5e5"
    >
      <Flex
        px="24px"
        width="100%"
        height="73px"
        borderRadius="md"
        mb={4}
        color="black"
        fontSize="14px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center">
          <Avatar
            name="Coca Cola Ltd"
            bgColor="nav.highlight"
            color="gray.25"
            size="sm"
            mr={2}
          />
          <Box>
            <Text fontSize="sm" color="#1c1c1c" fontWeight="semibold">
              John Wick
            </Text>
          </Box>
        </Flex>
      </Flex>

      <VStack gap={0} alignItems="flex-start">
        <Text fontSize="sm" color="#999999" pl={6} mb={2} >
          Pages
        </Text>
        <Accordion w="100%" allowMultiple>
          {sidebarMenu.map((menuItem, index) => (
            <VStack key={`menu-item-${index}`} gap={0} spacing={0} w="100%">
              {menuItem.submenu ? (
                <AccordionItem w="100%" border="none" px={6}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        _hover={{
                          bgColor: "nav.highlight",
                        }}
                        w="100%"
                        py={1}
                        color="black"
                        position="relative"
                        border="none"
                        fontWeight="normal"
                        rounded="md"
                        bgColor={
                          isPathActive(
                            menuItem.link,
                            menuItem.submenu != undefined
                          )
                            ? "#f2f2f2"
                            : "transparent"
                        }
                      >
                        <Flex alignItems="center" fontSize="sm">
                          {isPathActive(menuItem.link, true) && (
                            <Box
                              bg="#1c1c1c"
                              width={1}
                              height="4"
                              rounded="full"
                              position="absolute"
                              left={0}
                            />
                          )}
                          {isExpanded ? (
                            <ChevronDownIcon boxSize={5} color="#CCCCCC" />
                          ) : (
                            <ChevronRightIcon boxSize={5} color="#CCCCCC" />
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
                                ? "iconGray.200"
                                : "iconGray.100"
                            }
                          />
                          {menuItem.name}
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
                              bgColor: "#f2f2f2",
                            }}
                            w="100%"
                            py={2}
                            px="24px"
                            marginTop="0"
                            position="relative"
                            color={
                              isPathActive(submenuItem.link, false) // not a parent
                                ? "black"
                                : "black"
                            }
                            fontWeight={
                              isPathActive(submenuItem.link, false) // not a parent
                                ? "semibold"
                                : "normal"
                            }
                            bgColor={
                              isPathActive(submenuItem.link, false) // not a parent
                                ? "nav.highlight"
                                : ""
                            }
                          >
                            {isPathActive(submenuItem.link, false) && (
                              <Box
                                bg="#1c1c1c"
                                width={1}
                                height="4"
                                rounded="full"
                                position="absolute"
                                left={0}
                              />
                            )}
                            <Flex alignItems="center">
                              <Text ml={12} fontSize="14px">
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
    </Flex>
  );
};
