import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app'

import '../styles/globals.css'

import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Header />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
