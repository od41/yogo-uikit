import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { theme } from '@/theme'

import { MyContextProvider } from '@/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyContextProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MyContextProvider>
  );
}
