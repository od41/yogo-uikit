import React, { PropsWithChildren, FC, useContext } from "react";
import { Box, Flex, Grid, GridItem, useBreakpointValue, VStack } from "@chakra-ui/react";
import Head from 'next/head'

import { Navbar } from "@root/components/navigation/Navbar";
import { Sidebar } from "@root/components/navigation/Sidebar";
import { RightSidebar } from "@root/components/navigation/RightSidebar";
import { MobileNavbar } from "@root/components/navigation/MobileNavbar";

import { SidebarContext } from "@root/context/SidebarContext";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Page = ({children}: PageProps) => {
  const isMobile = useBreakpointValue(
    {
      base: true,
      sm: true,
      md: false,
      lg: false,
    },
    {
      ssr: true,
    }
  );

  const [sidebarState] = useContext(SidebarContext)

  const sidebarGridCssRules = () => {


    return `${sidebarState.leftSidebar ? '210px' : ''} 1fr ${sidebarState.rightSidebar ? '280px' : ''}`
  }

  return (
    <>
      <Head>
        <title>App Blocks V1</title>
        <meta
          name="description"
          content="Shave off 100 hours with App Blocks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid 
        templateColumns={{ base: "1", md: sidebarGridCssRules() }}
        _dark={{
          bg: "black.100",
          color: "gray.l80",
          borderColor: "gray.80"
        }}
      >
        {(!isMobile && sidebarState.leftSidebar) && (
          <GridItem>
            <Sidebar />
          </GridItem>
        )}

        <GridItem
          minHeight="100vh"
          w="100%"
          overflow="visible"
          // overflowX="hidden"
        >
          {isMobile ? <MobileNavbar /> : <Navbar />}
          <Flex
            p={7}
            w="100%"
          >
            {children}
          </Flex>
        </GridItem>

        {(!isMobile && sidebarState.rightSidebar) && (
          <GridItem>
            <RightSidebar />
          </GridItem>
        )}
      </Grid>
    </>
  );
}