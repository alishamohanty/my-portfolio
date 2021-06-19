import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import Router from 'next/router'
import * as gtag from '../utils/gtag'
import theme from '../theme/theme'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {

	return (
		<ChakraProvider theme={theme}>
			<Layout>
			<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
