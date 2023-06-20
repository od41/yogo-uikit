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
  HStack,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { Page } from "@/components/layout/Page";

import { RadioField } from "@/components/forms/RadioField";
import { InputField } from "@/components/forms/InputField";

import {
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { LineUpDownIcon } from "@/components/base/Icons";

const Onboarding_3 = () => {

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
                  Owner Details
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
                  label="Business Name"
                  type="text"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />

                <InputField
                  label="Shortened Descriptor"
                  type="text"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />

                <RadioField
                  label="Corporation Type"
                  isError={false}
                  errorMessage="Field is compulsory"
                >
                  <Select placeholder="Select" icon={<LineUpDownIcon />}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </RadioField>

                <RadioField
                  label="Business Description"
                  isError={false}
                  errorMessage="Field is compulsory"
                >
                  <Textarea />
                </RadioField>

                <InputField
                  label="Contact Email"
                  type="email"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />
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

export default Onboarding_3;
