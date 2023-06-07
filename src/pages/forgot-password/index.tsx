import React from 'react'
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
} from "@chakra-ui/react";

import { Page } from "@rootcomponents/layout/Page";

const ForgotPassword = () => {
  return (
    <>
      <Page title="Forgot Password? | AppBlocks">
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
                  Forgot Password?
                </Text>
                <Text textStyle="mid">
                  Enter your email to reset your password.
                </Text>
              </VStack>

              <Input
                type="email"
                variant="customSolid"
                placeholder="Enter your email"
                autoComplete="email"
              />

              <Button variant="solid" onClick={() => {}} w="100%">
                Submit
              </Button>

              <Link as={NextLink} variant="brandPrimary" href={""}>
                Back
              </Link>
            </VStack>
          </CardBody>
        </Card>
      </Page>
    </>
  );
}

export default ForgotPassword