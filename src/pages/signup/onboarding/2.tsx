import React, { useState } from "react";
import NextLink from "next/link";
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
  HStack,
} from "@chakra-ui/react";

import { Page } from "@/components/layout/Page";

import { RadioCard } from "@/components/cards/RadioCard";
import { RadioField } from "@/components/forms/RadioField";
import { InputField } from "@/components/forms/InputField";

import { FiUser, FiBriefcase, FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Onboarding_2 = () => {
  const accountPlanOptions = [
    {
      icon: FiBriefcase,
      key: "company",
      heading: "Company Account",
      content: "Lorem ipsum, dolor sit amet",
    },

    {
      icon: FiUser,
      key: "developer",
      heading: "Developer Account",
      content: "Lorem ipsum, dolor sit amet",
    },
    {
      icon: FiUser,
      key: "developer",
      heading: "Developer Account",
      content: "Lorem ipsum, dolor sit amet",
    },
  ];

  const teamSizeOptions = [
    {
      key: "1",
      heading: "1-1",
    },
    {
      key: "2",
      heading: "2-10",
    },
    {
      key: "3",
      heading: "10-50",
    },
    {
      key: "4",
      heading: "50+",
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
      <Page title="Account Information | AppBlocks">
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
          // position="relative"
        >
          <CardBody px={8} py={12} rounded="lg">
            <VStack spacing={6} align={["start", "center"]} w="100%">
              <VStack spacing={3} w="100%">
                <Text as="h1" textStyle="h2">
                  Account Information
                </Text>
                <Text textStyle="mid">
                  If you need more info, please check out{" "}
                  <Link as={NextLink} variant="brandPrimary" href={""}>
                    Help Page
                  </Link>
                </Text>
              </VStack>

              <VStack w="100%" spacing={5}>
                <RadioField
                  label="Specify Team Size"
                  isError={false}
                  errorMessage="Field is compulsory"
                  helpText="Customers will see this shortened version of your statement descriptor."
                >
                  <Stack
                    spacing={3}
                    direction={["column", "row"]}
                    w="100%"
                    {...group}
                  >
                    {teamSizeOptions.map((value) => {
                      const key = value.key;
                      const radio = getRadioProps({
                        name: "usage-rate",
                        defaultValue: "precise",
                        onChange: console.log,
                      });
                      return (
                        <RadioCard
                          key={key}
                          {...radio}
                          heading={value.heading}
                          _key={key}
                          variant="basic"
                        />
                      );
                    })}
                  </Stack>
                </RadioField>

                <InputField
                  label="Team Account Name"
                  type="text"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />

                <RadioField
                  label="Select Account Plan"
                  isError={false}
                  errorMessage="Field is compulsory"
                  helpText="Customers will see this shortened version of your statement descriptor."
                >
                  <VStack
                    spacing={3}
                    direction={["column", "row"]}
                    w="100%"
                    {...group}
                  >
                    {accountPlanOptions.map((value) => {
                      const key = value.key;
                      const radio = getRadioProps({
                        name: "account-plan",
                        defaultValue: "company",
                        onChange: console.log,
                      });
                      return (
                        <RadioCard
                          key={key}
                          {...radio}
                          heading={value.heading}
                          content={value.content}
                          icon={value.icon}
                          _key={key}
                          variant="withIcon"
                        />
                      );
                    })}
                  </VStack>
                </RadioField>
              </VStack>

              <HStack w="100%">
              <Button variant="ghost" onClick={() => {}} w="100%">
                <FiChevronLeft />
                Previous
              </Button>

              <Button variant="solid" onClick={() => {}} w="100%">
                Continue
                <FiChevronRight />
              </Button>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </Page>
    </>
  );
};

export default Onboarding_2;
