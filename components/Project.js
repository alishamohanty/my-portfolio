import { Box, Image, Flex , IconButton  } from '@chakra-ui/react';
import { FaGithub} from 'react-icons/fa';
import {useRouter} from 'next/router'

const Project = ({ project }) => {
  const router = useRouter()
  const routeToLink = () => {
    router.push(project.link)
  }
	return (
		<Box overflow="hidden" mb={10}>
      <Box
        borderRadius="5px"
				borderColor={project.borderColor}
				borderWidth="20px"
				borderBottom="0px"
        _hover={{ transition: 'transform .5s', transform: 'scale(1.02)', cursor: "pointer" }}
        onClick={routeToLink}
        onBlur={{ transition: 'transform .5s ease-out', transform: 'scale(1)' }}
      >
				<Image src={project.imageSrc} alt={project.imageAlt} />
			</Box>
			<Box p="4">
				<Flex
					fontStyle="normal"
					fontWeight="400"
					color="#343b4c"
					fontSize="18px"
					justifyContent="space-between"
					mt="1"
				>
					<Box textAlign="left">{project.title}</Box>
					<Box textAlign="right" pb={2}>
						{project.github ? (
              <IconButton
                as="a"
                backgroundColor="#fff"
								href={project.github}
								aria-label="Twitter"
								icon={<FaGithub fontSize="20px" />}
							/>
						) : (
							''
						)}
					</Box>
				</Flex>
				<Box
					color="gray.500"
					fontFamily="body"
					letterSpacing="wide"
					fontSize="14px"
					textAlign="left"
				>
					{project.description}
				</Box>
        <Box
          pt={4}
					color="gray.500"
					fontFamily="body"
					letterSpacing="wide"
					fontSize="12px"
					textTransform="uppercase"
					textAlign="left"
				>
					{project.time} &bull; {project.place}
				</Box>
			</Box>
		</Box>
	);
};

export default Project;
