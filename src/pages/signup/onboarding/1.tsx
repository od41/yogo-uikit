import React, {useState} from 'react'
import NextLink from 'next/link'
import {
  Card,
  CardBody,
  Link,
  VStack,
  useColorModeValue,
  Text,
  Button,
  Stack,
  useRadioGroup,
} from "@chakra-ui/react";

import { Page } from '@rootcomponents/layout/Page';

import { RadioCard } from '@rootcomponents/cards/RadioCard'

import { FiUser, FiBriefcase } from 'react-icons/fi'

const TwoFactorAuthentication = () => {
    const options = [
        {
          icon: FiUser,
          key: "personal",
          heading: "Personal Account",
          content:
            "Lorem ipsum, dolor sit amet",
        },
    
        {
          icon: FiBriefcase,
          key: "corporate",
          heading: "Corporate Account",
          content:
            "Lorem ipsum, dolor sit amet",
        },
      ];
    
      const { getRootProps, getRadioProps } = useRadioGroup({
        name: "usage-rate",
        defaultValue: "precise",
        onChange: console.log,
      });
    
      const group = getRootProps();

  return (
    <>
      <Page title="Choose your account type | AppBlocks">
        <Card
          w={{
            base: "full",
            md: "600px",
          }}
          boxShadow={useColorModeValue(
            "0px 2px 40px rgba(224, 224, 224, 0.25)",
            "none"
          )}
          variant="filled"
          as="form"
          position="relative"
        >
          <CardBody px={8} py={12} rounded="lg">
            <VStack spacing={6} align={["start", "center"]} w="100%">
              <VStack spacing={3} w="100%">
                <Text as="h1" textStyle="h2">
                  Choose Account Type
                </Text>
                <Text textStyle="mid">
                    If you need more info, please check out{" "}
                  <Link as={NextLink} variant="brandPrimary" href={""}>
                    Help Page
                  </Link>
                </Text>
              </VStack>  

              <Stack
                spacing={3}
                direction={["column", "row"]}
                w="100%"
                {...group}
              >
                {options.map((value) => {
                  const key = value.key;
                  const radio = getRadioProps({
                    name: "usage-rate",
                    defaultValue: "precise",
                    onChange: console.log,
                  });
                  return <RadioCard key={key} {...radio} heading={value.heading} icon={value.icon} _key={key} content={value.content} variant="withIcon"/>;
                })}
              </Stack>

              <Button variant="solid" onClick={() => {}} w="100%">
                Continue
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </Page>
    </>
  );
}

export default TwoFactorAuthentication