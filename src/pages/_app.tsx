import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return  <>
            <Head>
              <link rel="shortcut icon" href="/icos/favicon.ico" />
              <link rel="apple-touch-icon" sizes="180x180" href="/icos/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/icos/favicon-32x32.png"/>
              <link rel="icon" type="image/png" sizes="16x16" href="/icos/favicon-16x16.png"/>
            </Head>
            <Component {...pageProps} />
          </>
}

export default MyApp