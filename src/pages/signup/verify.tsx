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
  Input,
  PinInput, 
  PinInputField,
  HStack,
  Flex,
} from "@chakra-ui/react";

import { Page } from "@root/components/layout/Page";

const TwoStepVerification = () => {
    const [phoneNumber, setPhoneNumber] = useState("080123456789")

    const hideNumber = (number: string) => {
        const numberArray = number.split("")
        const hiddenNumber = numberArray.map((number, index) => {
            if (index >= 0 && index < 8) {
                return "*"
            }
            return number
        })
        return hiddenNumber.join("")
    }
  return (
    <>
      <Page title="Two Step Verification | AppBlocks">
        <Card
          w={{
            base: "full",
            md: "423px",
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
                  Two Step Verification
                </Text>
                <Text textStyle="mid">
                  Enter the verification code we sent to
                </Text>
              </VStack>

              <Text textStyle="h3">{hideNumber(phoneNumber)}</Text>

              <HStack spacing={3}>
                <PinInput otp mask size="lg">
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>

              <Button variant="solid" onClick={() => {}} w="100%">
                Submit
              </Button>

              <Text textStyle="mid" alignItems="center">
                Didn't receive the code?{" "}
                <Link
                  as={NextLink}
                  variant="brandPrimary"
                  href={""}
                  fontSize="15px"
                >
                  Resend code
                </Link>
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Page>
    </>
  );
}

export default TwoStepVerification