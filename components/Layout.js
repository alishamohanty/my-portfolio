import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>AlishaM</title>
			</Head>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
