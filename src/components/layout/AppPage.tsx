import React, { PropsWithChildren, FC, useContext } from "react";
import { Box, Flex, Grid, GridItem, useBreakpointValue, VStack } from "@chakra-ui/react";
import Head from 'next/head'

import { Navbar } from "@root/components/navigation/Navbar";
import { Sidebar } from "@root/components/navigation/Sidebar";
import { RightSidebar } from "@root/components/navigation/RightSidebar";
import { MobileNavbar } from "@root/components/navigation/MobileNavbar";

import { SidebarContext } from "@root/context/SidebarContext";

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export const AppPage = ({
  title = "Yogo UI Kit by AppBlocks",
  description = "Shave off 100 hours with an AppBlocks UI Kit",
  children,
}: PageProps) => {
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
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Grid
        templateColumns={{ base: "1", md: sidebarGridCssRules() }}
        _dark={{
          bg: "black.100",
          color: "gray.l80",
          borderColor: "gray.80",
        }}
      >
        {!isMobile && sidebarState.leftSidebar && (
          <GridItem>
            <Sidebar />
          </GridItem>
        )}

        <GridItem
          minHeight="100vh"
          w="100%"
          // overflow="visible"
          // overflowX="hidden"
        >
          {isMobile ? <MobileNavbar /> : <Navbar />}
          <Flex p={"2rem"} w="100%">
            {children}
          </Flex>
        </GridItem>

        {!isMobile && sidebarState.rightSidebar && (
          <GridItem>
            <RightSidebar />
          </GridItem>
        )}
      </Grid>
    </>
  );
}