import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Wrapper>
        <Component {...pageProps} />
			</Wrapper>
      <Footer />
    </>
  )
}

export default MyApp
