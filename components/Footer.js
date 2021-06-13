import { Box, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Text } from '@chakra-ui/layout';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter , FaMedium, FaGoogle} from 'react-icons/fa';

const Footer = () => (
	<Box
		as="footer"
		role="contentinfo"
		mx="auto"
		maxW="7xl"
		py={[2, 2, 2, 4]}
		px={{ base: '4', md: '8' }}
	>
		<Stack>
			<Stack direction="row" spacing="4" align="center" alignItems="center">
				<ButtonGroup variant="ghost" color="gray.600" margin="auto">
					<IconButton
						as="a"
						href="https://www.linkedin.com/in/alisha-mohanty-573197140/"
						aria-label="LinkedIn"
						icon={<FaLinkedin fontSize="20px" />}
					/>
					<IconButton
						as="a"
						href="https://github.com/alishamohanty"
						aria-label="GitHub"
						icon={<FaGithub fontSize="20px" />}
					/>
					<IconButton
						as="a"
						href="https://twitter.com/alisham__"
						aria-label="Twitter"
						icon={<FaTwitter fontSize="20px" />}
					/>
					<IconButton
						as="a"
						href="https://medium.com/@alishapapun"
						aria-label="Medium"
						icon={<FaMedium fontSize="20px" />}
          />
          <IconButton
						as="a"
						href="mailto:alishamohanty1416@gmail.com"
						aria-label="Gmail"
						icon={<FaGoogle fontSize="20px" />}
					/>
				</ButtonGroup>
			</Stack>
			<Text
				fontSize="sm"
				alignSelf={{ base: 'center' }}
				margin="auto"
				textAlign="center"
			>
				&copy; {new Date().getFullYear()} Alisha Mohanty, All rights reserved.
			</Text>
		</Stack>
	</Box>
);

export default Footer;
