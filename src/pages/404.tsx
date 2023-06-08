import React from "react";
import NextLink from 'next/link'
import {
  Link,
  Text,
  VStack,
  Card,
  CardBody,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

import { Page } from "@rootcomponents/layout/Page";

const backgroundImage = require("@root/assets/404.jpg");

const Error404 = () => {
  
  return (
    <Page
      title="That page is missing | AppBlocks"
      isNavbar={false}
      isFooter={false}
    >
      <VStack
        overflowY="hidden"
        height="100vh"
        w="100%"
        top={0}
        left={0}
        position="absolute"
        bgImage={`url(${backgroundImage.default.src})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="bottom"
      ></VStack>

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
                404 Not Found
              </Text>
              <Text textStyle="mid" align="center">
                Sorry, we can't find that page.
              </Text>
            </VStack>

            <Divider my={6} />

            <Text textStyle="mid">
              Go back{" "}
              <Link variant="brandPrimary" as={NextLink} href={"/"}>
                Home
              </Link>
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </Page>
  );
};

export default Error404;
