import { Container } from '@chakra-ui/react';
import { MealsSection } from './components/_index';
import { Header } from '../../components/blocks/_index';

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Container maxW={'90%'} w={{ lg: '1200px' }}>
                <MealsSection />
            </Container>
        </>
    );
}

export default HomePage;