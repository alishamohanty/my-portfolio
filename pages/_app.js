import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import ReactGA from 'react-ga'

function MyApp({ Component, pageProps }) {

	if (process.browser) {
		ReactGA.initialize('G-K90QLYFF0M')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

	return (
		<ChakraProvider>
			<Layout>
			<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
