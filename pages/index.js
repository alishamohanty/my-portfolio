import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Box, SimpleGrid } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box>
			<Navbar></Navbar>
			<Box postion="relative">
				<SimpleGrid
					align="center"
					justify={{ base: 'center', md: 'space-around' }}
					direction={{ base: 'column-reverse', md: 'row' }}
					minH={[50, 60, 70]}
					px={8}
					mb={8}
					pt={[20, 50, 70, 120]}
          pb={[10, 30, 50, 70]}
          mx={[10,20,30,40]}
				>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</SimpleGrid>
			</Box>
			<Footer></Footer>
		</Box>
	);
}
