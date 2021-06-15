import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Router from 'next/router'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {

	return (
		<ChakraProvider>
			<Layout>
			<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
