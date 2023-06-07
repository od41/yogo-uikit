import React, { useState } from "react";
import NextLink from "next/link";
import {
  Card,
  CardBody,
  Link,
  VStack,
  Box,
  useColorModeValue,
  Text,
  Button,
  Stack,
  useRadioGroup,
  HStack,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { Page } from "@rootcomponents/layout/Page";

import { RadioField } from "@rootcomponents/forms/RadioField";
import { InputField } from "@rootcomponents/forms/InputField";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { LineUpDownIcon } from "@rootcomponents/base/Icons";

const Onboarding_4 = () => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "usage-rate",
    defaultValue: "precise",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <Page title="Billing Details | AppBlocks">
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
        >
          <CardBody px={8} py={12} rounded="lg">
            <VStack spacing={6} align={["start", "center"]} w="100%">
              <VStack spacing={3} w="100%">
                <Text as="h1" textStyle="h2">
                  Billing Details
                </Text>
                <Text textStyle="mid">
                  If you need more info, please check out{" "}
                  <Link as={NextLink} variant="brandPrimary" href={""}>
                    Help Page
                  </Link>
                </Text>
              </VStack>

              <VStack w="100%" spacing={5}>
                <InputField
                  label="Name On Card"
                  type="number"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />

                <InputField
                  label="Card Number"
                  type="text"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />

                <Stack
                  spacing={3}
                  direction={["column", "row"]}
                  w="100%"
                  {...group}
                >
                  <Box w="70%">
                    <RadioField
                      label="Expiration Date"
                      isError={false}
                      errorMessage="Field is compulsory"
                    >
                      <HStack w="100%" spacing={3}>
                        <Select placeholder="Month" w="100%"  icon={<LineUpDownIcon />}>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>

                        <Select placeholder="Month" w="100%" icon={<LineUpDownIcon />}>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </HStack>
                    </RadioField>
                  </Box>
                  <Box w="30%">
                    <InputField
                      label="CVV"
                      placeholder="CVV"
                      type="number"
                      variant="customOutline2"
                      isError={false}
                      errorMessage={"Field is compulsory"}
                    />
                  </Box>
                </Stack>

                <RadioField
                  label="Business Description"
                  isError={false}
                  errorMessage="Field is compulsory"
                >
                  <Textarea />
                </RadioField>

                {/* <InputField
                  label="Contact Email"
                  type="email"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                /> */}
              </VStack>

              <HStack w="100%">
                <Button variant="ghost" onClick={() => {}} w="100%">
                  <FiChevronLeft />
                  Previous
                </Button>

                <Button variant="solid" onClick={() => {}} w="100%">
                  Submit
                </Button>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </Page>
    </>
  );
};

export default Onboarding_4;
