import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Box, SimpleGrid, Text, Image, Flex } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box>
			<Box postion="relative">
				<SimpleGrid
					align="center"
					justify={{ base: 'center', md: 'space-around' }}
					direction={{ base: 'column-reverse', md: 'row' }}
					minH={[50, 60, 70]}
					px={[2,2,2,8]}
					pt={[10, 30, 30, 50]}
					pb={[10, 30, 30, 50]}
					mx={[10, 20, 20, 40]}
				>
					<Box pb={4}>
						<Image
							borderRadius="full"
							boxSize="170px"
							src="alisha-bg.jpg"
							alt="Alisha Mohanty"
						/>
					</Box>
					<Box>
						Namaste. I am <Text as="abbr" fontWeight="bold">Alisha Mohanty</Text>, Software Engineer working at
						Accenture, open source contributer and a freelancer from India.
						Developing software since 2018.
						<br />I am an ambivert who loves to discover new art and culture and
						understand human psychology. My vibe is mostly lofi music, sipping
						coffee and scribbling my ipad while being close to nature. Always up
						for working on new ideas, learning new skills, technologies tools
						and sharing conversations.🙃
					</Box>
				</SimpleGrid>
			</Box>
		</Box>
	);
}
