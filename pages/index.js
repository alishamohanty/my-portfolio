import { Box, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function Home() {
	return (
    <Box postion="relative">
      <Box pb={8}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.01 }}
          transition={{ ease: [0.67, 0.67, 0.83, 0.67], duration: 2.2 }}
          exit={{ opacity: 0 }}
        >
          <Image
            borderRadius="full"
            boxSize="170px"
            src="alisha-bg.jpg"
            alt="Alisha Mohanty"
          />
        </motion.div>
      </Box>
      <Box mx={[0, 0, 0, 150]}>
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0 }}
        >
          Namaste. I am{' '}
          <Text as="abbr" fontWeight="bold">
            Alisha Mohanty
          </Text>
          , Software Engineer working at Accenture, open source contributer and
          a freelancer from India. Developing software since 2018. Download my
          resume from{' '}
          <Text as="abbr" fontWeight="bold">
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1tSBaj73UWtiL6QVvNBxVniJE-Mju6V9a?usp=sharing"
            >
              here
            </a>
          </Text>
          .
          <br />I am an ambivert who loves to discover new art and culture and
          understand human psychology. My vibe is mostly lofi music, sipping
          coffee and scribbling my ipad while being close to nature. Always up
          for working on new ideas, learning new skills, technologies tools and
          sharing conversations.🙃
        </motion.div>			
      </Box>
    </Box>
  );
}
