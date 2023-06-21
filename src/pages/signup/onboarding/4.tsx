import React from "react";
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
  HStack,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { Page } from "@/components/layout/Page";

import { RadioField } from "@/components/forms/RadioField";
import { InputField } from "@/components/forms/InputField";

import { FiChevronLeft } from "react-icons/fi";
import { LineUpDownIcon } from "@/components/base/Icons";

const Onboarding_4 = () => {

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
                  type="text"
                  variant="customOutline2"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />

                <InputField
                  label="Card Number"
                  type="number"
                  variant="customOutline2"
                  pattern="[0-9.]+"
                  isError={false}
                  errorMessage={"Field is compulsory"}
                />

                <Stack
                  spacing={3}
                  direction={["column", "row"]}
                  w="100%"
                >
                  <Box w="70%">
                    <RadioField
                      label="Expiration Date"
                      isError={false}
                      errorMessage="Field is compulsory"
                    >
                      <HStack w="100%" spacing={3}>
                        <Select placeholder="Day" w="100%"  icon={<LineUpDownIcon />}>
                          <option value="option1">1</option>
                          <option value="option2">2</option>
                          <option value="option3">3</option>
                        </Select>

                        <Select placeholder="Month" w="100%" icon={<LineUpDownIcon />}>
                          <option value="option1">Jan</option>
                          <option value="option2">Feb</option>
                          <option value="option3">Mar</option>
                          <option value="option1">Apr</option>
                          <option value="option2">May</option>
                          <option value="option3">Jun</option>
                          <option value="option1">Jul</option>
                          <option value="option2">Aug</option>
                          <option value="option3">Sep</option>
                          <option value="option1">Oct</option>
                          <option value="option2">Nov</option>
                          <option value="option3">Dec</option>
                        </Select>
                      </HStack>
                    </RadioField>
                  </Box>
                  <Box w="30%">
                    <InputField
                      label="CVV"
                      placeholder="CVV"
                      type="number"
                      max={3}
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
