import { ChakraProvider } from '@chakra-ui/react';
import { Goerli } from '@thirdweb-dev/chains';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider supportedChains={[Goerli]}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
