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
  Box,
  Checkbox,
  Flex,
} from "@chakra-ui/react";

import { Page } from "@root/components/layout/Page";

import { PasswordStrengthIndicator } from '@rootcomponents/forms/PasswordStrengthIndicator';

const NewPassword = () => {
    const [password, setPassword] = useState("")
  const handleSetupNewPassword = async () => {}
  return (
    <>
      <Page title="Setup New Password | AppBlocks">
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
                  Setup New Password
                </Text>
                <Text textStyle="mid">
                  Have you already reset the password?{" "}
                  <Link as={NextLink} variant="brandPrimary" href={""}>
                    Sign in
                  </Link>
                </Text>
              </VStack>

              <VStack spacing={6} align="start" w="100%">
                <Box w="100%" textAlign="left">
                  <Input
                    type="password"
                    variant="customSolid"
                    placeholder="Password"
                    autoComplete="password"
                    mb={2}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <PasswordStrengthIndicator password={password} />

                  <Text textStyle="small">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols.
                  </Text>
                </Box>

                <Box w="100%" textAlign="left">
                  <Input
                    type="password"
                    variant="customSolid"
                    placeholder="Repeat Password"
                    autoComplete="password"
                    mb={2}
                  />

                  <Text as={Flex} textStyle="mid" alignItems="center">
                    <Checkbox colorScheme="purple" mr={1}>I accept the</Checkbox>
                    <Link as={NextLink} variant="brandPrimary" href={""} fontSize="15px">
                      Terms &amp; Conditions
                    </Link>
                  </Text>
                </Box>
              </VStack>

              <Button variant="solid" onClick={handleSetupNewPassword} w="100%">
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

export default NewPassword