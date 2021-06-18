import { Box, SimpleGrid, Text, Image, Flex } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box>
			<Box postion="relative">
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
			</Box>
		</Box>
	);
}
