import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import { Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
	return (
    <>
      <Head>
        <title>AlishaM</title>
      </Head>
      <Navbar />
      <main>
        <Box
          align="center"
          justify={{ base: 'center', md: 'space-around' }}
          direction={{ base: 'column-reverse', md: 'row' }}
          minH={[50, 60, 100, 550]}
          px={[2, 2, 2, 8]}
          pt={[10, 30, 30, 50]}
          pb={[10, 30, 30, 50]}
          mx={[10, 10, 10, 50]}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
