import projects from '../data/projects';
import personalProjects from '../data/personalProjects';
import Project from '../components/Project';
import { Grid, Box, SimpleGrid } from '@chakra-ui/react';

const MyWork = () => {
	const projs = projects;
	return (
    <>
      <Box>
        <Box textAlign="left" pb={8} fontWeight="400" fontSize="22px">
          Personal Projects
        </Box>
        <SimpleGrid gap={10} columns={[1, 1, 1, 2]}>
          {personalProjects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Box textAlign="left" pb={8} fontWeight="400" fontSize="22px">
          My Experience
        </Box>
        <SimpleGrid gap={10} columns={[1, 1, 1, 2]}>
          {projs.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
export default MyWork;
