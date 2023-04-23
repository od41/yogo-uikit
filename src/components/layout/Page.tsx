import React, { PropsWithChildren, FC } from "react";
import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Head from 'next/head'

import { Navbar } from "@root/components/navigation/Navbar";
import { Sidebar } from "@root/components/navigation/Sidebar";
import { MobileNavbar } from "@root/components/navigation/MobileNavbar";

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

      <Grid templateColumns={{ base: "1", md: "230px 1fr" }}>
        {!isMobile && (
          <GridItem>
            <Sidebar />

          </GridItem>
        )}

        <GridItem
          minHeight="100vh"
          w="100%"
          overflowX="hidden"
        >
          {isMobile ? <MobileNavbar /> : <Navbar />}
          {children}
        </GridItem>
      </Grid>
    </>
  );
}