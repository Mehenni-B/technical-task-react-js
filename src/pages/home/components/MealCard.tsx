import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
    Flex,
} from '@chakra-ui/react'
import { MealType } from "../../../models/Meal";

const Meal: React.FC<{ meal: MealType }> = (props) => {

    return (
        <>
            <Center py={6}>
                <Box
                    maxW={'445px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                        <Image h={'100%'} w={'100%'} src={props.meal.image} alt={props.meal.name} />
                    </Box>
                    <Stack>
                        <Flex justifyContent={'space-between'}>
                            <Text
                                color={'green.500'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                fontSize={'sm'}
                                letterSpacing={1.1}>
                                {props.meal.category}
                            </Text>
                            <Text
                                color={'green.500'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                fontSize={'sm'}
                                letterSpacing={1.1}>
                                {props.meal.area}
                            </Text>
                        </Flex>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {props.meal.name}
                        </Heading>
                        <Text color={'gray.500'} noOfLines={3}>{props.meal.instructions}</Text>
                    </Stack>
                </Box>
            </Center>
        </>
    );
}

export default Meal;
