import { render } from '@testing-library/react';
import { MealsSection } from './_index';
import { Provider } from 'react-redux';
import store from '../../../store';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const mockedUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;

describe('MealsSection component', () => {
    beforeEach(() => {
        mockedUseSelector.mockClear();
    });

    it('renders loading spinner when meals are loading', async () => {
        mockedUseSelector.mockReturnValueOnce({ meal: { list: null } });
        const { findByTestId } = render(
            <Provider store={store}>
                <MealsSection />
            </Provider>
        );

        const loadingSpinner = await findByTestId('loading-spinner');
        expect(loadingSpinner).toBeInTheDocument();
    });

    it('renders meals grid when meals are loaded', async () => {
        const mockMeals = [
            { id: 1, name: 'Meal 1', category: 'Category 1', area: 'Area 1', instructions: 'Instructions 1', image: 'image1.jpg' },
            { id: 2, name: 'Meal 2', category: 'Category 2', area: 'Area 2', instructions: 'Instructions 2', image: 'image2.jpg' },
        ];
        mockedUseSelector.mockReturnValueOnce({ meal: { list: mockMeals } });
        const { findByTestId, queryByTestId } = render(
            <Provider store={store}>
                <MealsSection />
            </Provider>
        );

        const mealsGrid = await findByTestId('meals-grid');
        expect(mealsGrid).toBeInTheDocument();

        if (mealsGrid) {
            const loadingSpinner = queryByTestId('loading-spinner');
            expect(loadingSpinner).not.toBeInTheDocument();
        }
    });
});
