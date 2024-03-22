import { Heading, Image, Box, Text } from "@chakra-ui/react"
import notFound from '../../assets/images/not_found.webp'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
    return (
        <>
            <Box boxSize='xl' mx="auto" my={'8'} >
                <Image src={notFound} />
            </Box>
            <Heading as="h1" size="2xl" mt="-48" textAlign={"center"} fontFamily={"poppins"} fontWeight={"medium"}>Not Found 404</Heading>
            <Text textAlign={"center"} fontSize={"xl"} color="#0F82EA" mt="4" pb={'16'} textTransform={"capitalize"} fontWeight={"medium"}>
                <Link to="/">Go back</Link>
            </Text>
        </>
    )
}

export default NotFound;