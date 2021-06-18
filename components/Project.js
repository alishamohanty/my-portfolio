import {Box, Badge, Image, StarIcon} from '@chakra-ui/react'

const Project = ({ project }) => {
  console.log(project)
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4
  }
  return (
  
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image src={project.imageSrc} alt={project.imageAlt} />
    <Box p="4">
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        {project.title}
          </Box>
          <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {project.time} &bull; {project.place}
        </Box>
      </Box>
  </Box>  )
}

export default Project