import React from 'react';
import Link from 'next/link';
import {
	Box,
	Stack,
	Heading,
	Flex
} from '@chakra-ui/react';
import { useRouter } from "next/router";
import Lottie from 'react-lottie'
import * as animationData from '../data/music.json'

const Navbar = (props) => {
  const router = useRouter()
	const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
    }
	const routeToLofi = () => {
		router.push('https://lofibolly-club.vercel.app/')
	}
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
      padding={2}
      pb={4}
			bg="#f5f5f5"
			color="white"
			boxShadow="0 5px 10px rgb(154 160 185 / 5%), 0 15px 40px rgb(166 173 201 / 20%)"
			pr={[4, 19, 50, 100]}
			pl={[4, 19, 50, 100]}
		>
			<Flex align="center" mr={5}>
				<Box objectFit="cover" alignSelf="end">
					<Link href="/" >
						<Heading size="lg" letterSpacing={'tighter'} color="#000" className="head">
							AlishaM
						</Heading>
					</Link>
				</Box>
			</Flex>
        <Box>
				<Stack
					alignSelf={{ base: 'right' }}
					direction={{ base: 'row', md: 'row' }}
					display={{ base:'flex', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems="right"
					color="black"
					flexGrow={1}
          mt={{ base: 2, md: 0 }}
          px={2}
        >
					<Box>
						<a target="_blank" href="https://lofibolly-club.vercel.app/">
						<Lottie options={defaultOptions}
							isClickToPauseDisabled={true}
              height={40}
              width={40}/>
							</a>
						</Box>
            <Box alignSelf="center"
						className={router.pathname == "/mywork" ? "active" : ""}><Link href="/mywork" >My Work</Link></Box>
				</Stack>
			</Box>
		</Flex>
	);
};

export default Navbar;
