// import { GeistProvider, CssBaseline } from '@geist-ui/core'
import '../styles/globals.css';
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
      <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      </>
  )
}

export default App