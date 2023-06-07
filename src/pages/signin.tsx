import React from "react";
import NextLink from 'next/link'
import {
  Link,
  Text,
  VStack,
  Input,
  Button,
  Card,
  CardBody,
  Box,
  useColorModeValue,
  Stack,
  Divider,
} from "@chakra-ui/react";

import { Page } from "@root/components/layout/Page";

import { GoogleLogoIcon, AppleLogoIcon } from "@rootcomponents/base/Icons";

const backgroundImage = require("@root/assets/account_bg.jpg");

const SignIn = () => {
  const handleLogin = async () => {
    // do something
  };
  
  return (
    <Page 
      title="Sign In | AppBlocks" 
      isNavbar={false}
      isFooter={false}
    >

      {/* <Show above="sm"> */}
      <VStack
        overflowY="hidden"
        height="100vh"
        // w={{ base: "0", sm: "0", md: "60%", xl: "60%" }}
        w="100%"
        top={0}
        left={0}
        position="absolute"
        bgImage={`url(${backgroundImage.default.src})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="bottom"
      ></VStack>
      {/* </Show> */}

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
                Sign In
              </Text>
              <Text textStyle="mid">
                Lorem, ipsum dolor sit adipisicing elit.
              </Text>
            </VStack>

            <VStack w="100%" spacing={4}>
              <Stack direction={["column", "row"]} w="100%">
                <Button variant="customOutline" onClick={handleLogin} w="100%">
                  <GoogleLogoIcon w={4} h={5} mr={2} />
                  Sign in with Google
                </Button>
                <Button variant="customOutline" onClick={handleLogin} w="100%">
                  <AppleLogoIcon w={4} h={5} mr={2} />
                  Sign in with Apple
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

              <Box w="100%" textAlign="right">
                <Input
                  type="password"
                  variant="customSolid"
                  placeholder="Password"
                  autoComplete="password"
                  mb={2}
                />

                <Link variant="brandPrimary" as={NextLink} href={"/forgot-password"} textStyle="mid">Forgot Password?</Link>
              </Box>
            </VStack>

            <Button variant="solid" onClick={handleLogin} w="100%">
              Sign In
            </Button>

            <Text textStyle="mid">
              Don't have an account? <Link variant="brandPrimary" as={NextLink} href={"/signup"}>Sign up</Link>
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </Page>
  );
};

export default SignIn;
