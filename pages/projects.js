import projects from '../data/projects'
import Project from '../components/Project'
import { Grid, Flex, SimpleGrid } from '@chakra-ui/react'

const Projects = () => {
  const projs = projects
  return (<>
    <SimpleGrid gap={20} columns={[1, 1, 2, 2]}>
      {projs.map(project => (<Project key={project.title} project={project}/>))}
    </SimpleGrid>
  </>)
}
export default Projects