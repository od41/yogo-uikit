import React from 'react'

import { Page } from '@root/components/layout/Page'
import {
    VStack,
    Flex,
    Box,
    CardFooter,
    Card,
    CardHeader,
    CardBody,
    Text, 
    Icon,
    SimpleGrid,
    Divider,
  } from "@chakra-ui/react";

import { ActivityList } from "@rootcomponents/lists/ActivityList";

import { FiPocket } from "react-icons/fi";

import { notifications } from '@rootcomponents/navigation/RightSidebar';

export const OverviewTab = () => {
  return (
    <>
      <VStack w="100%" spacing={6} alignItems="flex-start">
        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          w="100%"
        >
          <Card variant="filled">
            <CardHeader mb={4}>
              <Flex w="100%" justify="space-between">
                <Text textStyle="h4">Coffee detail page</Text>
                <Icon
                  as={FiPocket}
                  p={1.5}
                  rounded="full"
                  w={8}
                  h={8}
                  color="brand.secondary.f"
                  bg="brand.secondary.kappa50"
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex
                w="100%"
                justify="space-between"
                alignItems="center"
                h="50px"
                mt={2}
              >
                <VStack spacing={2} align="flex-start">
                  <Text textStyle="mid">Status</Text>
                  <Text textStyle="h3">49</Text>
                </VStack>

                <Divider orientation="vertical" />

                <VStack spacing={2} align="flex-start">
                  <Text textStyle="mid">Total Tasks</Text>
                  <Text textStyle="h3">15 / 48</Text>
                </VStack>

                <Divider orientation="vertical" />

                <VStack spacing={2} align="flex-start">
                  <Text textStyle="mid">Due Date</Text>
                  <Text textStyle="h3">29 Jan, 2022</Text>
                </VStack>

                <Divider orientation="vertical" />

                <VStack spacing={2} align="flex-start">
                  <Text textStyle="mid">Budget Spent</Text>
                  <Text textStyle="h3">$15,000</Text>
                </VStack>
              </Flex>
            </CardBody>
          </Card>
        </SimpleGrid>

        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fit, minmax(320px, 1fr))"
          w="100%"
        >
          <Card variant="filled" bg="#F7F9FB">
            <CardHeader mb={4}>
              <Text textStyle="h3">What's on the road?</Text>
            </CardHeader>
            <CardBody>
              <ActivityList list={notifications} />
            </CardBody>
          </Card>

          <Card variant="filled" bg="#F7F9FB">
            <CardHeader mb={4}>
              <Text textStyle="h3">Latest Files</Text>
            </CardHeader>
            <CardBody>
              content
            </CardBody>
          </Card>
        </SimpleGrid>

        <SimpleGrid
          spacing={6}
          templateColumns="repeat(auto-fit, minmax(320px, 1fr))"
          w="100%"
        >
          <Card variant="filled" bg="#F7F9FB">
            <CardHeader mb={4}>
              <Text textStyle="h3">Project Spendings</Text>
            </CardHeader>
            <CardBody>
              content
            </CardBody>
          </Card>
        </SimpleGrid>
      </VStack>
    </>
  );
}