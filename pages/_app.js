import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'

function MyApp({ Component, pageProps }) {

	if (process.browser) {
		ReactGA.initialize('G-K90QLYFF0M')
		ReactGA.pageview(window.location.pathname + window.location.search)
	}

	return (
		<ChakraProvider>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
