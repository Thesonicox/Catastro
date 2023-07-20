import { ApolloProvider } from '@apollo/client'
import client from './api/apollo_client'
import '../styles/globals.css'
import type { AppProps } from 'next/app'


// Components
import { LayoutComponent } from '../src/components/Layout/LayoutComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ApolloProvider>
  )
}

export default MyApp
