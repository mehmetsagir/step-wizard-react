import 'nextra-theme-docs/style.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function Nextra({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
