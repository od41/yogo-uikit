import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { theme } from "@/theme";

import { MyContextProvider } from "@/context";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <MyContextProvider>
      <ChakraProvider theme={theme}>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </ChakraProvider>
    </MyContextProvider>
  );
}
