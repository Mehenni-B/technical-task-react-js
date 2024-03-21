import { Container } from '@chakra-ui/react';
import { MealsSection } from './components/_index';

const HomePage: React.FC = () => {
    return (
        <Container maxW={'90%'} w={{ lg: '1200px' }}>
            <MealsSection />
        </Container>
    );
}


export default HomePage;