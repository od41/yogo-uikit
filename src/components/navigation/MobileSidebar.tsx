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
} from "@chakra-ui/react";

import { FiMenu, FiHexagon, FiPlus, FiChevronDown, FiChevronRight } from "react-icons/fi";


export const sidebarMenu = [
  {
     icon: FiHexagon,
     name: 'Dashboard',
     link: '/dashboard',
     submenu: [
      {
         name: 'Trucks List',
         link: '/trucks',

      },
      {
         name: 'Maintenance',
         link: '/trucks/maintenance',

      },
      {
         name: 'Fueling',
         link: '/trucks/fueling',

      },
   ]
  },
]

export const MobileSidebar = () => {
    const router = useRouter();

  const isPathActive = (path: string, isParent: boolean) => {
    if(isParent)
        return router.asPath.includes(path)
    
    return router.asPath.endsWith(path);
  };

  return (
    <Flex
      bgColor="nav.base"
      minH="100vh"
      flexDir="column"
      top={0}
      left={0}
      position="sticky"
    >
      <Flex
        px="24px"
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
            name="Coca Cola Ltd"
            bgColor="nav.highlight"
            color="gray.25"
            size="sm"
            mr={4}
          />
          <Box>
            <Text fontSize={15} color="white" fontWeight="semibold">
              Coca Cola Ltd.
            </Text>
            <Text>Client</Text>
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
        <Accordion w="100%" allowMultiple >
          {sidebarMenu.map((menuItem, index) => (
            <VStack key={`menu-item-${index}`} gap={0} spacing={0} w="100%">
              {menuItem.submenu ? (
                <AccordionItem w="100%" border="none" >
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
                        py={5}
                        px="24px"
                        color="white"
                        border="none"
                        fontWeight={
                          isPathActive(menuItem.link, menuItem.submenu != undefined) ? "semibold" : "normal"
                        }
                        bgColor={
                          isPathActive(menuItem.link, menuItem.submenu != undefined) ? "nav.highlight" : ""
                        }
                      >
                        <Flex alignItems="center" fontSize="14px">
                          <Icon
                            as={menuItem.icon}
                            mr={6}
                            w={6}
                            h={6}
                            color={
                              isPathActive(menuItem.link, menuItem.submenu != undefined)
                                ? "iconGray.200"
                                : "iconGray.100"
                            }
                          />
                          {menuItem.name}
                        </Flex>
                        {isExpanded ? (
                          <FiChevronDown fontSize="12px" color="iconGray.100" />
                        ) : (
                          <FiChevronRight fontSize="12px" color="iconGray.100" />
                        )}
                      </AccordionButton>
                      <AccordionPanel color="white" p="0" w="100%">
                        {menuItem.submenu.map((submenuItem, index) => (
                          <Box
                            as="a"
                            key={`submenu-item-${index}`}
                            href={submenuItem.link}
                            display="flex"
                            alignItems="center"
                            _hover={{
                              bgColor: "nav.highlight",
                            }}
                            w="100%"
                            py={5}
                            px="24px"
                            marginTop="0"
                            color={
                              isPathActive(submenuItem.link, false) // not a parent
                                ? "white"
                                : "rgba(255,255,255,0.5)"
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
                  as="a"
                  href={menuItem.link}
                  display="flex"
                  alignItems="center"
                  _hover={{
                    bgColor: "nav.highlight",
                  }}
                  w="100%"
                  py={5}
                  px="24px"
                  color="white"
                  border="none"
                  fontWeight={
                    isPathActive(menuItem.link, menuItem.submenu != undefined) ? "semibold" : "normal"
                  }
                  bgColor={isPathActive(menuItem.link, menuItem.submenu != undefined) ? "nav.highlight" : ""}
                >
                  <Flex alignItems="center" fontSize="14px">
                    <Icon
                      as={menuItem.icon}
                      mr={6}
                      w={6}
                      h={6}
                      color={
                        isPathActive(menuItem.link, menuItem.submenu != undefined)
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
}