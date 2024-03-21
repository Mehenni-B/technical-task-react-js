import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex
      w={'full'}
      h={'30vh'}
      backgroundImage={
        'url(https://www.foodiesfeed.com/wp-content/uploads/2023/08/modern-kitchen-table.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            PERFECT BALANCED, CHEF CREATED MEAL WITH MAXIMUM FLAVOUR
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}

export default Header;