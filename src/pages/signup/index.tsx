import React, {useState} from 'react'
import NextLink from 'next/link'
import {
  Card,
  CardBody,
  Link,
  VStack,
  useColorModeValue,
  Text,
  Stack,
  Button,
  Input,
  Box,
  Divider,
  Flex,
  Checkbox,
} from "@chakra-ui/react";

import { GoogleLogoIcon, AppleLogoIcon } from "@/components/base/Icons";
import { Page } from "@/components/layout/Page";
import { PasswordStrengthIndicator } from '@/components/forms/PasswordStrengthIndicator';

const Register = () => {
  const [password, setPassword] = useState("")
  const handleRegister = async () => {}
  return (
    <>
      <Page title="Choose your account type | AppBlocks">
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
                  Sign Up
                </Text>
                <Text textStyle="mid">
                  Lorem, ipsum dolor sit adipisicing elit.
                </Text>
              </VStack>

              <VStack w="100%" spacing={4}>
                <Stack direction={["column", "row"]} w="100%">
                  <Button
                    variant="customOutline"
                    onClick={handleRegister}
                    w="100%"
                  >
                    <GoogleLogoIcon w={4} h={5} mr={2} />
                    Sign up with Google
                  </Button>
                  <Button
                    variant="customOutline"
                    onClick={handleRegister}
                    w="100%"
                  >
                    <AppleLogoIcon w={4} h={5} mr={2} />
                    Sign up with Apple
                  </Button>
                </Stack>
              </VStack>
              <Divider my={6} />

              <VStack spacing={6} align="start" w="100%">
                <Input
                  type="email"
                  variant="customSolid"
                  placeholder="Email"
                  autoComplete="email"
                />

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
                    <Checkbox colorScheme="purple" mr={1}>
                      I accept the
                    </Checkbox>
                    <Link
                      as={NextLink}
                      variant="brandPrimary"
                      href={""}
                      fontSize="15px"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </Text>
                </Box>
              </VStack>

              <Button variant="solid" onClick={handleRegister} w="100%">
                Sign Up
              </Button>

              <Text textStyle="mid">
                Already have an account?{" "}
                <Link as={NextLink} variant="brandPrimary" href={""}>
                  Sign in
                </Link>
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </Page>
    </>
  );
}

export default Register